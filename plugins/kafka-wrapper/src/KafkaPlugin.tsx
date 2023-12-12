import { EntityKafkaContent, isKafkaAvailable } from '@backstage/plugin-kafka';
import { EntityLayout } from '@backstage/plugin-catalog';
import { AppPluginInterface, AppRouteSurface, EntityPageSurface } from '@vmware-tanzu/core-frontend';
import { SurfaceStoreInterface } from '@vmware-tanzu/core-common';
import React from 'react';
export const KafkaFrontendPlugin: AppPluginInterface =
  () => (context: SurfaceStoreInterface) => {
    context.applyWithDependency(
      AppRouteSurface,
      EntityPageSurface,
      (_appRouteSurface, entityPageSurface) => {
        entityPageSurface.servicePage.addTab(
          <EntityLayout.Route if={isKafkaAvailable} path="/kafka" title="Kafka">
              <EntityKafkaContent />
          </EntityLayout.Route>,
        );
      },
    );
  };
