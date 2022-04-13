/* tslint:disable */
/* eslint-disable */
import { AgentType } from './agent-type';
import { CompanyAgentRef } from './company-agent-ref';
import { OsType } from './os-type';
export interface Agent {
  '_id'?: string;
  agent_type?: AgentType;
  'c'?: string;
  companyRef?: CompanyAgentRef;
  host_name?: string;
  ip?: string;
  lastscannedtime?: string;
  name?: string;
  ostype?: OsType;
  tags?: Array<string>;
  tid?: string;
  'u'?: string;
  version?: string;
}
