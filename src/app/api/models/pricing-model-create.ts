/* tslint:disable */
/* eslint-disable */
import { ContentPricingModelCreate } from './content-pricing-model-create';
import { Language } from './language';
export interface PricingModelCreate {
  language?: Language;
  price?: number;
  price_currency?: Array<ContentPricingModelCreate>;
}
