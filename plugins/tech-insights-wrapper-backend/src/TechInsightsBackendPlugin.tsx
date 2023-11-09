import { createRouter, buildTechInsightsContext, createFactRetrieverRegistration, entityOwnershipFactRetriever, entityMetadataFactRetriever, techdocsFactRetriever } from '@backstage/plugin-tech-insights-backend';
import { JsonRulesEngineFactCheckerFactory, JSON_RULE_ENGINE_CHECK_TYPE } from '@backstage/plugin-tech-insights-backend-module-jsonfc';
import { BackendPluginInterface, BackendPluginSurface, PluginEnvironment } from '@vmware-tanzu/core-backend';
import { Router } from 'express';

const ttlTwoWeeks = { timeToLive: { weeks: 2 } };

const createPlugin = () => {
  return async (env: PluginEnvironment): Promise<Router> => {
    const context = await buildTechInsightsContext({
      logger: env.logger,
      config: env.config,
      database: env.database,
      discovery: env.discovery,
      scheduler: env.scheduler,
      tokenManager: env.tokenManager,
      factRetrievers: [
        createFactRetrieverRegistration({
          cadence: '0 */6 * * *', // Run every 6 hours - https://crontab.guru/#0_*/6_*_*_*
          factRetriever: entityOwnershipFactRetriever,
          lifecycle: ttlTwoWeeks,
        }),
        createFactRetrieverRegistration({
          cadence: '0 */6 * * *',
          factRetriever: entityMetadataFactRetriever,
          lifecycle: ttlTwoWeeks,
        }),
        createFactRetrieverRegistration({
          cadence: '0 */6 * * *',
          factRetriever: techdocsFactRetriever,
          lifecycle: ttlTwoWeeks,
        }),
      ],
      factCheckerFactory: new JsonRulesEngineFactCheckerFactory({
        logger: env.logger,
        checks: [
          {
            id: 'groupOwnerCheck',
            type: JSON_RULE_ENGINE_CHECK_TYPE,
            name: 'Group Owner Check',
            description:
              'Verifies that a Group has been set as the owner for this entity',
            factIds: ['entityOwnershipFactRetriever'],
            rule: {
              conditions: {
                all: [
                  {
                    fact: 'hasGroupOwner',
                    operator: 'equal',
                    value: true,
                  },
                ],
              },
            },
          },
          {
            id: 'titleCheck',
            type: JSON_RULE_ENGINE_CHECK_TYPE,
            name: 'Title Check',
            description:
              'Verifies that a Title (metadata.title), used to improve readability, has been set on this entity',
            factIds: ['entityMetadataFactRetriever'],
            rule: {
              conditions: {
                all: [
                  {
                    fact: 'hasTitle',
                    operator: 'equal',
                    value: true,
                  },
                ],
              },
            },
          },
          {
            id: 'techDocsCheck',
            type: JSON_RULE_ENGINE_CHECK_TYPE,
            name: 'TechDocs Check',
            description:
              'Verifies that TechDocs have been enabled for this entity',
            factIds: ['techdocsFactRetriever'],
            rule: {
              conditions: {
                all: [
                  {
                    fact: 'hasAnnotationBackstageIoTechdocsRef',
                    operator: 'equal',
                    value: true,
                  },
                ],
              },
            },
          },
        ],
      }),
    });

    return await createRouter({
      ...context,
      logger: env.logger,
      config: env.config,
    });
  };
};

export const TechInsightsBackendPlugin: BackendPluginInterface =
  () => surfaces =>
    surfaces.applyTo(BackendPluginSurface, backendPluginSurface => {
      backendPluginSurface.addPlugin({
        name: 'tech-insights',
        pluginFn: createPlugin(),
      });
    });
