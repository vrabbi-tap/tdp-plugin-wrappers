import React from 'react';
import { EntityLayout } from '@backstage/plugin-catalog';
import { EntityPrometheusContent } from '@roadiehq/backstage-plugin-prometheus';
import { AppPluginInterface, AppRouteSurface, EntityPageSurface } from '@vmware-tanzu/core-frontend';
import { SurfaceStoreInterface } from '@vmware-tanzu/core-common';

export const PrometheusPlugin: AppPluginInterface =
  () => (context: SurfaceStoreInterface) => {
    context.applyWithDependency(
      AppRouteSurface,
      EntityPageSurface,
      (_appRouteSurface, entityPageSurface) => {
        entityPageSurface.servicePage.addTab(
          <EntityLayout.Route path="/prometheus" title="Prometheus">
            <EntityPrometheusContent />
          </EntityLayout.Route>,
        );
      },
    );
  };