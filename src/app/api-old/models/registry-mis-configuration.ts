/* tslint:disable */
/* eslint-disable */
import { AgentRegistryMisConfigurationRef } from './agent-registry-mis-configuration-ref';
import { AssetRegistryMisConfigurationRef } from './asset-registry-mis-configuration-ref';
import { CompanyRegistryMisConfigurationRef } from './company-registry-mis-configuration-ref';
export interface RegistryMisConfiguration {
  '_id'?: string;
  agentRef?: AgentRegistryMisConfigurationRef;
  assetRef?: AssetRegistryMisConfigurationRef;
  'c'?: string;
  companyRef?: CompanyRegistryMisConfigurationRef;
  expected?: string;
  found?: string;
  hive?: Array<string>;
  name?: string;
  ref?: string;
  tid?: string;
  type?: string;
  'u'?: string;
}
