/* tslint:disable */
/* eslint-disable */
import { AgentStorageRef } from './agent-storage-ref';
import { AssetStorageRef } from './asset-storage-ref';
import { CompanyStorageRef } from './company-storage-ref';
export interface Storage {
  '_id'?: string;
  agentRef?: AgentStorageRef;
  assetRef?: AssetStorageRef;
  'c'?: string;
  companyRef?: CompanyStorageRef;
  device?: string;
  encrypted?: number;
  free?: number;
  mountpoint?: string;
  tid?: string;
  total?: number;
  'u'?: string;
  used?: number;
}
