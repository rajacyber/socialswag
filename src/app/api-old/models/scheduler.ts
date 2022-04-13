/* tslint:disable */
/* eslint-disable */
import { AgentSchedulerRef } from './agent-scheduler-ref';
import { CompanySchedulerRef } from './company-scheduler-ref';
import { SchedulerSettingCreate } from './scheduler-setting-create';
export interface Scheduler {
  '_id'?: string;
  agentRef?: Array<AgentSchedulerRef>;
  agents?: Array<string>;
  'c'?: string;
  company?: Array<string>;
  companyRef?: Array<CompanySchedulerRef>;
  email?: Array<string>;
  isActive?: boolean;
  isGlobal?: boolean;
  name?: string;
  scheduler?: string;
  settings?: SchedulerSettingCreate;
  subvalue?: Array<string>;
  thirdvalue?: Array<string>;
  tid?: string;
  'u'?: string;
  uniqueid?: string;
}
