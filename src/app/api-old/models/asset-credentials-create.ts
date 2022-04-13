/* tslint:disable */
/* eslint-disable */
import { AgentAssetCredentialsRef } from './agent-asset-credentials-ref';
import { CompanyAssetCredentialsRef } from './company-asset-credentials-ref';
import { CredType } from './cred-type';
export interface AssetCredentialsCreate {
  agentRef: AgentAssetCredentialsRef;
  assetid?: string;
  companyRef: CompanyAssetCredentialsRef;
  cred_type: CredType;
  domain?: string;
  hostname?: string;
  name: string;
  passkey?: string;
  password?: string;
  privilagedPassword?: string;
  username: string;
}
