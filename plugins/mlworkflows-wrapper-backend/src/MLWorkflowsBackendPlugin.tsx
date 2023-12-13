import { createRouter } from '@oawofolu/plugin-mlworkflows-backend';
import { BackendPluginInterface, BackendPluginSurface, PluginEnvironment } from '@vmware-tanzu/core-backend';
import { Router } from 'express';

const createPlugin = () => {
    return async (env: PluginEnvironment): Promise<Router> => {
        return await createRouter({
        logger: env.logger,
        reader: env.reader,
        });
    };
};

export const MLWorkflowsBackendPlugin: BackendPluginInterface =
  () => surfaces =>
    surfaces.applyTo(BackendPluginSurface, backendPluginSurface => {
    backendPluginSurface.addPlugin({
        name: 'mlworkflows',
        pluginFn: createPlugin(),
    });
    });
