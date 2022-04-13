/* tslint:disable */
/* eslint-disable */
import { AgentSslScanTimeseriesRef } from './agent-ssl-scan-timeseries-ref';
import { AssetSslScanTimeseriesRef } from './asset-ssl-scan-timeseries-ref';
import { CiphersCreate } from './ciphers-create';
import { CompanySslScanTimeseriesRef } from './company-ssl-scan-timeseries-ref';
import { PortsInternalCreate } from './ports-internal-create';
import { ProtocolsCreate } from './protocols-create';
import { SslCertificateCreate } from './ssl-certificate-create';
import { VulStatsCreate } from './vul-stats-create';
export interface SslScanTimeseries {
  '_id'?: string;
  additional_certs?: Array<SslCertificateCreate>;
  agentRef?: AgentSslScanTimeseriesRef;
  assetRef?: AssetSslScanTimeseriesRef;
  beast?: boolean;
  'c'?: string;
  certs_provided?: string;
  ciphers?: Array<CiphersCreate>;
  companyRef?: CompanySslScanTimeseriesRef;
  drown?: boolean;
  freak?: boolean;
  grade?: string;
  heartbeat?: boolean;
  heartbleed?: boolean;
  logjam?: boolean;
  poodle?: boolean;
  ports?: Array<PortsInternalCreate>;
  protocols?: Array<ProtocolsCreate>;
  sslCert?: SslCertificateCreate;
  tid?: string;
  'u'?: string;
  uniqueid?: string;
  vul_stats?: VulStatsCreate;
}
