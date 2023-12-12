import { createRouter } from '@backstage/plugin-kafka-backend';
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

export const KafkaBackendPlugin: BackendPluginInterface =
  () => surfaces =>
    surfaces.applyTo(BackendPluginSurface, backendPluginSurface => {
    backendPluginSurface.addPlugin({
        name: 'kafka',
        pluginFn: createPlugin(),
    });
    });
