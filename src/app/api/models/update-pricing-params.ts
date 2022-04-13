/* tslint:disable */
/* eslint-disable */
import { Language } from './language';
import { PricingModelCreate } from './pricing-model-create';
export interface UpdatePricingParams {
  content_id: string;
  language: Language;
  price: number;
  price_currency?: Array<PricingModelCreate>;
}
