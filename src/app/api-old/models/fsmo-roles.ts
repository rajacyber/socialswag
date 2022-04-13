/* tslint:disable */
/* eslint-disable */
import { AgentFsmoRolesRef } from './agent-fsmo-roles-ref';
import { AssetFsmoRolesRef } from './asset-fsmo-roles-ref';
import { CompanyFsmoRolesRef } from './company-fsmo-roles-ref';
export interface FsmoRoles {
  '_id'?: string;
  agentRef?: AgentFsmoRolesRef;
  assetRef?: AssetFsmoRolesRef;
  'c'?: string;
  companyRef?: CompanyFsmoRolesRef;
  domain?: string;
  role?: string;
  tid?: string;
  'u'?: string;
}
