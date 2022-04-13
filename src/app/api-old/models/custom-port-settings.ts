/* tslint:disable */
/* eslint-disable */
import { CompanyCustomPortSettingsRef } from './company-custom-port-settings-ref';
export interface CustomPortSettings {
  '_id'?: string;
  allowedPorts?: Array<string>;
  'c'?: string;
  companyRef?: CompanyCustomPortSettingsRef;
  deniedPorts?: Array<string>;
  insecurePorts?: Array<string>;
  tid?: string;
  'u'?: string;
}
