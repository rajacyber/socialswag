/* tslint:disable */
/* eslint-disable */
import { AgentAssetFirewallPolicyRef } from './agent-asset-firewall-policy-ref';
import { AssetAssetFirewallPolicyRef } from './asset-asset-firewall-policy-ref';
import { CompanyAssetFirewallPolicyRef } from './company-asset-firewall-policy-ref';
export interface AssetFirewallPolicy {
  '_id'?: string;
  agentRef?: AgentAssetFirewallPolicyRef;
  assetRef?: AssetAssetFirewallPolicyRef;
  'c'?: string;
  companyRef?: CompanyAssetFirewallPolicyRef;
  last_updated?: number;
  policystatus?: number;
  policytype?: string;
  tid?: string;
  'u'?: string;
}
