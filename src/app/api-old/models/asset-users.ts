/* tslint:disable */
/* eslint-disable */
import { AgentAssetUsersRef } from './agent-asset-users-ref';
import { AssetAssetUsersRef } from './asset-asset-users-ref';
import { CompanyAssetUsersRef } from './company-asset-users-ref';
export interface AssetUsers {
  '_id'?: string;
  agentRef?: AgentAssetUsersRef;
  assetRef?: AssetAssetUsersRef;
  'c'?: string;
  companyRef?: CompanyAssetUsersRef;
  description?: string;
  directory?: string;
  gid?: number;
  shell?: string;
  tid?: string;
  'u'?: string;
  uid?: number;
  username?: string;
}
