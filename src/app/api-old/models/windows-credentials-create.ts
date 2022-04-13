/* tslint:disable */
/* eslint-disable */
import { AgentWindowsCredentialsRef } from './agent-windows-credentials-ref';
import { CompanyWindowsCredentialsRef } from './company-windows-credentials-ref';
export interface WindowsCredentialsCreate {
  assetid?: string;
  domain?: string;
  host_name?: string;
  name: string;
  password: string;
  username: string;
  windowscredentialsagentRef: AgentWindowsCredentialsRef;
  windowscredentialscompanyRef: CompanyWindowsCredentialsRef;
}
