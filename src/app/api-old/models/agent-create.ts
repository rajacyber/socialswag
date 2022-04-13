/* tslint:disable */
/* eslint-disable */
import { AgentType } from './agent-type';
import { CompanyAgentRef } from './company-agent-ref';
import { OsType } from './os-type';
export interface AgentCreate {
  agent_type?: AgentType;
  companyRef?: CompanyAgentRef;
  host_name?: string;
  ip?: string;
  lastscannedtime?: string;
  name: string;
  ostype?: OsType;
  tags?: Array<string>;
  version?: string;
}
