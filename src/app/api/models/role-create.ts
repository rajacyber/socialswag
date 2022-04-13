/* tslint:disable */
/* eslint-disable */
export interface RoleCreate {
  name: string;
  resourceAccess: {
[key: string]: Array<{
[key: string]: string;
}>;
};
}
