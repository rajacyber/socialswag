/* tslint:disable */
/* eslint-disable */
import { AgentAssetRunningProcessRef } from './agent-asset-running-process-ref';
import { AssetAssetRunningProcessRef } from './asset-asset-running-process-ref';
import { CompanyAssetRunningProcessRef } from './company-asset-running-process-ref';
export interface AssetRunningProcessCreate {
  address: string;
  agentRef: AgentAssetRunningProcessRef;
  assetRef: AssetAssetRunningProcessRef;
  companyRef: CompanyAssetRunningProcessRef;
  name?: string;
  path?: string;
  port: number;
  protocol: number;
}
