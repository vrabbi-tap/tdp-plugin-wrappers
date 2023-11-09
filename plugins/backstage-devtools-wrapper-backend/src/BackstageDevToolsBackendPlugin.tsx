import { createRouter } from '@backstage/plugin-devtools-backend';
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
    permissions: env.permissions,
    });
};
};

export const BackstageDevToolsBackendPlugin: BackendPluginInterface =
  () => surfaces =>
    surfaces.applyTo(BackendPluginSurface, backendPluginSurface => {
    backendPluginSurface.addPlugin({
        name: 'devtools',
        pluginFn: createPlugin(),
    });
    });
