/* tslint:disable */
/* eslint-disable */
import { AgentAssetRef } from './agent-asset-ref';
import { CompanyAssetRef } from './company-asset-ref';
import { HostCreate } from './host-create';
import { OsCreate } from './os-create';
import { SecurityReportCardCreate } from './security-report-card-create';
import { SnmpInfoCreate } from './snmp-info-create';
import { VulStatsCreate } from './vul-stats-create';
export interface AssetCreate {
  agentRef: AgentAssetRef;
  companyRef: CompanyAssetRef;
  credid?: string;
  discoveredProtocols?: Array<string>;
  host: HostCreate;
  ip?: string;
  isExcluded?: boolean;
  lastdiscoveredtime?: string;
  lastvul_scannedtime?: string;
  name?: string;
  os?: OsCreate;
  security_reportcard?: SecurityReportCardCreate;
  snmp?: SnmpInfoCreate;
  snmp_credid?: string;
  tags?: Array<string>;
  visibleName?: string;
  vul_stats?: VulStatsCreate;
}
