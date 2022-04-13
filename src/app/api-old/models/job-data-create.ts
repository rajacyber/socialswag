/* tslint:disable */
/* eslint-disable */
import { JobMessageCreate } from './job-message-create';
import { JobStatus } from './job-status';
export interface JobDataCreate {
  assetdescription?: string;
  initiated_by?: string;
  job_message?: JobMessageCreate;
  job_status: JobStatus;
  message?: string;
  status_message: string;
  task?: string;
}
