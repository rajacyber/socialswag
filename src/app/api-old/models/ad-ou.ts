/* tslint:disable */
/* eslint-disable */
import { AgentAdOuRef } from './agent-ad-ou-ref';
import { AssetAdOuRef } from './asset-ad-ou-ref';
import { AssetCredentialsAdOuRef } from './asset-credentials-ad-ou-ref';
import { CompanyAdOuRef } from './company-ad-ou-ref';
import { OuLinkedGpoCreate } from './ou-linked-gpo-create';
export interface AdOu {
  '_id'?: string;
  agentRef?: AgentAdOuRef;
  assetRef?: AssetAdOuRef;
  assetcredentialsRef?: AssetCredentialsAdOuRef;
  'c'?: string;
  companyRef?: CompanyAdOuRef;
  distinguishedName?: string;
  domain?: string;
  empty?: boolean;
  gpLinks?: Array<string>;
  guid?: string;
  linkedComputers?: Array<string>;
  linkedGPO?: Array<OuLinkedGpoCreate>;
  linkedGroups?: Array<string>;
  linkedUsers?: Array<string>;
  managedBy?: string;
  object_type?: string;
  ouCreated?: string;
  ouModified?: string;
  ouName?: string;
  tid?: string;
  'u'?: string;
}
