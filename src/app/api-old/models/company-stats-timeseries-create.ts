/* tslint:disable */
/* eslint-disable */
import { CompanyCompanyStatsTimeseriesRef } from './company-company-stats-timeseries-ref';
export interface CompanyStatsTimeseriesCreate {
  asset_count: number;
  companyRef: CompanyCompanyStatsTimeseriesRef;
  company_score: number;
  critical_unique_vuls_count: number;
  high_unique_vuls_count: number;
}
