/* tslint:disable */
/* eslint-disable */
import { AgentPortsRef } from './agent-ports-ref';
import { AssetPortsRef } from './asset-ports-ref';
import { CompanyPortsRef } from './company-ports-ref';
export interface Ports {
  '_id'?: string;
  agentRef?: AgentPortsRef;
  assetRef?: AssetPortsRef;
  'c'?: string;
  companyRef?: CompanyPortsRef;
  isSecure?: boolean;
  name?: string;
  path?: string;
  port?: number;
  service?: string;
  tid?: string;
  'u'?: string;
  version?: string;
  vulCount?: number;
}
