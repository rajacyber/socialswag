/* tslint:disable */
/* eslint-disable */
import { AgentDiscoverySettingsRef } from './agent-discovery-settings-ref';
import { CompanyDiscoverySettingsRef } from './company-discovery-settings-ref';
export interface DiscoverySettingsCreate {
  agentRef: AgentDiscoverySettingsRef;
  companyRef: CompanyDiscoverySettingsRef;
  discovery_type: string;
  ip_end?: string;
  ip_start: string;
  isExcluded?: boolean;
  name: string;
  subnet_mask?: string;
}
