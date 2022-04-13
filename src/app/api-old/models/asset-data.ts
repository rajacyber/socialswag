/* tslint:disable */
/* eslint-disable */
import { HostNames } from './host-names';
import { NoAuthVuls } from './no-auth-vuls';
import { PortsInternal } from './ports-internal';
import { SmbShares } from './smb-shares';
export interface AssetData {
  '_id'?: string;
  assetName?: string;
  'c'?: string;
  compliance_resp?: string;
  compliance_status?: boolean;
  cpeMatches?: Array<string>;
  hostname?: Array<HostNames>;
  insecure_ports?: Array<number>;
  insecure_ports_status?: boolean;
  ip?: string;
  jid?: string;
  lastboot?: string;
  mac?: string;
  nmapresptype?: string;
  noAuthVuls?: Array<NoAuthVuls>;
  os?: string;
  osMatches?: Array<string>;
  ostype?: string;
  ports?: Array<PortsInternal>;
  smbshares?: Array<SmbShares>;
  status?: boolean;
  subnet?: string;
  tid?: string;
  'u'?: string;
  uptime?: number;
  vendor?: string;
  vulnerability_resp?: string;
  vulnerability_status?: boolean;
}
