import { EntityLayout } from '@backstage/plugin-catalog';
import { EntityGithubActionsContent, isGithubActionsAvailable } from '@backstage/plugin-github-actions';
import { AppPluginInterface, AppRouteSurface, EntityPageSurface } from '@vmware-tanzu/core-frontend';
import { SurfaceStoreInterface } from '@vmware-tanzu/core-common';
import React from 'react';

export const GithubActionsPlugin: AppPluginInterface =
  () => (context: SurfaceStoreInterface) => {
    context.applyWithDependency(
      AppRouteSurface,
      EntityPageSurface,
      (_appRouteSurface, entityPageSurface) => {
        entityPageSurface.servicePage.addTab(
          <EntityLayout.Route if={isGithubActionsAvailable} path="/github-actions" title="GitHub Actions">
            <EntityGithubActionsContent/>
          </EntityLayout.Route>,
        );
      },
    );
  };
