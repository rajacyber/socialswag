/* tslint:disable */
/* eslint-disable */
import { AgentSshCredentialsRef } from './agent-ssh-credentials-ref';
import { CompanySshCredentialsRef } from './company-ssh-credentials-ref';
import { SshCredType } from './ssh-cred-type';
export interface SshCredentials {
  '_id'?: string;
  assetid?: string;
  'c'?: string;
  cred_type?: SshCredType;
  name?: string;
  passkey?: string;
  password?: string;
  privilaged_password?: string;
  sshcredentialsagentRef?: AgentSshCredentialsRef;
  sshcredentialscompanyRef?: CompanySshCredentialsRef;
  tid?: string;
  'u'?: string;
  username?: string;
}
