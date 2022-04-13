/* tslint:disable */
/* eslint-disable */
import { AgentAdGpoRef } from './agent-ad-gpo-ref';
import { AssetAdGpoRef } from './asset-ad-gpo-ref';
import { AssetCredentialsAdGpoRef } from './asset-credentials-ad-gpo-ref';
import { CompanyAdGpoRef } from './company-ad-gpo-ref';
export interface AdGpo {
  '_id'?: string;
  agentRef?: AgentAdGpoRef;
  assetRef?: AssetAdGpoRef;
  assetcredentialsRef?: AssetCredentialsAdGpoRef;
  'c'?: string;
  companyRef?: CompanyAdGpoRef;
  displayName?: string;
  domain?: string;
  gpoCreatedTime?: string;
  gpoModifiedTime?: string;
  gpoStatus?: string;
  guid?: string;
  linkedOus?: Array<string>;
  linkedTo?: Array<string>;
  name?: string;
  object_type?: string;
  path?: string;
  tid?: string;
  'u'?: string;
}
