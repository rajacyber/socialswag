/* tslint:disable */
/* eslint-disable */
import { AgentRemediationSuppressionRef } from './agent-remediation-suppression-ref';
import { AssetRemediationSuppressionRef } from './asset-remediation-suppression-ref';
import { CompanyRemediationSuppressionRef } from './company-remediation-suppression-ref';
export interface RemediationSuppressionCreate {
  agentRef?: AgentRemediationSuppressionRef;
  assetRef?: AssetRemediationSuppressionRef;
  comments?: string;
  companyRef?: CompanyRemediationSuppressionRef;
  product: string;
  remediation_id?: string;
  remediation_type: string;
  remediationdays: number;
  version?: string;
}
