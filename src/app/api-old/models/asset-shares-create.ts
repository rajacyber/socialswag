/* tslint:disable */
/* eslint-disable */
import { AgentAssetSharesRef } from './agent-asset-shares-ref';
import { AssetAssetSharesRef } from './asset-asset-shares-ref';
import { CompanyAssetSharesRef } from './company-asset-shares-ref';
export interface AssetSharesCreate {
  agentRef: AgentAssetSharesRef;
  anonymous_access: string;
  assetRef: AssetAssetSharesRef;
  companyRef: CompanyAssetSharesRef;
  path: string;
}
