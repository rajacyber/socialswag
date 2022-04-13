/* tslint:disable */
/* eslint-disable */
import { CiphersCreate } from './ciphers-create';
import { SslCertificateCreate } from './ssl-certificate-create';
export interface SslScanDataCreate {
  additional_certs?: Array<SslCertificateCreate>;
  beast?: boolean;
  cert_bytes?: number;
  certs_provided?: string;
  ciphers?: Array<CiphersCreate>;
  drown?: boolean;
  freak?: boolean;
  grade?: string;
  heartbeat?: boolean;
  heartbleed?: boolean;
  logjam?: boolean;
  poodle?: boolean;
  protocols?: Array<string>;
  sslCert?: SslCertificateCreate;
  valid_from?: string;
}
