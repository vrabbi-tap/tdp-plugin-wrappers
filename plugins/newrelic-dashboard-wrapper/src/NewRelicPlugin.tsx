import { EntityLayout } from '@backstage/plugin-catalog';
import { isNewRelicDashboardAvailable, EntityNewRelicDashboardContent, EntityNewRelicDashboardCard } from '@backstage/plugin-newrelic-dashboard';
import { AppPluginInterface, AppRouteSurface, EntityPageSurface } from '@vmware-tanzu/core-frontend';
import { SurfaceStoreInterface } from '@vmware-tanzu/core-common';
import { Grid } from '@material-ui/core';
import React from 'react';

export const NewRelicDashboardPlugin: AppPluginInterface =
  () => (context: SurfaceStoreInterface) => {
    context.applyWithDependency(
      AppRouteSurface,
      EntityPageSurface,
      (_appRouteSurface, entityPageSurface) => {
        entityPageSurface.addOverviewContent(
            <Grid item md={6} xs={12}>
              <EntityNewRelicDashboardCard />
            </Grid>
          );
        entityPageSurface.servicePage.addTab(
          <EntityLayout.Route if={isNewRelicDashboardAvailable} path="/newrelic-dashboard" title="New Relic Dashboard">
            <EntityNewRelicDashboardContent/>
          </EntityLayout.Route>,
        );
      },
    );
  };