/* tslint:disable */
/* eslint-disable */
import { AgentAssetSharesRef } from './agent-asset-shares-ref';
import { AssetAssetSharesRef } from './asset-asset-shares-ref';
import { CompanyAssetSharesRef } from './company-asset-shares-ref';
export interface AssetShares {
  '_id'?: string;
  agentRef?: AgentAssetSharesRef;
  anonymous_access?: string;
  assetRef?: AssetAssetSharesRef;
  'c'?: string;
  companyRef?: CompanyAssetSharesRef;
  path?: string;
  tid?: string;
  'u'?: string;
}
