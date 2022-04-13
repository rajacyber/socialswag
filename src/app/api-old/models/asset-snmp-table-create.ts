/* tslint:disable */
/* eslint-disable */
import { AgentAssetSnmpTableRef } from './agent-asset-snmp-table-ref';
import { AssetAssetSnmpTableRef } from './asset-asset-snmp-table-ref';
import { CompanyAssetSnmpTableRef } from './company-asset-snmp-table-ref';
import { SnmpOidDataCreate } from './snmp-oid-data-create';
export interface AssetSnmpTableCreate {
  agentRef: AgentAssetSnmpTableRef;
  assetRef: AssetAssetSnmpTableRef;
  companyRef: CompanyAssetSnmpTableRef;
  table_data: Array<SnmpOidDataCreate>;
}
