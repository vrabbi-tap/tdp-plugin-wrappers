import { EntityAzurePipelinesContent, EntityAzurePullRequestsContent, EntityAzureGitTagsContent, EntityAzureReadmeCard, isAzureDevOpsAvailable } from '@backstage/plugin-azure-devops';
import { EntityLayout } from '@backstage/plugin-catalog';
import { AppPluginInterface, AppRouteSurface, EntityPageSurface } from '@vmware-tanzu/core-frontend';
import { SurfaceStoreInterface } from '@vmware-tanzu/core-common';
import React from 'react';
import { Grid } from '@material-ui/core';
export const AzureDevOpsFrontendPlugin: AppPluginInterface =
  () => (context: SurfaceStoreInterface) => {
    context.applyWithDependency(
      AppRouteSurface,
      EntityPageSurface,
      (_appRouteSurface, entityPageSurface) => {
        entityPageSurface.servicePage.addTab(
          <EntityLayout.Route if={isAzureDevOpsAvailable} path="/ado-pull-requests" title="Azure DevOps PRs">
            <EntityAzurePullRequestsContent defaultLimit={25} />
          </EntityLayout.Route>,
        );
        entityPageSurface.servicePage.addTab(
          <EntityLayout.Route if={isAzureDevOpsAvailable} path="/ado-git-tags" title="Azure DevOps Git Tags">
            <EntityAzureGitTagsContent />
          </EntityLayout.Route>,
        );
        entityPageSurface.servicePage.addTab(
          <EntityLayout.Route if={isAzureDevOpsAvailable} path="/ado-pipelines" title="Azure DevOps Pipelines">
            <EntityAzurePipelinesContent defaultLimit={25} />
          </EntityLayout.Route>,
        );
      },
    );
  };

