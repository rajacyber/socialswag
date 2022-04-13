/* tslint:disable */
/* eslint-disable */
import { AgentData } from './agent-data';
import { AssetData } from './asset-data';
export interface AssetCollection {
  '_id'?: string;
  ad_asset_id?: string;
  agent_data?: AgentData;
  agent_id?: string;
  agent_version?: string;
  asset_id?: string;
  'c'?: string;
  companyid?: string;
  cred_id?: string;
  data?: AssetData;
  job_id?: string;
  local_agent_id?: string;
  tid?: string;
  'u'?: string;
}
