import { EntityLayout } from '@backstage/plugin-catalog';
import { EntitySecurityInsightsContent, EntityGithubDependabotContent, isSecurityInsightsAvailable } from '@roadiehq/backstage-plugin-security-insights';
import { AppPluginInterface, AppRouteSurface, EntityPageSurface } from '@vmware-tanzu/core-frontend';
import { SurfaceStoreInterface } from '@vmware-tanzu/core-common';
import React from 'react';

export const SecurityInsightsFrontendPlugin: AppPluginInterface =
  () => (context: SurfaceStoreInterface) => {
    context.applyWithDependency(
      AppRouteSurface,
      EntityPageSurface,
      (_appRouteSurface, entityPageSurface) => {
        entityPageSurface.servicePage.addTab(
          <EntityLayout.Route if={isSecurityInsightsAvailable} path="/security-insights" title="Security Insights">
            <EntitySecurityInsightsContent />
          </EntityLayout.Route>,
        );
        entityPageSurface.servicePage.addTab(
          <EntityLayout.Route if={isSecurityInsightsAvailable} path="/dependabot" title="Dependabot">
            <EntityGithubDependabotContent />
          </EntityLayout.Route>,
        );
      },
    );
  };
