/* tslint:disable */
/* eslint-disable */
import { CompanyIntegrationMappingRef } from './company-integration-mapping-ref';
import { IntegrationMapperCreate } from './integration-mapper-create';
export interface IntegrationMappingCreate {
  companyRef?: CompanyIntegrationMappingRef;
  credentialId: string;
  integrationMap: Array<IntegrationMapperCreate>;
  integrationName: string;
}
