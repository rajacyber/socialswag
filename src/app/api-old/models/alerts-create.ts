/* tslint:disable */
/* eslint-disable */
import { AssetRefCreate } from './asset-ref-create';
import { RuleReferenceCreate } from './rule-reference-create';
import { AlertModelCompanyRefCreate } from './alert-model-company-ref-create';
export interface AlertsCreate {
  assetRef?: AssetRefCreate;
  attributes?: Array<string>;
  companyRef?: AlertModelCompanyRefCreate;
  description: string;
  name: string;
  ruleReference?: RuleReferenceCreate;
  status: string;
}
