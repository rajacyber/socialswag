/* tslint:disable */
/* eslint-disable */
import { EnumCiphersCreate } from './enum-ciphers-create';
import { HostNamesCreate } from './host-names-create';
import { NoAuthVulsCreate } from './no-auth-vuls-create';
import { PortsInternalCreate } from './ports-internal-create';
import { SmbSharesCreate } from './smb-shares-create';
import { SslCertificateCreate } from './ssl-certificate-create';
export interface AssetDataCreate {
  additional_certs?: Array<SslCertificateCreate>;
  assetName?: string;
  compliance_resp?: string;
  compliance_status?: boolean;
  cpeMatches?: Array<string>;
  enumCiphers?: Array<EnumCiphersCreate>;
  hostname?: Array<HostNamesCreate>;
  insecure_ports?: Array<number>;
  insecure_ports_status?: boolean;
  ip?: string;
  jid?: string;
  lastboot?: string;
  mac?: string;
  nmapresptype?: string;
  noAuthVuls?: Array<NoAuthVulsCreate>;
  os?: string;
  osMatches?: Array<string>;
  ostype?: string;
  osversion?: string;
  pingStatus?: boolean;
  ports?: Array<PortsInternalCreate>;
  smbshares?: Array<SmbSharesCreate>;
  sslCert?: SslCertificateCreate;
  sslGrade?: string;
  status: boolean;
  subnet?: string;
  topPortsScan?: boolean;
  uptime?: number;
  valid_cert?: boolean;
  vendor?: string;
  verify_cert?: boolean;
  verify_host?: boolean;
  vulnerability_resp?: string;
  vulnerability_status?: boolean;
}
