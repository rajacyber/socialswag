/* tslint:disable */
/* eslint-disable */
import { AgentAssetBestPracticesRef } from './agent-asset-best-practices-ref';
import { AssetAssetBestPracticesRef } from './asset-asset-best-practices-ref';
import { CompanyAssetBestPracticesRef } from './company-asset-best-practices-ref';
export interface AssetBestPractices {
  '_id'?: string;
  agentRef?: AgentAssetBestPracticesRef;
  assetRef?: AssetAssetBestPracticesRef;
  'c'?: string;
  companyRef?: CompanyAssetBestPracticesRef;
  name?: string;
  practice_type?: string;
  status?: number;
  tid?: string;
  'u'?: string;
}
