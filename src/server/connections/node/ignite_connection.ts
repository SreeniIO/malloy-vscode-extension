/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 *  LICENSE file in the root directory of this source tree.
 */

import {IgniteConnection} from '@malloydata/db-ignite';
import {
  IgniteConnectionConfig,
  ConfigOptions,
} from '../../../common/types/connection_manager_types';

export const createIgniteConnection = async (
  connectionConfig: IgniteConnectionConfig,
  {rowLimit}: ConfigOptions
): Promise<IgniteConnection> => {
  const {endPoint, defaultCacheName} = connectionConfig;
  const options = {
    defaultCacheName,
    endPoint,
  };
  const configReader = async () => {
    return {
      ...options,
    };
  };
  console.info('Creating ignite connection with', JSON.stringify(options));
  const connection = new IgniteConnection(
    connectionConfig.name,
    () => ({rowLimit}),
    configReader
  );
  return connection;
};
