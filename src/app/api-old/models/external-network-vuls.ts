/* tslint:disable */
/* eslint-disable */
import { AgentExternalNetworkVulsRef } from './agent-external-network-vuls-ref';
import { CompanyExternalNetworkVulsRef } from './company-external-network-vuls-ref';
import { ExternalScanAssetExternalNetworkVulsRef } from './external-scan-asset-external-network-vuls-ref';
import { VulnerabilityScoreCreate } from './vulnerability-score-create';
export interface ExternalNetworkVuls {
  '_id'?: string;
  agentRef?: AgentExternalNetworkVulsRef;
  'c'?: string;
  category?: string;
  companyRef?: CompanyExternalNetworkVulsRef;
  externalscanassetRef?: ExternalScanAssetExternalNetworkVulsRef;
  port?: number;
  product?: Array<string>;
  ref?: string;
  score?: VulnerabilityScoreCreate;
  severity?: string;
  tid?: string;
  title?: string;
  'u'?: string;
  uniqueid?: string;
  vul_id?: string;
}
