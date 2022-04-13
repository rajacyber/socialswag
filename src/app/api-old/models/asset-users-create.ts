/* tslint:disable */
/* eslint-disable */
import { AgentAssetUsersRef } from './agent-asset-users-ref';
import { AssetAssetUsersRef } from './asset-asset-users-ref';
import { CompanyAssetUsersRef } from './company-asset-users-ref';
export interface AssetUsersCreate {
  agentRef: AgentAssetUsersRef;
  assetRef: AssetAssetUsersRef;
  companyRef: CompanyAssetUsersRef;
  description: string;
  directory: string;
  gid: number;
  shell: string;
  uid: number;
  username: string;
}
