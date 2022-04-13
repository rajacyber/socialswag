/* tslint:disable */
/* eslint-disable */
import { PricingType } from './pricing-type';
import { RecurringType } from './recurring-type';
export interface ContentPricingModelCreate {
  currency_code: string;
  price: number;
  pricing_model: PricingType;
  recurring_interval?: number;
  recurring_type?: RecurringType;
}
