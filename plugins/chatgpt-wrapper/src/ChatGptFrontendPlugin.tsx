import { ChatGPTFrontendPage } from '@enfuse/chatgpt-plugin-frontend';
import { AppPluginInterface, AppRouteSurface, SidebarItemSurface } from '@vmware-tanzu/core-frontend';
import { SurfaceStoreInterface } from '@vmware-tanzu/core-common';
import { SidebarItem } from '@backstage/core-components';
import ChatIcon from '@material-ui/icons/Chat';

import React from 'react';
import { Route } from 'react-router';
export const ChatGPTFrontendPlugin: AppPluginInterface =
  () => (context: SurfaceStoreInterface) => {
    context.applyWithDependency(
      AppRouteSurface,
      SidebarItemSurface,
      (_appRouteSurface, sidebarItemSurface) => {
        _appRouteSurface.add(
          <Route path="/chatgpt" element={<ChatGPTFrontendPage />} />
        )
        sidebarItemSurface.addMainItem(
          <SidebarItem icon={ChatIcon} to='chatgpt' text='ChatGPT' />
        );
      }
    );
  }
