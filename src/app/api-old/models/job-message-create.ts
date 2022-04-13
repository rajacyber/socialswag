/* tslint:disable */
/* eslint-disable */
import { AssetInvertoryJobMessageCreate } from './asset-invertory-job-message-create';
import { VulnerabilityJobMessageCreate } from './vulnerability-job-message-create';
export interface JobMessageCreate {
  assetInventoryStatus?: AssetInvertoryJobMessageCreate;
  assetJobStatus?: Array<VulnerabilityJobMessageCreate>;
  assetSnmpJobStatus?: Array<VulnerabilityJobMessageCreate>;
}
