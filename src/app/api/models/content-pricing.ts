/* tslint:disable */
/* eslint-disable */
import { ContentDataContentPricingRef } from './content-data-content-pricing-ref';
import { PricingModelCreate } from './pricing-model-create';
export interface ContentPricing {
  '_id'?: string;
  'c'?: string;
  contentdata_ref?: ContentDataContentPricingRef;
  price_model?: Array<PricingModelCreate>;
  'u'?: string;
}
