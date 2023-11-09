import { createRouter } from '@backstage/plugin-azure-devops-backend';
import {
  BackendPluginInterface,
  BackendPluginSurface,
  PluginEnvironment,
} from '@vmware-tanzu/core-backend';
import { Router } from 'express';

const createPlugin = () => {
return async (env: PluginEnvironment): Promise<Router> => {
    return await createRouter({
    logger: env.logger,
    config: env.config,
    reader: env.reader,
    });
};
};

export const AzureDevOpsBackendPlugin: BackendPluginInterface =
  () => surfaces =>
    surfaces.applyTo(BackendPluginSurface, backendPluginSurface => {
    backendPluginSurface.addPlugin({
        name: 'azure-devops',
        pluginFn: createPlugin(),
    });
    });
