import { EntityGrafanaDashboardsCard } from '@k-phoen/backstage-plugin-grafana';
import { Grid } from '@material-ui/core';
import React from 'react';
import { AppPluginInterface, AppRouteSurface, EntityPageSurface } from '@vmware-tanzu/core-frontend';
import { SurfaceStoreInterface } from '@vmware-tanzu/core-common';

export const GrafanaPlugin: AppPluginInterface =
  () => (context: SurfaceStoreInterface) => {
    context.applyWithDependency(
      AppRouteSurface,
      EntityPageSurface,
      (_appRouteSurface, entityPageSurface) => {
        entityPageSurface.addOverviewContent(
          <Grid item md={6}>
            <EntityGrafanaDashboardsCard />
          </Grid>
        );
      },
    );
  };