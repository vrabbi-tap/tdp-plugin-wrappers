import { BackstagePluginKubecostPage, isKubecostAvailable } from '@suxess-it/backstage-plugin-kubecost';
import { EntityLayout } from '@backstage/plugin-catalog';
import { AppPluginInterface, AppRouteSurface, EntityPageSurface } from '@vmware-tanzu/core-frontend';
import { SurfaceStoreInterface } from '@vmware-tanzu/core-common';
import React from 'react';
export const KubecostPlugin: AppPluginInterface =
  () => (context: SurfaceStoreInterface) => {
    context.applyWithDependency(
      AppRouteSurface,
      EntityPageSurface,
      (_appRouteSurface, entityPageSurface) => {
        entityPageSurface.servicePage.addTab(
          <EntityLayout.Route if={isKubecostAvailable} path="/kube-cost" title="KubeCost">
            <BackstagePluginKubecostPage />
          </EntityLayout.Route>,
        );
      },
    );
  };
