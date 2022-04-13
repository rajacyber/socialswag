/* tslint:disable */
/* eslint-disable */
import { AgentExternalNetworkVulsRef } from './agent-external-network-vuls-ref';
import { CompanyExternalNetworkVulsRef } from './company-external-network-vuls-ref';
import { ExternalScanAssetExternalNetworkVulsRef } from './external-scan-asset-external-network-vuls-ref';
import { VulnerabilityScoreCreate } from './vulnerability-score-create';
export interface ExternalNetworkVulsCreate {
  agentRef?: AgentExternalNetworkVulsRef;
  category?: string;
  companyRef: CompanyExternalNetworkVulsRef;
  externalscanassetRef: ExternalScanAssetExternalNetworkVulsRef;
  port?: number;
  product: Array<string>;
  ref?: string;
  score?: VulnerabilityScoreCreate;
  severity: string;
  title: string;
  uniqueid: string;
  vul_id: string;
}
