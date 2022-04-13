/* tslint:disable */
/* eslint-disable */
export interface SslCertificateCreate {
  alg?: string;
  cert_bytes?: number;
  cert_expired?: boolean;
  cert_type?: string;
  days_left?: number;
  ext_key_usage?: Array<string>;
  fingerprint?: string;
  issued_o?: string;
  issued_to?: string;
  issuer_c?: string;
  issuer_cn?: string;
  issuer_ou?: string;
  public_exponent?: number;
  sha1?: string;
  sn?: string;
  subjectAltNames?: Array<string>;
  valid_from?: string;
  valid_till?: string;
  validity_days?: number;
  ver?: number;
  verify_cert?: boolean;
  verify_host?: boolean;
}
