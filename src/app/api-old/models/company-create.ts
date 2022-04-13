/* tslint:disable */
/* eslint-disable */
import { CompanySource } from './company-source';
export interface CompanyCreate {
  description: string;
  isMigrated?: boolean;
  name: string;
  source: CompanySource;
  source_id?: string;
  tags?: Array<string>;
}
