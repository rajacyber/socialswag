/* tslint:disable */
/* eslint-disable */
import { EventRulesCreate } from './event-rules-create';
export interface AlertRulesCreate {
  rules: Array<EventRulesCreate>;
  sectionId: string;
}
