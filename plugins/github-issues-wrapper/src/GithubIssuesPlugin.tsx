import { EntityLayout } from '@backstage/plugin-catalog';
import { GithubIssuesPage } from '@backstage/plugin-github-issues';
import { AppPluginInterface, AppRouteSurface, EntityPageSurface } from '@vmware-tanzu/core-frontend';
import { SurfaceStoreInterface } from '@vmware-tanzu/core-common';
import React from 'react';

export const GithubIssuesPlugin: AppPluginInterface =
  () => (context: SurfaceStoreInterface) => {
    context.applyWithDependency(
      AppRouteSurface,
      EntityPageSurface,
      (_appRouteSurface, entityPageSurface) => {
        entityPageSurface.servicePage.addTab(
          <EntityLayout.Route path="/github-issues" title="GitHub Issues">
            <GithubIssuesPage />
          </EntityLayout.Route>,
        );
      },
    );
  };
