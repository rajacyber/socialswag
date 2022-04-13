/* tslint:disable */
/* eslint-disable */
import { AgentSnmpV2CredentialsRef } from './agent-snmp-v-2-credentials-ref';
import { CompanySnmpV2CredentialsRef } from './company-snmp-v-2-credentials-ref';
export interface SnmpV2Credentials {
  '_id'?: string;
  agentRef?: AgentSnmpV2CredentialsRef;
  'c'?: string;
  community?: string;
  companyRef?: CompanySnmpV2CredentialsRef;
  name?: string;
  snmpVersion?: string;
  tid?: string;
  'u'?: string;
}
