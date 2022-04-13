/* tslint:disable */
/* eslint-disable */
import { CompanySource } from './company-source';
export interface Company {
  customerInfo?: any;
  '_id'?: string;
  'c'?: string;
  description?: string;
  isMigrated?: boolean;
  name?: string;
  source?: CompanySource;
  source_id?: string;
  tags?: Array<string>;
  tid?: string;
  'u'?: string;
}
