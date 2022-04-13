/* tslint:disable */
/* eslint-disable */
import { Address } from './address';
import { Status } from './status';
export interface UserCreate {
  addr: Address;
  age?: Array<number>;
  email: Array<string>;
  name: string;
  status: Status;
}
