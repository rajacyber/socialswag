/* tslint:disable */
/* eslint-disable */
import { AlertRulesCreate } from './alert-rules-create';
import { CompanyNotificationRulesRef } from './company-notification-rules-ref';
import { IntegrationRulesCreate } from './integration-rules-create';
export interface NotificationRules {
  '_id'?: string;
  alertRules?: Array<AlertRulesCreate>;
  'c'?: string;
  companyRef?: CompanyNotificationRulesRef;
  integrationRule?: Array<IntegrationRulesCreate>;
  name?: string;
  tid?: string;
  'u'?: string;
}
