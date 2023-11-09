import { createRouter, DefaultJenkinsInfoProvider } from '@backstage/plugin-jenkins-backend';
import { CatalogClient } from '@backstage/catalog-client';
import { BackendPluginInterface, BackendPluginSurface, PluginEnvironment } from '@vmware-tanzu/core-backend';
import { Router } from 'express';

const createPlugin = () => {
  return async (env: PluginEnvironment): Promise<Router> => {
    const catalog = new CatalogClient({
      discoveryApi: env.discovery,
    });
    
    return await createRouter({
      logger: env.logger,
      jenkinsInfoProvider: DefaultJenkinsInfoProvider.fromConfig({
        config: env.config,
        catalog,
      }),
      permissions: env.permissions,
    });
  };
};

export const JenkinsBackendPlugin: BackendPluginInterface =
  () => surfaces =>
    surfaces.applyTo(BackendPluginSurface, backendPluginSurface => {
    backendPluginSurface.addPlugin({
        name: 'jenkins',
        pluginFn: createPlugin(),
    });
    });
