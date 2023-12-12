import { EntityLayout } from '@backstage/plugin-catalog';
import { EntityDatadogContent, isDatadogAvailable } from '@roadiehq/backstage-plugin-datadog';
import { AppPluginInterface, AppRouteSurface, EntityPageSurface } from '@vmware-tanzu/core-frontend';
import { SurfaceStoreInterface } from '@vmware-tanzu/core-common';
import React from 'react';

export const DataDogPlugin: AppPluginInterface =
  () => (context: SurfaceStoreInterface) => {
    context.applyWithDependency(
      AppRouteSurface,
      EntityPageSurface,
      (_appRouteSurface, entityPageSurface) => {
        entityPageSurface.servicePage.addTab(
          <EntityLayout.Route if={isDatadogAvailable} path="/datadog" title="Datadog">
            <EntityDatadogContent/>
          </EntityLayout.Route>,
        );
      },
    );
  };