/* tslint:disable */
/* eslint-disable */
import { AgentDataCreate } from './agent-data-create';
import { AssetDataCreate } from './asset-data-create';
export interface AssetCollectionCreate {
  ad_asset_id?: string;
  agent_data?: AgentDataCreate;
  agent_id: string;
  agent_version: string;
  asset_id: string;
  companyid: string;
  cred_id?: string;
  data: AssetDataCreate;
  job_id?: string;
  local_agent_id?: string;
}
