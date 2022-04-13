/* tslint:disable */
/* eslint-disable */
import { AgentRemediationRef } from './agent-remediation-ref';
import { ApplicationBaselineRemediationRef } from './application-baseline-remediation-ref';
import { AssetRemediationRef } from './asset-remediation-ref';
import { CompanyRemediationRef } from './company-remediation-ref';
import { RemediationEvidenceCreate } from './remediation-evidence-create';
export interface RemediationCreate {
  agentRef: AgentRemediationRef;
  assetRef: AssetRemediationRef;
  chocoName?: string;
  companyRef: CompanyRemediationRef;
  critical_vuls_count?: number;
  evidence?: RemediationEvidenceCreate;
  fix: string;
  high_vuls_count?: number;
  is_denied_application?: boolean;
  is_mandatory_application?: boolean;
  low_vuls_count?: number;
  medium_vuls_count?: number;
  product: string;
  remediation_closer_reason?: string;
  remediation_status: boolean;
  remediation_type?: string;
  ruleRef: ApplicationBaselineRemediationRef;
  ticketId?: string;
  url: string;
  vulcount?: number;
}
