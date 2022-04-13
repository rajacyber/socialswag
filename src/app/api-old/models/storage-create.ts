/* tslint:disable */
/* eslint-disable */
import { AgentStorageRef } from './agent-storage-ref';
import { AssetStorageRef } from './asset-storage-ref';
import { CompanyStorageRef } from './company-storage-ref';
export interface StorageCreate {
  agentRef: AgentStorageRef;
  assetRef: AssetStorageRef;
  companyRef: CompanyStorageRef;
  device: string;
  encrypted?: number;
  free: number;
  mountpoint: string;
  total: number;
  used: number;
}
