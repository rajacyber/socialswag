/* tslint:disable */
/* eslint-disable */
import { AgentJobsRef } from './agent-jobs-ref';
import { AssetJobsRef } from './asset-jobs-ref';
import { CompanyJobsRef } from './company-jobs-ref';
import { JobDataCreate } from './job-data-create';
export interface Jobs {
  '_id'?: string;
  agentRef?: AgentJobsRef;
  assetRef?: AssetJobsRef;
  'c'?: string;
  companyRef?: CompanyJobsRef;
  job_data?: JobDataCreate;
  tid?: string;
  'u'?: string;
}
