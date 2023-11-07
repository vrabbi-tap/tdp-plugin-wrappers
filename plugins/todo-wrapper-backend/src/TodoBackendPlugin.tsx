import {
    createRouter,
    TodoReaderService,
    TodoScmReader,
  } from '@backstage/plugin-todo-backend';
import { CatalogClient } from '@backstage/catalog-client';
import {
  BackendPluginInterface,
  BackendPluginSurface,
  PluginEnvironment,
} from '@vmware-tanzu/core-backend';
import { Router } from 'express';

const createPlugin = () => {
return async (env: PluginEnvironment): Promise<Router> => {
      const todoReader = TodoScmReader.fromConfig(env.config, {
        logger: env.logger,
        reader: env.reader,
      });
    
      const catalogClient = new CatalogClient({
        discoveryApi: env.discovery,
      });
    
      const todoService = new TodoReaderService({
        todoReader,
        catalogClient,
      });

      return await createRouter({ todoService });
};
};

export const TodoBackendPlugin: BackendPluginInterface =
  () => surfaces =>
    surfaces.applyTo(BackendPluginSurface, backendPluginSurface => {
    backendPluginSurface.addPlugin({
        name: 'todo',
        pluginFn: createPlugin(),
    });
    });
