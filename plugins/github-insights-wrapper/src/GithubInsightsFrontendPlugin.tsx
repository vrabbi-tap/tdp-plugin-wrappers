import { EntityLayout } from '@backstage/plugin-catalog';
import { EntityGithubInsightsContent, isGithubInsightsAvailable } from '@roadiehq/backstage-plugin-github-insights';
import { AppPluginInterface, AppRouteSurface, EntityPageSurface } from '@vmware-tanzu/core-frontend';
import { SurfaceStoreInterface } from '@vmware-tanzu/core-common';
import React from 'react';

export const GithubInsightsFrontendPlugin: AppPluginInterface =
  () => (context: SurfaceStoreInterface) => {
    context.applyWithDependency(
      AppRouteSurface,
      EntityPageSurface,
      (_appRouteSurface, entityPageSurface) => {
        entityPageSurface.servicePage.addTab(
          <EntityLayout.Route if={isGithubInsightsAvailable} path="/code-insights" title="Code Insights">
            <EntityGithubInsightsContent/>
          </EntityLayout.Route>,
        );
      },
    );
  };
