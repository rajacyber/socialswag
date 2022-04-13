/* tslint:disable */
/* eslint-disable */
import { CustomReportBuilderCustomGeneratedReportsRef } from './custom-report-builder-custom-generated-reports-ref';
import { CustomreportModelCompanyRefCreate } from './customreport-model-company-ref-create';
export interface CustomGeneratedReportsCreate {
  companyRef: CustomreportModelCompanyRefCreate;
  customreportbuilderRef: CustomReportBuilderCustomGeneratedReportsRef;
  description?: string;
  reason?: string;
  reportDocPath?: string;
  reportPath?: string;
  reportStatus: string;
  reportTitle: string;
  siteid?: Array<string>;
}
