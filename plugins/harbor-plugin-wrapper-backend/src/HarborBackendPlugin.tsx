import { createRouter } from '@vrabbi/backstage-plugin-harbor-backend';
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
    });
};
};

export const HarborBackendPlugin: BackendPluginInterface =
  () => surfaces =>
    surfaces.applyTo(BackendPluginSurface, backendPluginSurface => {
    backendPluginSurface.addPlugin({
        name: 'harbor',
        pluginFn: createPlugin(),
    });
    });
