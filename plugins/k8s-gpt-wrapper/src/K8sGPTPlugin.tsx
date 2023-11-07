import { EntityLayout } from '@backstage/plugin-catalog';
import { K8sGPTPage } from '@suxess-it/backstage-plugin-k8sgpt';
import { AppPluginInterface, AppRouteSurface, EntityPageSurface } from '@vmware-tanzu/core-frontend';
import { SurfaceStoreInterface } from '@vmware-tanzu/core-common';
import React from 'react';
export const K8sGPTPlugin: AppPluginInterface =
  () => (context: SurfaceStoreInterface) => {
    context.applyWithDependency(
      AppRouteSurface,
      EntityPageSurface,
      (_appRouteSurface, entityPageSurface) => {
        entityPageSurface.servicePage.addTab(
          <EntityLayout.Route path="/k8sgpt" title="K8sGPT">
            <K8sGPTPage  />
          </EntityLayout.Route>,
        );
      },
    );
  };
