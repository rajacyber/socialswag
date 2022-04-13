/* tslint:disable */
/* eslint-disable */
import { AgentSnmpV2CredentialsRef } from './agent-snmp-v-2-credentials-ref';
import { CompanySnmpV2CredentialsRef } from './company-snmp-v-2-credentials-ref';
export interface SnmpV2CredentialsCreate {
  agentRef?: AgentSnmpV2CredentialsRef;
  community: string;
  companyRef: CompanySnmpV2CredentialsRef;
  name: string;
  snmpVersion: string;
}
