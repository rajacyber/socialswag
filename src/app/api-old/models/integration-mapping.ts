/* tslint:disable */
/* eslint-disable */
import { CompanyIntegrationMappingRef } from './company-integration-mapping-ref';
import { IntegrationMapperCreate } from './integration-mapper-create';
export interface IntegrationMapping {
  '_id'?: string;
  'c'?: string;
  companyRef?: CompanyIntegrationMappingRef;
  credentialId?: string;
  integrationMap?: Array<IntegrationMapperCreate>;
  integrationName?: string;
  tid?: string;
  'u'?: string;
}
