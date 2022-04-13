/* tslint:disable */
/* eslint-disable */
import { AgentComplianceRef } from './agent-compliance-ref';
import { AssetComplianceRef } from './asset-compliance-ref';
import { CompanyComplianceRef } from './company-compliance-ref';
import { ComplianceBenchmarksCreate } from './compliance-benchmarks-create';
export interface ComplianceCreate {
  agentRef: AgentComplianceRef;
  assetRef: AssetComplianceRef;
  benchmarks: ComplianceBenchmarksCreate;
  companyRef: CompanyComplianceRef;
  complaince_id: string;
  iscompliant: boolean;
}
