/* tslint:disable */
/* eslint-disable */
import { CompanyStats } from './company-stats';
export interface CompanyStatsGetResp {
  count?: number;
  data: Array<CompanyStats>;
  total?: number;
}
