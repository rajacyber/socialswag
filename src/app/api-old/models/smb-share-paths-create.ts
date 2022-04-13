/* tslint:disable */
/* eslint-disable */
import { AgentSmbSharePathsRef } from './agent-smb-share-paths-ref';
import { AssetSmbSharePathsRef } from './asset-smb-share-paths-ref';
import { CompanySmbSharePathsRef } from './company-smb-share-paths-ref';
export interface SmbSharePathsCreate {
  agentRef: AgentSmbSharePathsRef;
  assetRef: AssetSmbSharePathsRef;
  companyRef: CompanySmbSharePathsRef;
  path: string;
  permission: string;
}
