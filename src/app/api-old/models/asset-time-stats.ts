/* tslint:disable */
/* eslint-disable */
import { AgentAssetTimeStatsRef } from './agent-asset-time-stats-ref';
import { AssetAssetTimeStatsRef } from './asset-asset-time-stats-ref';
import { CompanyAssetTimeStatsRef } from './company-asset-time-stats-ref';
import { VulStatsCreate } from './vul-stats-create';
export interface AssetTimeStats {
  '_id'?: string;
  agentRef?: AgentAssetTimeStatsRef;
  assetRef?: AssetAssetTimeStatsRef;
  'c'?: string;
  companyRef?: CompanyAssetTimeStatsRef;
  tid?: string;
  'u'?: string;
  vul_stats?: VulStatsCreate;
}
