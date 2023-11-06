import { EntityLayout } from '@backstage/plugin-catalog';
import {
  EntityFluxGitRepositoriesCard,
  EntityFluxOCIRepositoriesCard,
  EntityFluxHelmRepositoriesCard,
} from '@weaveworksoss/backstage-plugin-flux';
import { AppPluginInterface, AppRouteSurface, EntityPageSurface } from '@vmware-tanzu/core-frontend';
import { SurfaceStoreInterface } from '@vmware-tanzu/core-common';
import React from 'react';
import { Grid } from '@material-ui/core';

export const FluxPlugin: AppPluginInterface =
  () => (context: SurfaceStoreInterface) => {
    context.applyWithDependency(
      AppRouteSurface,
      EntityPageSurface,
      (_appRouteSurface, entityPageSurface) => {
        entityPageSurface.servicePage.addTab(
          <EntityLayout.Route path="/flux" title="FluxCD Resources">
                <Grid container spacing={3} alignItems="stretch">
                  <Grid item md={12}>
                    <EntityFluxHelmRepositoriesCard />
                  </Grid>
                  <Grid item md={12}>
                    <EntityFluxGitRepositoriesCard />
                  </Grid>
                  <Grid item md={12}>
                    <EntityFluxOCIRepositoriesCard />
                  </Grid>
                </Grid>
          </EntityLayout.Route>,
        );
      },
    );
  };
