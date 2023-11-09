import { EntityLayout } from '@backstage/plugin-catalog';
import { AppPluginInterface, AppRouteSurface, EntityPageSurface } from '@vmware-tanzu/core-frontend';
import { SurfaceStoreInterface } from '@vmware-tanzu/core-common';
import React from 'react';
import { EntityJenkinsContent, isJenkinsAvailable } from '@backstage/plugin-jenkins';

export const JenkinsFrontendPlugin: AppPluginInterface =
  () => (context: SurfaceStoreInterface) => {
    context.applyWithDependency(
      AppRouteSurface,
      EntityPageSurface,
      (_appRouteSurface, entityPageSurface) => {
        entityPageSurface.servicePage.addTab(
          <EntityLayout.Route if={isJenkinsAvailable} path="/jenkins" title="Jenkins">
            <EntityJenkinsContent />
          </EntityLayout.Route>,
        );
      },
    );
  };
