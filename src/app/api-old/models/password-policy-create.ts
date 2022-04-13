/* tslint:disable */
/* eslint-disable */
import { AgentPasswordPolicyRef } from './agent-password-policy-ref';
import { AssetCredentialsPasswordPolicyRef } from './asset-credentials-password-policy-ref';
import { AssetPasswordPolicyRef } from './asset-password-policy-ref';
import { CompanyPasswordPolicyRef } from './company-password-policy-ref';
export interface PasswordPolicyCreate {
  agentRef: AgentPasswordPolicyRef;
  assetRef?: AssetPasswordPolicyRef;
  assetcredentialsRef?: AssetCredentialsPasswordPolicyRef;
  companyRef: CompanyPasswordPolicyRef;
  complexityEnabled?: boolean;
  distinguishedName?: string;
  domain?: string;
  lockoutDuration?: string;
  lockoutObservationWindow?: string;
  lockoutThreshold?: string;
  maxPasswordAge?: number;
  minPasswordAge?: number;
  minPasswordLength?: number;
  passwordHistoryCount?: number;
  reversibleEncryptionEnabled?: boolean;
}
