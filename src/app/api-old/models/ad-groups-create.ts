/* tslint:disable */
/* eslint-disable */
import { AgentAdGroupsRef } from './agent-ad-groups-ref';
import { AssetAdGroupsRef } from './asset-ad-groups-ref';
import { AssetCredentialsAdGroupsRef } from './asset-credentials-ad-groups-ref';
import { CompanyAdGroupsRef } from './company-ad-groups-ref';
export interface AdGroupsCreate {
  agentRef: AgentAdGroupsRef;
  assetRef?: AssetAdGroupsRef;
  assetcredentialsRef?: AssetCredentialsAdGroupsRef;
  canonicalName?: string;
  category?: string;
  commonName?: string;
  companyRef: CompanyAdGroupsRef;
  distinguishedName?: string;
  domain?: string;
  empty?: boolean;
  groupCreated?: string;
  isCriticalSystemObj?: boolean;
  linkedOus?: Array<string>;
  managedBy?: string;
  members?: Array<string>;
  name?: string;
  object_type: string;
  samAccountName?: string;
  scope?: string;
}
