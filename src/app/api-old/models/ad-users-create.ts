/* tslint:disable */
/* eslint-disable */
import { AgentAdUsersRef } from './agent-ad-users-ref';
import { AssetAdUsersRef } from './asset-ad-users-ref';
import { AssetCredentialsAdUsersRef } from './asset-credentials-ad-users-ref';
import { CompanyAdUsersRef } from './company-ad-users-ref';
export interface AdUsersCreate {
  accountExpireDate?: string;
  accountLockoutTime?: string;
  agentRef: AgentAdUsersRef;
  assetRef?: AssetAdUsersRef;
  assetcredentialsRef?: AssetCredentialsAdUsersRef;
  badLogonCount?: number;
  buildInAdmin?: boolean;
  cannotChangePassword?: boolean;
  companyRef: CompanyAdUsersRef;
  department?: string;
  displayName?: string;
  distinguishedName?: string;
  domain?: string;
  domainAdmin?: boolean;
  emailAddress?: string;
  enabled?: boolean;
  enterpriseAdmin?: boolean;
  homeDirectory?: string;
  homeDrive?: string;
  lastLogonDate?: string;
  lastLogonTimestamp?: string;
  lastbadPwdAttempt?: string;
  linkedOus?: Array<string>;
  lockedOut?: boolean;
  logonCount?: number;
  memberOf?: Array<string>;
  name?: string;
  object_type: string;
  office?: string;
  passwordExpireDate?: string;
  passwordExpired?: boolean;
  passwordLastSet?: string;
  passwordNeverExpires?: boolean;
  passwordNotRequired?: boolean;
  samAccountName?: string;
  sid?: string;
  whenCreated?: string;
  whenModified?: string;
}
