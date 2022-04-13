/* tslint:disable */
/* eslint-disable */
import { AgentSmbSharePathsRef } from './agent-smb-share-paths-ref';
import { AssetSmbSharePathsRef } from './asset-smb-share-paths-ref';
import { CompanySmbSharePathsRef } from './company-smb-share-paths-ref';
export interface SmbSharePaths {
  '_id'?: string;
  agentRef?: AgentSmbSharePathsRef;
  assetRef?: AssetSmbSharePathsRef;
  'c'?: string;
  companyRef?: CompanySmbSharePathsRef;
  path?: string;
  permission?: string;
  tid?: string;
  'u'?: string;
}
