import { AppPluginInterface, AppRouteSurface, SidebarItemSurface } from '@vmware-tanzu/core-frontend';
import { SurfaceStoreInterface } from '@vmware-tanzu/core-common';
import { SidebarItem } from '@backstage/core-components';
import InfoIcon from '@material-ui/icons/Info';
import React from 'react';
import { Route } from 'react-router';
import { DevToolsPage } from '@backstage/plugin-devtools';
import { customDevToolsPage } from './CustomDevToolsPage'

export const BackstageDevToolsPlugin: AppPluginInterface =
  () => (context: SurfaceStoreInterface) => {
    context.applyWithDependency(
      AppRouteSurface,
      SidebarItemSurface,
      (_appRouteSurface, sidebarItemSurface) => {
        _appRouteSurface.add(
          <Route path="/devtools" element={<DevToolsPage />} >
            {customDevToolsPage}
          </Route>
        )
        sidebarItemSurface.addMainItem(
          <SidebarItem icon={InfoIcon} to='devtools' text='Backstage Dev Tools' />
        );
      }
    );
  }

