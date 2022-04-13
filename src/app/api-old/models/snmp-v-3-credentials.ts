/* tslint:disable */
/* eslint-disable */
import { AgentSnmpV3CredentialsRef } from './agent-snmp-v-3-credentials-ref';
import { CompanySnmpV3CredentialsRef } from './company-snmp-v-3-credentials-ref';
export interface SnmpV3Credentials {
  '_id'?: string;
  agentRef?: AgentSnmpV3CredentialsRef;
  assetid?: string;
  authPass?: string;
  authProtocol?: string;
  'c'?: string;
  companyRef?: CompanySnmpV3CredentialsRef;
  name?: string;
  privacyPass?: string;
  privacyProtocol?: string;
  securityName?: string;
  tid?: string;
  'u'?: string;
}
