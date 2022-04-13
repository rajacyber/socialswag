/* tslint:disable */
/* eslint-disable */
import { AgentAssetCredentialsRef } from './agent-asset-credentials-ref';
import { CompanyAssetCredentialsRef } from './company-asset-credentials-ref';
import { CredType } from './cred-type';
export interface AssetCredentials {
  '_id'?: string;
  agentRef?: AgentAssetCredentialsRef;
  assetid?: string;
  'c'?: string;
  companyRef?: CompanyAssetCredentialsRef;
  cred_type?: CredType;
  domain?: string;
  hostname?: string;
  name?: string;
  passkey?: string;
  password?: string;
  privilagedPassword?: string;
  tid?: string;
  'u'?: string;
  username?: string;
}
