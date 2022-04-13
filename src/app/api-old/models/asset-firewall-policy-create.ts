/* tslint:disable */
/* eslint-disable */
import { AgentAssetFirewallPolicyRef } from './agent-asset-firewall-policy-ref';
import { AssetAssetFirewallPolicyRef } from './asset-asset-firewall-policy-ref';
import { CompanyAssetFirewallPolicyRef } from './company-asset-firewall-policy-ref';
export interface AssetFirewallPolicyCreate {
  agentRef: AgentAssetFirewallPolicyRef;
  assetRef: AssetAssetFirewallPolicyRef;
  companyRef: CompanyAssetFirewallPolicyRef;
  last_updated: number;
  policystatus: number;
  policytype: string;
}
