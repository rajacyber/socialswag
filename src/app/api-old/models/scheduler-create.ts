/* tslint:disable */
/* eslint-disable */
import { AgentSchedulerRef } from './agent-scheduler-ref';
import { CompanySchedulerRef } from './company-scheduler-ref';
import { SchedulerSettingCreate } from './scheduler-setting-create';
export interface SchedulerCreate {
  agentRef?: Array<AgentSchedulerRef>;
  agents?: Array<string>;
  company?: Array<string>;
  companyRef?: Array<CompanySchedulerRef>;
  email?: Array<string>;
  isActive?: boolean;
  isGlobal?: boolean;
  name: string;
  scheduler?: string;
  settings: SchedulerSettingCreate;
  subvalue?: Array<string>;
  thirdvalue?: Array<string>;
  uniqueid: string;
}
