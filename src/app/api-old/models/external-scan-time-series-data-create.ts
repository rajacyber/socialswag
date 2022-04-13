/* tslint:disable */
/* eslint-disable */
import { AgentExternalScanTimeSeriesDataRef } from './agent-external-scan-time-series-data-ref';
import { CiphersCreate } from './ciphers-create';
import { CompanyExternalScanTimeSeriesDataRef } from './company-external-scan-time-series-data-ref';
import { ExternalScanAssetExternalScanTimeSeriesDataRef } from './external-scan-asset-external-scan-time-series-data-ref';
import { ExternalVulStatsCreate } from './external-vul-stats-create';
import { PortsInternalCreate } from './ports-internal-create';
import { SslCertificateCreate } from './ssl-certificate-create';
export interface ExternalScanTimeSeriesDataCreate {
  additional_certs?: Array<SslCertificateCreate>;
  agentRef?: AgentExternalScanTimeSeriesDataRef;
  beast?: boolean;
  certs_provided?: string;
  ciphers?: Array<CiphersCreate>;
  companyRef: CompanyExternalScanTimeSeriesDataRef;
  drown?: boolean;
  externalscanassetRef: ExternalScanAssetExternalScanTimeSeriesDataRef;
  freak?: boolean;
  grade?: string;
  heartbeat?: boolean;
  heartbleed?: boolean;
  logjam?: boolean;
  poodle?: boolean;
  ports?: PortsInternalCreate;
  protocols?: Array<string>;
  sslCert?: SslCertificateCreate;
  uniqueid: string;
  vul_stats?: ExternalVulStatsCreate;
}
