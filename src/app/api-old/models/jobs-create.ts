/* tslint:disable */
/* eslint-disable */
import { AgentJobsRef } from './agent-jobs-ref';
import { AssetJobsRef } from './asset-jobs-ref';
import { CompanyJobsRef } from './company-jobs-ref';
import { JobDataCreate } from './job-data-create';
export interface JobsCreate {
  agentRef?: AgentJobsRef;
  assetRef?: AssetJobsRef;
  companyRef: CompanyJobsRef;
  job_data: JobDataCreate;
}
