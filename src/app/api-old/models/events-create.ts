/* tslint:disable */
/* eslint-disable */
import { AlertsEventsRef } from './alerts-events-ref';
import { AssetRefCreate } from './asset-ref-create';
import { EventHistoryCreate } from './event-history-create';
import { IntegrationMapCreate } from './integration-map-create';
import { RuleReferenceCreate } from './rule-reference-create';
import { AlertModelCompanyRefCreate } from './alert-model-company-ref-create';
export interface EventsCreate {
  alertsRef: AlertsEventsRef;
  assetRef?: AssetRefCreate;
  companyRef?: AlertModelCompanyRefCreate;
  description: string;
  eventHistory?: Array<EventHistoryCreate>;
  integrationMap?: Array<IntegrationMapCreate>;
  name: string;
  notificationBody: string;
  ruleReference?: RuleReferenceCreate;
  status: string;
}
