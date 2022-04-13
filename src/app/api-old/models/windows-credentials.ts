/* tslint:disable */
/* eslint-disable */
import { AgentWindowsCredentialsRef } from './agent-windows-credentials-ref';
import { CompanyWindowsCredentialsRef } from './company-windows-credentials-ref';
export interface WindowsCredentials {
  '_id'?: string;
  assetid?: string;
  'c'?: string;
  domain?: string;
  host_name?: string;
  name?: string;
  password?: string;
  tid?: string;
  'u'?: string;
  username?: string;
  windowscredentialsagentRef?: AgentWindowsCredentialsRef;
  windowscredentialscompanyRef?: CompanyWindowsCredentialsRef;
}
