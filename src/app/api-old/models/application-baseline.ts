/* tslint:disable */
/* eslint-disable */
import { AgentApplicationBaselineRef } from './agent-application-baseline-ref';
import { AssetApplicationBaselineRef } from './asset-application-baseline-ref';
import { CompanyApplicationBaselineRef } from './company-application-baseline-ref';
export interface ApplicationBaseline {
  '_id'?: string;
  agentRef?: AgentApplicationBaselineRef;
  assetRef?: AssetApplicationBaselineRef;
  'c'?: string;
  companyRef?: CompanyApplicationBaselineRef;
  deniedApplications?: Array<string>;
  mandatoryApplications?: Array<string>;
  name?: string;
  os_type?: string;
  osname?: string;
  tid?: string;
  'u'?: string;
}
