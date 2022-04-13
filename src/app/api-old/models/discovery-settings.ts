/* tslint:disable */
/* eslint-disable */
import { AgentDiscoverySettingsRef } from './agent-discovery-settings-ref';
import { CompanyDiscoverySettingsRef } from './company-discovery-settings-ref';
export interface DiscoverySettings {
  '_id'?: string;
  agentRef?: AgentDiscoverySettingsRef;
  'c'?: string;
  companyRef?: CompanyDiscoverySettingsRef;
  discovery_type?: string;
  ip_end?: string;
  ip_start?: string;
  isExcluded?: boolean;
  name?: string;
  subnet_mask?: string;
  tid?: string;
  'u'?: string;
}
