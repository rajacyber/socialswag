/* tslint:disable */
/* eslint-disable */
import { AgentInterfacesRef } from './agent-interfaces-ref';
import { AssetInterfacesRef } from './asset-interfaces-ref';
import { CompanyInterfacesRef } from './company-interfaces-ref';
export interface InterfacesCreate {
  address: string;
  agentRef: AgentInterfacesRef;
  assetRef: AssetInterfacesRef;
  broadcast: string;
  companyRef: CompanyInterfacesRef;
  interface: string;
  mac: string;
  mask: string;
  name: string;
}
