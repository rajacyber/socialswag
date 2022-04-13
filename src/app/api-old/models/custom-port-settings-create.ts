/* tslint:disable */
/* eslint-disable */
import { CompanyCustomPortSettingsRef } from './company-custom-port-settings-ref';
export interface CustomPortSettingsCreate {
  allowedPorts?: Array<string>;
  companyRef?: CompanyCustomPortSettingsRef;
  deniedPorts?: Array<string>;
  insecurePorts?: Array<string>;
}
