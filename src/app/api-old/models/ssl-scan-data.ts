/* tslint:disable */
/* eslint-disable */
import { AgentSslScanDataRef } from './agent-ssl-scan-data-ref';
import { CiphersCreate } from './ciphers-create';
import { CompanySslScanDataRef } from './company-ssl-scan-data-ref';
import { ExternalScanAssetSslScanDataRef } from './external-scan-asset-ssl-scan-data-ref';
import { SslCertificateCreate } from './ssl-certificate-create';
export interface SslScanData {
  '_id'?: string;
  additional_certs?: Array<SslCertificateCreate>;
  agentRef?: AgentSslScanDataRef;
  beast?: boolean;
  'c'?: string;
  cert_bytes?: number;
  certs_provided?: string;
  ciphers?: Array<CiphersCreate>;
  companyRef?: CompanySslScanDataRef;
  drown?: boolean;
  externalscanassetRef?: ExternalScanAssetSslScanDataRef;
  freak?: boolean;
  grade?: string;
  heartbeat?: boolean;
  heartbleed?: boolean;
  logjam?: boolean;
  poodle?: boolean;
  protocols?: Array<string>;
  sslCert?: SslCertificateCreate;
  tid?: string;
  'u'?: string;
  valid_from?: string;
}
