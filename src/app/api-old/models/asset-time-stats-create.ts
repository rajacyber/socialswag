/* tslint:disable */
/* eslint-disable */
import { AgentAssetTimeStatsRef } from './agent-asset-time-stats-ref';
import { AssetAssetTimeStatsRef } from './asset-asset-time-stats-ref';
import { CompanyAssetTimeStatsRef } from './company-asset-time-stats-ref';
import { VulStatsCreate } from './vul-stats-create';
export interface AssetTimeStatsCreate {
  agentRef: AgentAssetTimeStatsRef;
  assetRef: AssetAssetTimeStatsRef;
  companyRef: CompanyAssetTimeStatsRef;
  vul_stats?: VulStatsCreate;
}
