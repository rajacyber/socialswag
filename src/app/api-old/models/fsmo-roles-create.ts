/* tslint:disable */
/* eslint-disable */
import { AgentFsmoRolesRef } from './agent-fsmo-roles-ref';
import { AssetFsmoRolesRef } from './asset-fsmo-roles-ref';
import { CompanyFsmoRolesRef } from './company-fsmo-roles-ref';
export interface FsmoRolesCreate {
  agentRef: AgentFsmoRolesRef;
  assetRef: AssetFsmoRolesRef;
  companyRef: CompanyFsmoRolesRef;
  domain?: string;
  role?: string;
}
