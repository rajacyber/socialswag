/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { ApiService } from './services/api.service';
import { CustomGeneratedReportsService } from './services/custom-generated-reports.service';
import { CustomReportBuilderService } from './services/custom-report-builder.service';
import { AdAuditService } from './services/ad-audit.service';
import { AdComputersService } from './services/ad-computers.service';
import { AdGpoService } from './services/ad-gpo.service';
import { AdGroupsService } from './services/ad-groups.service';
import { AdOuService } from './services/ad-ou.service';
import { AdUsersService } from './services/ad-users.service';
import { AgentService } from './services/agent.service';
import { AlertsService } from './services/alerts.service';
import { ApplicationBaselineService } from './services/application-baseline.service';
import { AssetService } from './services/asset.service';
import { AssetSharesService } from './services/asset-shares.service';
import { AssetBestPracticesService } from './services/asset-best-practices.service';
import { AssetCredentialsService } from './services/asset-credentials.service';
import { AssetFirewallPolicyService } from './services/asset-firewall-policy.service';
import { AssetRunningProcessService } from './services/asset-running-process.service';
import { AssetServicesService } from './services/asset-services.service';
import { AssetSnmpTableService } from './services/asset-snmp-table.service';
import { AssetSystemInfoService } from './services/asset-system-info.service';
import { AssetTimeStatsService } from './services/asset-time-stats.service';
import { AssetUsersService } from './services/asset-users.service';
import { CompanyService } from './services/company.service';
import { CompanyStatsService } from './services/company-stats.service';
import { CompanyStatsTimeseriesService } from './services/company-stats-timeseries.service';
import { ComplianceService } from './services/compliance.service';
import { ComplianceChecksService } from './services/compliance-checks.service';
import { ConnectwiseService } from './services/connectwise.service';
import { CustomPortSettingsService } from './services/custom-port-settings.service';
import { CyberUtilsService } from './services/cyber-utils.service';
import { DiagnosticsService } from './services/diagnostics.service';
import { DiscoverySettingsService } from './services/discovery-settings.service';
import { EventsService } from './services/events.service';
import { FsmoRolesService } from './services/fsmo-roles.service';
import { InstalledProgramService } from './services/installed-program.service';
import { InterfacesService } from './services/interfaces.service';
import { JobsService } from './services/jobs.service';
import { NotificationRulesService } from './services/notification-rules.service';
import { Office365BackendService } from './services/office-365-backend.service';
import { PasswordPolicyService } from './services/password-policy.service';
import { PortsService } from './services/ports.service';
import { RegistryMisConfigurationService } from './services/registry-mis-configuration.service';
import { RemediationService } from './services/remediation.service';
import { RemediationSuppressionService } from './services/remediation-suppression.service';
import { SchedulerService } from './services/scheduler.service';
import { SmbSharePathsService } from './services/smb-share-paths.service';
import { SnmpV2CredentialsService } from './services/snmp-v-2-credentials.service';
import { SnmpV3CredentialsService } from './services/snmp-v-3-credentials.service';
import { SslScanTimeseriesService } from './services/ssl-scan-timeseries.service';
import { StorageService } from './services/storage.service';
import { TableSettingsService } from './services/table-settings.service';
import { IdentityProvidersService } from './services/identity-providers.service';
import { UsersService } from './services/users.service';
import { VulnerabilityService } from './services/vulnerability.service';
import { VulnerabilityTimeseriesService } from './services/vulnerability-timeseries.service';
import { RolesService } from './services/roles.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    ApiService,
    CustomGeneratedReportsService,
    CustomReportBuilderService,
    AdAuditService,
    AdComputersService,
    AdGpoService,
    AdGroupsService,
    AdOuService,
    AdUsersService,
    AgentService,
    AlertsService,
    AssetSharesService,
    ApplicationBaselineService,
    AssetService,
    AssetBestPracticesService,
    AssetCredentialsService,
    AssetFirewallPolicyService,
    AssetRunningProcessService,
    AssetServicesService,
    AssetSnmpTableService,
    AssetSystemInfoService,
    AssetTimeStatsService,
    AssetUsersService,
    CompanyService,
    CompanyStatsService,
    CompanyStatsTimeseriesService,
    ComplianceService,
    ComplianceChecksService,
    ConnectwiseService,
    CustomPortSettingsService,
    CyberUtilsService,
    DiagnosticsService,
    DiscoverySettingsService,
    EventsService,
    FsmoRolesService,
    InstalledProgramService,
    InterfacesService,
    JobsService,
    NotificationRulesService,
    Office365BackendService,
    PasswordPolicyService,
    PortsService,
    RegistryMisConfigurationService,
    RemediationService,
    RemediationSuppressionService,
    SchedulerService,
    SmbSharePathsService,
    SnmpV2CredentialsService,
    SnmpV3CredentialsService,
    SslScanTimeseriesService,
    StorageService,
    TableSettingsService,
    IdentityProvidersService,
    UsersService,
    VulnerabilityService,
    VulnerabilityTimeseriesService,
    RolesService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor(
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
