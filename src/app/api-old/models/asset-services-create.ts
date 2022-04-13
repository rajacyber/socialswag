/* tslint:disable */
/* eslint-disable */
import { AgentAssetServicesRef } from './agent-asset-services-ref';
import { AssetAssetServicesRef } from './asset-asset-services-ref';
import { CompanyAssetServicesRef } from './company-asset-services-ref';
export interface AssetServicesCreate {
  agentRef: AgentAssetServicesRef;
  assetRef: AssetAssetServicesRef;
  companyRef: CompanyAssetServicesRef;
  display_name: string;
  name: string;
  path?: string;
  status: string;
}
