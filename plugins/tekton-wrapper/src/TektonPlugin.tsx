import { TektonCI, isTektonCIAvailable } from '@janus-idp/backstage-plugin-tekton';
import { EntityLayout } from '@backstage/plugin-catalog';
import { AppPluginInterface, AppRouteSurface, EntityPageSurface } from '@vmware-tanzu/core-frontend';
import { SurfaceStoreInterface } from '@vmware-tanzu/core-common';
import React from 'react';
export const TektonPlugin: AppPluginInterface =
  () => (context: SurfaceStoreInterface) => {
    context.applyWithDependency(
      AppRouteSurface,
      EntityPageSurface,
      (_appRouteSurface, entityPageSurface) => {
        entityPageSurface.servicePage.addTab(
          <EntityLayout.Route if={isTektonCIAvailable} path="/tekton" title="Tekton">
            <TektonCI />
          </EntityLayout.Route>,
        );
      },
    );
  };
