/* tslint:disable */
/* eslint-disable */
import { AgentAssetRef } from './agent-asset-ref';
import { CompanyAssetRef } from './company-asset-ref';
import { HostCreate } from './host-create';
import { OsCreate } from './os-create';
import { SecurityReportCardCreate } from './security-report-card-create';
import { SnmpInfoCreate } from './snmp-info-create';
import { VulStatsCreate } from './vul-stats-create';
import {ComplianceReportCardCreate} from "./compliance-report-card-create";
export interface Asset {
  '_id'?: string;
  agentRef?: AgentAssetRef;
  'c'?: string;
  companyRef?: CompanyAssetRef;
  credid?: string;
  deprecatedtime? : string;
  discoveredProtocols?: Array<string>;
  host?: HostCreate;
  ip?: string;
  isExcluded?: boolean;
  lastdiscoveredtime?: string;
  lastvul_scannedtime?: string;
  name?: string;
  os?: OsCreate;
  security_reportcard?: SecurityReportCardCreate;
  compliance_reportcard?: ComplianceReportCardCreate;
  snmp?: SnmpInfoCreate;
  snmp_credid?: string;
  tags?: Array<string>;
  tid?: string;
  'u'?: string;
  visibleName?: string;
  riskScore?: string;
  ticket_details?: any;
  vul_stats?: VulStatsCreate;
}
