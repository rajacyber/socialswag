/* tslint:disable */
/* eslint-disable */
import { AmountType } from './amount-type';
import { CategoryCouponsRef } from './category-coupons-ref';
export interface Coupons {
  '_id'?: string;
  amountType?: AmountType;
  'c'?: string;
  category_ref?: Array<CategoryCouponsRef>;
  code?: string;
  description?: string;
  enabled?: boolean;
  endsOn?: string;
  maxDisc?: number;
  minCartValue?: number;
  perCustCount?: number;
  region?: Array<string>;
  startsOn?: string;
  state?: Array<string>;
  totalCount?: number;
  'u'?: string;
  value?: number;
}
