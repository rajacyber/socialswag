/* tslint:disable */
/* eslint-disable */
import { AgentExternalScanSettingsRef } from './agent-external-scan-settings-ref';
import { CompanyExternalScanSettingsRef } from './company-external-scan-settings-ref';
export interface ExternalScanSettingsCreate {
  agentRef?: AgentExternalScanSettingsRef;
  companyRef: CompanyExternalScanSettingsRef;
  full_scan: boolean;
  ip_end?: string;
  ip_start: string;
  name: string;
}
