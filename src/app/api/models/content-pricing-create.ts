/* tslint:disable */
/* eslint-disable */
import { ContentDataContentPricingRef } from './content-data-content-pricing-ref';
import { PricingModelCreate } from './pricing-model-create';
export interface ContentPricingCreate {
  contentdata_ref: ContentDataContentPricingRef;
  price_model: Array<PricingModelCreate>;
}
