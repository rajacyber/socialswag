/* tslint:disable */
/* eslint-disable */
import { AgentRemediationSuppressionRef } from './agent-remediation-suppression-ref';
import { AssetRemediationSuppressionRef } from './asset-remediation-suppression-ref';
import { CompanyRemediationSuppressionRef } from './company-remediation-suppression-ref';
export interface RemediationSuppression {
  '_id'?: string;
  agentRef?: AgentRemediationSuppressionRef;
  assetRef?: AssetRemediationSuppressionRef;
  'c'?: string;
  comments?: string;
  companyRef?: CompanyRemediationSuppressionRef;
  product?: string;
  remediation_id?: string;
  remediation_type?: string;
  remediationdays?: number;
  tid?: string;
  'u'?: string;
  version?: string;
}
