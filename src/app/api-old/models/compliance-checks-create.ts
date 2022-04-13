/* tslint:disable */
/* eslint-disable */
import { AgentComplianceChecksRef } from './agent-compliance-checks-ref';
import { AssetComplianceChecksRef } from './asset-compliance-checks-ref';
import { CompanyComplianceChecksRef } from './company-compliance-checks-ref';
export interface ComplianceChecksCreate {
  agentRef: AgentComplianceChecksRef;
  assetRef: AssetComplianceChecksRef;
  companyRef: CompanyComplianceChecksRef;
  filename: string;
  isApplicable: boolean;
}
