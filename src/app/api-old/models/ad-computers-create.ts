/* tslint:disable */
/* eslint-disable */
import { AgentAdComputersRef } from './agent-ad-computers-ref';
import { AssetAdComputersRef } from './asset-ad-computers-ref';
import { AssetCredentialsAdComputersRef } from './asset-credentials-ad-computers-ref';
import { CompanyAdComputersRef } from './company-ad-computers-ref';
export interface AdComputersCreate {
  OperatingSystemVersion?: string;
  agentRef: AgentAdComputersRef;
  assetRef?: AssetAdComputersRef;
  assetcredentialsRef?: AssetCredentialsAdComputersRef;
  companyRef: CompanyAdComputersRef;
  distinguishedName?: string;
  dnsHostName?: string;
  domain?: string;
  enabled?: boolean;
  host_name?: string;
  lastLogonDate?: string;
  lastLogonTimestamp?: string;
  linkedOus?: Array<string>;
  lockedOut?: boolean;
  name?: string;
  object_type: string;
  osname?: string;
  passwordExpired?: boolean;
  passwordLastSet?: string;
  passwordNeverExpires?: boolean;
  passwordNotRequired?: boolean;
  samAccountName?: string;
  whenCreated?: string;
  whenModified?: string;
}
