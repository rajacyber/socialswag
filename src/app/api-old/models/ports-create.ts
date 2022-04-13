/* tslint:disable */
/* eslint-disable */
import { AgentPortsRef } from './agent-ports-ref';
import { AssetPortsRef } from './asset-ports-ref';
import { CompanyPortsRef } from './company-ports-ref';
export interface PortsCreate {
  agentRef: AgentPortsRef;
  assetRef: AssetPortsRef;
  companyRef: CompanyPortsRef;
  isSecure: boolean;
  name?: string;
  path?: string;
  port: number;
  service: string;
  version?: string;
  vulCount?: number;
}
