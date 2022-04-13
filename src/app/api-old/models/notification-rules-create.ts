/* tslint:disable */
/* eslint-disable */
import { AlertRulesCreate } from './alert-rules-create';
import { CompanyNotificationRulesRef } from './company-notification-rules-ref';
import { IntegrationRulesCreate } from './integration-rules-create';
export interface NotificationRulesCreate {
  alertRules: Array<AlertRulesCreate>;
  companyRef?: CompanyNotificationRulesRef;
  integrationRule: Array<IntegrationRulesCreate>;
  name?: string;
}
