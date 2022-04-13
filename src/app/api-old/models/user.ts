/* tslint:disable */
/* eslint-disable */
import { Address } from './address';
import { Status } from './status';
export interface User {
  '_id'?: string;
  addr?: Address;
  age?: Array<number>;
  'c'?: string;
  email?: Array<string>;
  name?: string;
  status?: Status;
  tid?: string;
  'u'?: string;
}
