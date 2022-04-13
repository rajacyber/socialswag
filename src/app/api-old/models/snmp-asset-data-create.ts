/* tslint:disable */
/* eslint-disable */
import { SnmpOidDataCreate } from './snmp-oid-data-create';
export interface SnmpAssetDataCreate {
  agentid: string;
  assetid: string;
  credid: string;
  ip: string;
  snmpBaseDetails: Array<SnmpOidDataCreate>;
  snmpExtendedDetails?: Array<SnmpOidDataCreate>;
}
