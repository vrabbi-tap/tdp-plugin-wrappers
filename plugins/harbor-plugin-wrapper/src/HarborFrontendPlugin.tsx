import { EntityLayout } from '@backstage/plugin-catalog';
import { HarborPage } from '@vrabbi/backstage-plugin-harbor';
import { AppPluginInterface, AppRouteSurface, EntityPageSurface } from '@vmware-tanzu/core-frontend';
import { SurfaceStoreInterface } from '@vmware-tanzu/core-common';
import React from 'react';
export const HarborFrontendPlugin: AppPluginInterface =
  () => (context: SurfaceStoreInterface) => {
    context.applyWithDependency(
      AppRouteSurface,
      EntityPageSurface,
      (_appRouteSurface, entityPageSurface) => {
        entityPageSurface.servicePage.addTab(
          <EntityLayout.Route path="/harbor" title="Harbor">
            <HarborPage />
          </EntityLayout.Route>,
        );
      },
    );
  };
