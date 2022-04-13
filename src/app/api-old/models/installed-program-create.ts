/* tslint:disable */
/* eslint-disable */
import { AgentInstalledProgramRef } from './agent-installed-program-ref';
import { AssetInstalledProgramRef } from './asset-installed-program-ref';
import { CompanyInstalledProgramRef } from './company-installed-program-ref';
export interface InstalledProgramCreate {
  agentRef: AgentInstalledProgramRef;
  arch?: string;
  assetRef: AssetInstalledProgramRef;
  companyRef: CompanyInstalledProgramRef;
  cpe_product?: string;
  cpe_vendor?: string;
  critical_vuls_count?: number;
  full_name: string;
  high_vuls_count?: number;
  identifying_number?: string;
  install_date?: string;
  install_source?: string;
  low_vuls_count?: number;
  medium_vuls_count?: number;
  name: string;
  path?: string;
  publisher?: string;
  uninstall_string?: string;
  version: string;
  vulcount?: number;
}
