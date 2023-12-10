import { NewRelicPage } from '@backstage/plugin-newrelic';
import { AppPluginInterface, AppRouteSurface, SidebarItemSurface } from '@vmware-tanzu/core-frontend';
import { SurfaceStoreInterface } from '@vmware-tanzu/core-common';
import { SidebarItem } from '@backstage/core-components';
import ExtensionIcon from '@material-ui/icons/ExtensionOutlined';
import React from 'react';
import { Route } from 'react-router';

export const NewRelicApmPlugin: AppPluginInterface =
  () => (context: SurfaceStoreInterface) => {
    context.applyWithDependency(
      AppRouteSurface,
      SidebarItemSurface,
      (_appRouteSurface, sidebarItemSurface) => {
        _appRouteSurface.add(
            <Route path="/newrelic" element={<NewRelicPage />} />
          )
          sidebarItemSurface.addMainItem(
            <SidebarItem icon={ExtensionIcon} to='newrelic' text='New Relic APM' />
          );
        }
      );
    }
