/* tslint:disable */
/* eslint-disable */
export interface VulStatsCreate {
  asset_score?: number;
  base_score?: number;
  count_of_critical_installed_softwares?: number;
  count_of_critical_network_vuls?: number;
  count_of_critical_vuls?: number;
  count_of_high_installed_softwares?: number;
  count_of_high_network_vuls?: number;
  count_of_high_vuls?: number;
  count_of_info_network_vuls?: number;
  count_of_installed_softwares?: number;
  count_of_low_installed_softwares?: number;
  count_of_low_network_vuls?: number;
  count_of_low_vuls?: number;
  count_of_medium_installed_softwares?: number;
  count_of_medium_network_vuls?: number;
  count_of_medium_vuls?: number;
  count_of_open_ports?: number;
  risk_score?: number;
  ssl_grade?: string;
}
