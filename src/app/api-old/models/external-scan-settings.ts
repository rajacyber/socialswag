/* tslint:disable */
/* eslint-disable */
import { AgentExternalScanSettingsRef } from './agent-external-scan-settings-ref';
import { CompanyExternalScanSettingsRef } from './company-external-scan-settings-ref';
export interface ExternalScanSettings {
  '_id'?: string;
  agentRef?: AgentExternalScanSettingsRef;
  'c'?: string;
  companyRef?: CompanyExternalScanSettingsRef;
  full_scan?: boolean;
  ip_end?: string;
  ip_start?: string;
  name?: string;
  tid?: string;
  'u'?: string;
}
