import { EntityVaultCard, isVaultAvailable } from '@backstage/plugin-vault';
import { EntityLayout } from '@backstage/plugin-catalog';
import { AppPluginInterface, AppRouteSurface, EntityPageSurface } from '@vmware-tanzu/core-frontend';
import { SurfaceStoreInterface } from '@vmware-tanzu/core-common';
import React from 'react';
import { Grid } from '@material-ui/core';
export const VaultFrontendPlugin: AppPluginInterface =
  () => (context: SurfaceStoreInterface) => {
    context.applyWithDependency(
      AppRouteSurface,
      EntityPageSurface,
      (_appRouteSurface, entityPageSurface) => {
        entityPageSurface.servicePage.addTab(
          <EntityLayout.Route if={isVaultAvailable} path="/vault" title="Vault">
             <Grid container spacing={3} alignItems="stretch">
               <Grid item md={12}>
                 <EntityVaultCard />
               </Grid>
             </Grid>
          </EntityLayout.Route>,
        );
      },
    );
  };
