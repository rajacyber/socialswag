/* tslint:disable */
/* eslint-disable */
import { Role } from './role';
export interface UserSpec {
  attributes?: {  };
  email: string;
  emailVerified?: boolean;
  enabled?: boolean;
  firstName: string;
  groups?: Array<any>;
  id?: string;
  lastName: string;
  role: Role;
  username?: string;
}
