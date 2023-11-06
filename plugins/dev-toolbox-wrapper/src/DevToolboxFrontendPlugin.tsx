import { ChatGPTFrontendPage } from '@enfuse/chatgpt-plugin-frontend';
import { AppPluginInterface, AppRouteSurface, SidebarItemSurface } from '@vmware-tanzu/core-frontend';
import { SurfaceStoreInterface } from '@vmware-tanzu/core-common';
import { SidebarItem } from '@backstage/core-components';
import BuildIcon from '@material-ui/icons/Build';
import { ToolboxPage } from '@drodil/backstage-plugin-toolbox';
import React from 'react';
import { Route } from 'react-router';

export const DevToolboxFrontendPlugin: AppPluginInterface =
  () => (context: SurfaceStoreInterface) => {
    context.applyWithDependency(
      AppRouteSurface,
      SidebarItemSurface,
      (_appRouteSurface, sidebarItemSurface) => {
        _appRouteSurface.add(
          <Route path="/toolbox" element={<ToolboxPage />} />
        )
        sidebarItemSurface.addMainItem(
          <SidebarItem icon={BuildIcon} to='toolbox' text='Dev Toolbox' />
        );
      }
    );
  }

