/* tslint:disable */
/* eslint-disable */
import { AgentComplianceChecksRef } from './agent-compliance-checks-ref';
import { AssetComplianceChecksRef } from './asset-compliance-checks-ref';
import { CompanyComplianceChecksRef } from './company-compliance-checks-ref';
export interface ComplianceChecks {
  '_id'?: string;
  agentRef?: AgentComplianceChecksRef;
  assetRef?: AssetComplianceChecksRef;
  'c'?: string;
  companyRef?: CompanyComplianceChecksRef;
  filename?: string;
  isApplicable?: boolean;
  tid?: string;
  'u'?: string;
}
