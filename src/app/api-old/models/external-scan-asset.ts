/* tslint:disable */
/* eslint-disable */
import { AgentExternalScanAssetRef } from './agent-external-scan-asset-ref';
import { CompanyExternalScanAssetRef } from './company-external-scan-asset-ref';
import { ExternalScanSettingsExternalScanAssetRef } from './external-scan-settings-external-scan-asset-ref';
import { ExternalVulStatsCreate } from './external-vul-stats-create';
export interface ExternalScanAsset {
  '_id'?: string;
  agentRef?: AgentExternalScanAssetRef;
  'c'?: string;
  companyRef?: CompanyExternalScanAssetRef;
  domain_name?: string;
  externalscansettingsRef?: ExternalScanSettingsExternalScanAssetRef;
  host_name?: string;
  ip?: string;
  scan_status?: boolean;
  tid?: string;
  'u'?: string;
  vul_stats?: ExternalVulStatsCreate;
}
