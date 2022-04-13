/* tslint:disable */
/* eslint-disable */
import { AgentSnmpV1CredentialsRef } from './agent-snmp-v-1-credentials-ref';
import { CompanySnmpV1CredentialsRef } from './company-snmp-v-1-credentials-ref';
export interface SnmpV1CredentialsCreate {
  agentRef: AgentSnmpV1CredentialsRef;
  assetid?: string;
  community: string;
  companyRef: CompanySnmpV1CredentialsRef;
  name: string;
}
