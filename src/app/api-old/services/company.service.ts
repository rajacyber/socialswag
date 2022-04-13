/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Company } from '../models/company';
import { CompanyCreate } from '../models/company-create';
import { CompanyGetResp } from '../models/company-get-resp';
import { CompanyactivedirectoryScanCompletedParams } from '../models/companyactivedirectory-scan-completed-params';
import { CompanycompanyDashboardsParams } from '../models/companycompany-dashboards-params';
import { CompanycreateMspParams } from '../models/companycreate-msp-params';
import { CompanydiscoveryCompletedParams } from '../models/companydiscovery-completed-params';
import { CompanyfirewallScanParams } from '../models/companyfirewall-scan-params';
import { CompanygenerateCompanyBulkReportsParams } from '../models/companygenerate-company-bulk-reports-params';
import { CompanygenerateReportParams } from '../models/companygenerate-report-params';
import { CompanygetActivedirectoryStatsParams } from '../models/companyget-activedirectory-stats-params';
import { CompanygetAgentSecretsParams } from '../models/companyget-agent-secrets-params';
import { CompanygetApiRolesParams } from '../models/companyget-api-roles-params';
import { CompanygetDashboardLoginDataParams } from '../models/companyget-dashboard-login-data-params';
import { CompanygetGlobalNetworkVulsDataParams } from '../models/companyget-global-network-vuls-data-params';
import { CompanygetMastertemplateDataParams } from '../models/companyget-mastertemplate-data-params';
import { CompanygetNetworkVulsDataParams } from '../models/companyget-network-vuls-data-params';
import { CompanygetRemediationDataParams } from '../models/companyget-remediation-data-params';
import { CompanygetReportCardTemplateParams } from '../models/companyget-report-card-template-params';
import { CompanygetReportListParams } from '../models/companyget-report-list-params';
import { CompanygetScoreTemplatesParams } from '../models/companyget-score-templates-params';
import { CompanygetUniqueApplicationParams } from '../models/companyget-unique-application-params';
import { CompanygetVulnerabilityAssetStatsParams } from '../models/companyget-vulnerability-asset-stats-params';
import { CompanygetVulnerabilityStatsParams } from '../models/companyget-vulnerability-stats-params';
import { CompanygetxlsxreportParams } from '../models/companygetxlsxreport-params';
import { CompanypostInternalErrorParams } from '../models/companypost-internal-error-params';
import { CompanyprocessAssetDataParams } from '../models/companyprocess-asset-data-params';
import { CompanyprocessBaseLineParams } from '../models/companyprocess-base-line-params';
import { CompanyprocessSnmpDataParams } from '../models/companyprocess-snmp-data-params';
import { CompanyquickExternalScanParams } from '../models/companyquick-external-scan-params';
import { CompanyquickExternalScanResultsParams } from '../models/companyquick-external-scan-results-params';
import { CompanyscanParams } from '../models/companyscan-params';
import { CompanysearchCveParams } from '../models/companysearch-cve-params';
import { CompanyupdateCompanyScoreParams } from '../models/companyupdate-company-score-params';
import { CompanyupdateScoreTemplatesParams } from '../models/companyupdate-score-templates-params';

@Injectable({
  providedIn: 'root',
})
export class CompanyService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllApiCompanyGet
   */
  static readonly GetAllApiCompanyGetPath = '/api/company/';

  /**
   * Get All.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllApiCompanyGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiCompanyGet$Response(params?: {

    /**
     * Filter query to be executed against database.
     */
    'q'?: string;
    skip?: number;
    limit?: number;
    sort?: string;

    /**
     * Comma seperated list of fields to return.
     */
    fields?: string;
  }): Observable<StrictHttpResponse<CompanyGetResp>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.GetAllApiCompanyGetPath, 'get');
    if (params) {
      rb.query('q', params['q'], {});
      rb.query('skip', params.skip, {});
      rb.query('limit', params.limit, {});
      rb.query('sort', params.sort, {});
      rb.query('fields', params.fields, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CompanyGetResp>;
      })
    );
  }

  /**
   * Get All.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllApiCompanyGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiCompanyGet(params?: {

    /**
     * Filter query to be executed against database.
     */
    'q'?: string;
    skip?: number;
    limit?: number;
    sort?: string;

    /**
     * Comma seperated list of fields to return.
     */
    fields?: string;
  }): Observable<CompanyGetResp> {

    return this.getAllApiCompanyGet$Response(params).pipe(
      map((r: StrictHttpResponse<CompanyGetResp>) => r.body as CompanyGetResp)
    );
  }

  /**
   * Path part for operation updateApiCompanyPut
   */
  static readonly UpdateApiCompanyPutPath = '/api/company/';

  /**
   * Update.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateApiCompanyPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiCompanyPut$Response(params: {
    body: Company
  }): Observable<StrictHttpResponse<Company>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.UpdateApiCompanyPutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Company>;
      })
    );
  }

  /**
   * Update.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateApiCompanyPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiCompanyPut(params: {
    body: Company
  }): Observable<Company> {

    return this.updateApiCompanyPut$Response(params).pipe(
      map((r: StrictHttpResponse<Company>) => r.body as Company)
    );
  }

  /**
   * Path part for operation createApiCompanyPost
   */
  static readonly CreateApiCompanyPostPath = '/api/company/';

  /**
   * Create.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createApiCompanyPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiCompanyPost$Response(params: {
    body: CompanyCreate
  }): Observable<StrictHttpResponse<Company>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.CreateApiCompanyPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Company>;
      })
    );
  }

  /**
   * Create.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createApiCompanyPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiCompanyPost(params: {
    body: CompanyCreate
  }): Observable<Company> {

    return this.createApiCompanyPost$Response(params).pipe(
      map((r: StrictHttpResponse<Company>) => r.body as Company)
    );
  }

  /**
   * Path part for operation getApiCompanyIdGet
   */
  static readonly GetApiCompanyIdGetPath = '/api/company/{id}';

  /**
   * Get.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiCompanyIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiCompanyIdGet$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<Company>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.GetApiCompanyIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Company>;
      })
    );
  }

  /**
   * Get.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiCompanyIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiCompanyIdGet(params: {
    id: string;
  }): Observable<Company> {

    return this.getApiCompanyIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<Company>) => r.body as Company)
    );
  }

  /**
   * Path part for operation deleteApiCompanyIdDelete
   */
  static readonly DeleteApiCompanyIdDeletePath = '/api/company/{id}';

  /**
   * Delete.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteApiCompanyIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiCompanyIdDelete$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.DeleteApiCompanyIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Delete.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteApiCompanyIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiCompanyIdDelete(params: {
    id: string;
  }): Observable<any> {

    return this.deleteApiCompanyIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation companyprocessAssetDataApiCompanyIdProcessAssetDataPost
   */
  static readonly CompanyprocessAssetDataApiCompanyIdProcessAssetDataPostPath = '/api/company/{id}/processAssetData';

  /**
   * Companyprocessassetdata.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companyprocessAssetDataApiCompanyIdProcessAssetDataPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companyprocessAssetDataApiCompanyIdProcessAssetDataPost$Response(params: {
    id: string;
    body: CompanyprocessAssetDataParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.CompanyprocessAssetDataApiCompanyIdProcessAssetDataPostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Companyprocessassetdata.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `companyprocessAssetDataApiCompanyIdProcessAssetDataPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companyprocessAssetDataApiCompanyIdProcessAssetDataPost(params: {
    id: string;
    body: CompanyprocessAssetDataParams
  }): Observable<any> {

    return this.companyprocessAssetDataApiCompanyIdProcessAssetDataPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation companyprocessSnmpDataApiCompanyIdProcessSnmpDataPost
   */
  static readonly CompanyprocessSnmpDataApiCompanyIdProcessSnmpDataPostPath = '/api/company/{id}/processSnmpData';

  /**
   * Companyprocesssnmpdata.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companyprocessSnmpDataApiCompanyIdProcessSnmpDataPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companyprocessSnmpDataApiCompanyIdProcessSnmpDataPost$Response(params: {
    id: string;
    body: CompanyprocessSnmpDataParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.CompanyprocessSnmpDataApiCompanyIdProcessSnmpDataPostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Companyprocesssnmpdata.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `companyprocessSnmpDataApiCompanyIdProcessSnmpDataPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companyprocessSnmpDataApiCompanyIdProcessSnmpDataPost(params: {
    id: string;
    body: CompanyprocessSnmpDataParams
  }): Observable<any> {

    return this.companyprocessSnmpDataApiCompanyIdProcessSnmpDataPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation companydiscoveryCompletedApiCompanyIdDiscoveryCompletedPost
   */
  static readonly CompanydiscoveryCompletedApiCompanyIdDiscoveryCompletedPostPath = '/api/company/{id}/discoveryCompleted';

  /**
   * Companydiscoverycompleted.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companydiscoveryCompletedApiCompanyIdDiscoveryCompletedPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companydiscoveryCompletedApiCompanyIdDiscoveryCompletedPost$Response(params: {
    id: string;
    body: CompanydiscoveryCompletedParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.CompanydiscoveryCompletedApiCompanyIdDiscoveryCompletedPostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Companydiscoverycompleted.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `companydiscoveryCompletedApiCompanyIdDiscoveryCompletedPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companydiscoveryCompletedApiCompanyIdDiscoveryCompletedPost(params: {
    id: string;
    body: CompanydiscoveryCompletedParams
  }): Observable<any> {

    return this.companydiscoveryCompletedApiCompanyIdDiscoveryCompletedPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation companycompanyDashboardsApiCompanyIdCompanyDashboardsPost
   */
  static readonly CompanycompanyDashboardsApiCompanyIdCompanyDashboardsPostPath = '/api/company/{id}/companyDashboards';

  /**
   * Companycompanydashboards.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companycompanyDashboardsApiCompanyIdCompanyDashboardsPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companycompanyDashboardsApiCompanyIdCompanyDashboardsPost$Response(params: {
    id: string;
    body: CompanycompanyDashboardsParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.CompanycompanyDashboardsApiCompanyIdCompanyDashboardsPostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Companycompanydashboards.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `companycompanyDashboardsApiCompanyIdCompanyDashboardsPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companycompanyDashboardsApiCompanyIdCompanyDashboardsPost(params: {
    id: string;
    body: CompanycompanyDashboardsParams
  }): Observable<any> {

    return this.companycompanyDashboardsApiCompanyIdCompanyDashboardsPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation companygetReportListApiCompanyIdGetReportListPost
   */
  static readonly CompanygetReportListApiCompanyIdGetReportListPostPath = '/api/standardreports/getReportList';

  /**
   * Companygetreportlist.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companygetReportListApiCompanyIdGetReportListPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companygetReportListApiCompanyIdGetReportListPost$Response(params: {
    id: string;
    body: CompanygetReportListParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.CompanygetReportListApiCompanyIdGetReportListPostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Companygetreportlist.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `companygetReportListApiCompanyIdGetReportListPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companygetReportListApiCompanyIdGetReportListPost(params: {
    id: string;
    body: CompanygetReportListParams
  }): Observable<any> {

    return this.companygetReportListApiCompanyIdGetReportListPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation companygetDashboardLoginDataApiCompanyIdGetDashboardLoginDataPost
   */
  static readonly CompanygetDashboardLoginDataApiCompanyIdGetDashboardLoginDataPostPath = '/api/company/{id}/getDashboardLoginData';

  /**
   * Companygetdashboardlogindata.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companygetDashboardLoginDataApiCompanyIdGetDashboardLoginDataPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companygetDashboardLoginDataApiCompanyIdGetDashboardLoginDataPost$Response(params: {
    id: string;
    body: CompanygetDashboardLoginDataParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.CompanygetDashboardLoginDataApiCompanyIdGetDashboardLoginDataPostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Companygetdashboardlogindata.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `companygetDashboardLoginDataApiCompanyIdGetDashboardLoginDataPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companygetDashboardLoginDataApiCompanyIdGetDashboardLoginDataPost(params: {
    id: string;
    body: CompanygetDashboardLoginDataParams
  }): Observable<any> {

    return this.companygetDashboardLoginDataApiCompanyIdGetDashboardLoginDataPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation companygenerateReportApiCompanyIdGenerateReportPost
   */
  static readonly CompanygenerateReportApiCompanyIdGenerateReportPostPath = '/api/standardreports/generateReport';

  /**
   * Companygeneratereport.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companygenerateReportApiCompanyIdGenerateReportPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companygenerateReportApiCompanyIdGenerateReportPost$Response(params: {
    id: string;
    body: CompanygenerateReportParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.CompanygenerateReportApiCompanyIdGenerateReportPostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Companygeneratereport.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `companygenerateReportApiCompanyIdGenerateReportPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companygenerateReportApiCompanyIdGenerateReportPost(params: {
    id: string;
    body: CompanygenerateReportParams
  }): Observable<any> {

    return this.companygenerateReportApiCompanyIdGenerateReportPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation companygenerateCompanyBulkReportsApiCompanyIdGenerateCompanyBulkReportsPost
   */
  static readonly CompanygenerateCompanyBulkReportsApiCompanyIdGenerateCompanyBulkReportsPostPath = '/api/standardreports/generateCompanyBulkReports';

  /**
   * Companygeneratecompanybulkreports.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companygenerateCompanyBulkReportsApiCompanyIdGenerateCompanyBulkReportsPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companygenerateCompanyBulkReportsApiCompanyIdGenerateCompanyBulkReportsPost$Response(params: {
    id: string;
    body: CompanygenerateCompanyBulkReportsParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.CompanygenerateCompanyBulkReportsApiCompanyIdGenerateCompanyBulkReportsPostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Companygeneratecompanybulkreports.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `companygenerateCompanyBulkReportsApiCompanyIdGenerateCompanyBulkReportsPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companygenerateCompanyBulkReportsApiCompanyIdGenerateCompanyBulkReportsPost(params: {
    id: string;
    body: CompanygenerateCompanyBulkReportsParams
  }): Observable<any> {

    return this.companygenerateCompanyBulkReportsApiCompanyIdGenerateCompanyBulkReportsPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation companyscanApiCompanyIdScanPost
   */
  static readonly CompanyscanApiCompanyIdScanPostPath = '/api/company/{id}/scan';

  /**
   * Companyscan.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companyscanApiCompanyIdScanPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companyscanApiCompanyIdScanPost$Response(params: {
    id: string;
    body: CompanyscanParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.CompanyscanApiCompanyIdScanPostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Companyscan.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `companyscanApiCompanyIdScanPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companyscanApiCompanyIdScanPost(params: {
    id: string;
    body: CompanyscanParams
  }): Observable<any> {

    return this.companyscanApiCompanyIdScanPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation companygetAgentSecretsApiCompanyIdGetAgentSecretsPost
   */
  static readonly CompanygetAgentSecretsApiCompanyIdGetAgentSecretsPostPath = '/api/company/{id}/getAgentSecrets';

  /**
   * Companygetagentsecrets.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companygetAgentSecretsApiCompanyIdGetAgentSecretsPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companygetAgentSecretsApiCompanyIdGetAgentSecretsPost$Response(params: {
    id: string;
    body: CompanygetAgentSecretsParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.CompanygetAgentSecretsApiCompanyIdGetAgentSecretsPostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Companygetagentsecrets.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `companygetAgentSecretsApiCompanyIdGetAgentSecretsPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companygetAgentSecretsApiCompanyIdGetAgentSecretsPost(params: {
    id: string;
    body: CompanygetAgentSecretsParams
  }): Observable<any> {

    return this.companygetAgentSecretsApiCompanyIdGetAgentSecretsPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation companycreateMspApiCompanyIdCreateMspPost
   */
  static readonly CompanycreateMspApiCompanyIdCreateMspPostPath = '/api/company/{id}/createMSP';

  /**
   * Companycreatemsp.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companycreateMspApiCompanyIdCreateMspPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companycreateMspApiCompanyIdCreateMspPost$Response(params: {
    id: string;
    body: CompanycreateMspParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.CompanycreateMspApiCompanyIdCreateMspPostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Companycreatemsp.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `companycreateMspApiCompanyIdCreateMspPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companycreateMspApiCompanyIdCreateMspPost(params: {
    id: string;
    body: CompanycreateMspParams
  }): Observable<any> {

    return this.companycreateMspApiCompanyIdCreateMspPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation companygetRemediationDataApiCompanyIdGetRemediationDataPost
   */
  static readonly CompanygetRemediationDataApiCompanyIdGetRemediationDataPostPath = '/api/company/{id}/getRemediationData';

  /**
   * Companygetremediationdata.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companygetRemediationDataApiCompanyIdGetRemediationDataPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companygetRemediationDataApiCompanyIdGetRemediationDataPost$Response(params: {
    id: string;
    body: CompanygetRemediationDataParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.CompanygetRemediationDataApiCompanyIdGetRemediationDataPostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Companygetremediationdata.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `companygetRemediationDataApiCompanyIdGetRemediationDataPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companygetRemediationDataApiCompanyIdGetRemediationDataPost(params: {
    id: string;
    body: CompanygetRemediationDataParams
  }): Observable<any> {

    return this.companygetRemediationDataApiCompanyIdGetRemediationDataPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation companyprocessBaseLineApiCompanyIdProcessBaseLinePost
   */
  static readonly CompanyprocessBaseLineApiCompanyIdProcessBaseLinePostPath = '/api/company/{id}/processBaseLine';

  /**
   * Companyprocessbaseline.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companyprocessBaseLineApiCompanyIdProcessBaseLinePost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companyprocessBaseLineApiCompanyIdProcessBaseLinePost$Response(params: {
    id: string;
    body: CompanyprocessBaseLineParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.CompanyprocessBaseLineApiCompanyIdProcessBaseLinePostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Companyprocessbaseline.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `companyprocessBaseLineApiCompanyIdProcessBaseLinePost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companyprocessBaseLineApiCompanyIdProcessBaseLinePost(params: {
    id: string;
    body: CompanyprocessBaseLineParams
  }): Observable<any> {

    return this.companyprocessBaseLineApiCompanyIdProcessBaseLinePost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation companygetNetworkVulsDataApiCompanyIdGetNetworkVulsDataPost
   */
  static readonly CompanygetNetworkVulsDataApiCompanyIdGetNetworkVulsDataPostPath = '/api/company/{id}/getNetworkVulsData';

  /**
   * Companygetnetworkvulsdata.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companygetNetworkVulsDataApiCompanyIdGetNetworkVulsDataPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companygetNetworkVulsDataApiCompanyIdGetNetworkVulsDataPost$Response(params: {
    id: string;
    body: CompanygetNetworkVulsDataParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.CompanygetNetworkVulsDataApiCompanyIdGetNetworkVulsDataPostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Companygetnetworkvulsdata.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `companygetNetworkVulsDataApiCompanyIdGetNetworkVulsDataPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companygetNetworkVulsDataApiCompanyIdGetNetworkVulsDataPost(params: {
    id: string;
    body: CompanygetNetworkVulsDataParams
  }): Observable<any> {

    return this.companygetNetworkVulsDataApiCompanyIdGetNetworkVulsDataPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation companygetUniqueApplicationApiCompanyIdGetUniqueApplicationPost
   */
  static readonly CompanygetUniqueApplicationApiCompanyIdGetUniqueApplicationPostPath = '/api/company/{id}/getUniqueApplication';

  /**
   * Companygetuniqueapplication.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companygetUniqueApplicationApiCompanyIdGetUniqueApplicationPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companygetUniqueApplicationApiCompanyIdGetUniqueApplicationPost$Response(params: {
    id: string;
    body: CompanygetUniqueApplicationParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.CompanygetUniqueApplicationApiCompanyIdGetUniqueApplicationPostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Companygetuniqueapplication.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `companygetUniqueApplicationApiCompanyIdGetUniqueApplicationPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companygetUniqueApplicationApiCompanyIdGetUniqueApplicationPost(params: {
    id: string;
    body: CompanygetUniqueApplicationParams
  }): Observable<any> {

    return this.companygetUniqueApplicationApiCompanyIdGetUniqueApplicationPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation companygetGlobalNetworkVulsDataApiCompanyIdGetGlobalNetworkVulsDataPost
   */
  static readonly CompanygetGlobalNetworkVulsDataApiCompanyIdGetGlobalNetworkVulsDataPostPath = '/api/company/{id}/getGlobalNetworkVulsData';

  /**
   * Companygetglobalnetworkvulsdata.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companygetGlobalNetworkVulsDataApiCompanyIdGetGlobalNetworkVulsDataPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companygetGlobalNetworkVulsDataApiCompanyIdGetGlobalNetworkVulsDataPost$Response(params: {
    id: string;
    body: CompanygetGlobalNetworkVulsDataParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.CompanygetGlobalNetworkVulsDataApiCompanyIdGetGlobalNetworkVulsDataPostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Companygetglobalnetworkvulsdata.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `companygetGlobalNetworkVulsDataApiCompanyIdGetGlobalNetworkVulsDataPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companygetGlobalNetworkVulsDataApiCompanyIdGetGlobalNetworkVulsDataPost(params: {
    id: string;
    body: CompanygetGlobalNetworkVulsDataParams
  }): Observable<any> {

    return this.companygetGlobalNetworkVulsDataApiCompanyIdGetGlobalNetworkVulsDataPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation companygetVulnerabilityStatsApiCompanyIdGetVulnerabilityStatsPost
   */
  static readonly CompanygetVulnerabilityStatsApiCompanyIdGetVulnerabilityStatsPostPath = '/api/company/{id}/getVulnerabilityStats';

  /**
   * Companygetvulnerabilitystats.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companygetVulnerabilityStatsApiCompanyIdGetVulnerabilityStatsPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companygetVulnerabilityStatsApiCompanyIdGetVulnerabilityStatsPost$Response(params: {
    id: string;
    body: CompanygetVulnerabilityStatsParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.CompanygetVulnerabilityStatsApiCompanyIdGetVulnerabilityStatsPostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Companygetvulnerabilitystats.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `companygetVulnerabilityStatsApiCompanyIdGetVulnerabilityStatsPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companygetVulnerabilityStatsApiCompanyIdGetVulnerabilityStatsPost(params: {
    id: string;
    body: CompanygetVulnerabilityStatsParams
  }): Observable<any> {

    return this.companygetVulnerabilityStatsApiCompanyIdGetVulnerabilityStatsPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation companygetVulnerabilityAssetStatsApiCompanyIdGetVulnerabilityAssetStatsPost
   */
  static readonly CompanygetVulnerabilityAssetStatsApiCompanyIdGetVulnerabilityAssetStatsPostPath = '/api/company/{id}/getVulnerabilityAssetStats';

  /**
   * Companygetvulnerabilityassetstats.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companygetVulnerabilityAssetStatsApiCompanyIdGetVulnerabilityAssetStatsPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companygetVulnerabilityAssetStatsApiCompanyIdGetVulnerabilityAssetStatsPost$Response(params: {
    id: string;
    body: CompanygetVulnerabilityAssetStatsParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.CompanygetVulnerabilityAssetStatsApiCompanyIdGetVulnerabilityAssetStatsPostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Companygetvulnerabilityassetstats.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `companygetVulnerabilityAssetStatsApiCompanyIdGetVulnerabilityAssetStatsPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companygetVulnerabilityAssetStatsApiCompanyIdGetVulnerabilityAssetStatsPost(params: {
    id: string;
    body: CompanygetVulnerabilityAssetStatsParams
  }): Observable<any> {

    return this.companygetVulnerabilityAssetStatsApiCompanyIdGetVulnerabilityAssetStatsPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation companysearchCveApiCompanyIdSearchCvePost
   */
  static readonly CompanysearchCveApiCompanyIdSearchCvePostPath = '/api/company/{id}/searchCVE';

  /**
   * Companysearchcve.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companysearchCveApiCompanyIdSearchCvePost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companysearchCveApiCompanyIdSearchCvePost$Response(params: {
    id: string;
    body: CompanysearchCveParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.CompanysearchCveApiCompanyIdSearchCvePostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Companysearchcve.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `companysearchCveApiCompanyIdSearchCvePost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companysearchCveApiCompanyIdSearchCvePost(params: {
    id: string;
    body: CompanysearchCveParams
  }): Observable<any> {

    return this.companysearchCveApiCompanyIdSearchCvePost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation companyfirewallScanApiCompanyIdFirewallScanPost
   */
  static readonly CompanyfirewallScanApiCompanyIdFirewallScanPostPath = '/api/company/{id}/firewallScan';

  /**
   * Companyfirewallscan.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companyfirewallScanApiCompanyIdFirewallScanPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companyfirewallScanApiCompanyIdFirewallScanPost$Response(params: {
    id: string;
    body: CompanyfirewallScanParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.CompanyfirewallScanApiCompanyIdFirewallScanPostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Companyfirewallscan.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `companyfirewallScanApiCompanyIdFirewallScanPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companyfirewallScanApiCompanyIdFirewallScanPost(params: {
    id: string;
    body: CompanyfirewallScanParams
  }): Observable<any> {

    return this.companyfirewallScanApiCompanyIdFirewallScanPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation companypostInternalErrorApiCompanyIdPostInternalErrorPost
   */
  static readonly CompanypostInternalErrorApiCompanyIdPostInternalErrorPostPath = '/api/company/{id}/postInternalError';

  /**
   * Companypostinternalerror.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companypostInternalErrorApiCompanyIdPostInternalErrorPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companypostInternalErrorApiCompanyIdPostInternalErrorPost$Response(params: {
    id: string;
    body: CompanypostInternalErrorParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.CompanypostInternalErrorApiCompanyIdPostInternalErrorPostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Companypostinternalerror.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `companypostInternalErrorApiCompanyIdPostInternalErrorPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companypostInternalErrorApiCompanyIdPostInternalErrorPost(params: {
    id: string;
    body: CompanypostInternalErrorParams
  }): Observable<any> {

    return this.companypostInternalErrorApiCompanyIdPostInternalErrorPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation companygetReportCardTemplateApiCompanyIdGetReportCardTemplatePost
   */
  static readonly CompanygetReportCardTemplateApiCompanyIdGetReportCardTemplatePostPath = '/api/company/{id}/getReportCardTemplate';

  /**
   * Companygetreportcardtemplate.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companygetReportCardTemplateApiCompanyIdGetReportCardTemplatePost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companygetReportCardTemplateApiCompanyIdGetReportCardTemplatePost$Response(params: {
    id: string;
    body: CompanygetReportCardTemplateParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.CompanygetReportCardTemplateApiCompanyIdGetReportCardTemplatePostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Companygetreportcardtemplate.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `companygetReportCardTemplateApiCompanyIdGetReportCardTemplatePost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companygetReportCardTemplateApiCompanyIdGetReportCardTemplatePost(params: {
    id: string;
    body: CompanygetReportCardTemplateParams
  }): Observable<any> {

    return this.companygetReportCardTemplateApiCompanyIdGetReportCardTemplatePost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation companyupdateCompanyScoreApiCompanyIdUpdateCompanyScorePost
   */
  static readonly CompanyupdateCompanyScoreApiCompanyIdUpdateCompanyScorePostPath = '/api/company/{id}/updateCompanyScore';

  /**
   * Companyupdatecompanyscore.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companyupdateCompanyScoreApiCompanyIdUpdateCompanyScorePost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companyupdateCompanyScoreApiCompanyIdUpdateCompanyScorePost$Response(params: {
    id: string;
    body: CompanyupdateCompanyScoreParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.CompanyupdateCompanyScoreApiCompanyIdUpdateCompanyScorePostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Companyupdatecompanyscore.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `companyupdateCompanyScoreApiCompanyIdUpdateCompanyScorePost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companyupdateCompanyScoreApiCompanyIdUpdateCompanyScorePost(params: {
    id: string;
    body: CompanyupdateCompanyScoreParams
  }): Observable<any> {

    return this.companyupdateCompanyScoreApiCompanyIdUpdateCompanyScorePost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation companygetScoreTemplatesApiCompanyIdGetScoreTemplatesPost
   */
  static readonly CompanygetScoreTemplatesApiCompanyIdGetScoreTemplatesPostPath = '/api/company/{id}/getScoreTemplates';

  /**
   * Companygetscoretemplates.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companygetScoreTemplatesApiCompanyIdGetScoreTemplatesPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companygetScoreTemplatesApiCompanyIdGetScoreTemplatesPost$Response(params: {
    id: string;
    body: CompanygetScoreTemplatesParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.CompanygetScoreTemplatesApiCompanyIdGetScoreTemplatesPostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Companygetscoretemplates.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `companygetScoreTemplatesApiCompanyIdGetScoreTemplatesPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companygetScoreTemplatesApiCompanyIdGetScoreTemplatesPost(params: {
    id: string;
    body: CompanygetScoreTemplatesParams
  }): Observable<any> {

    return this.companygetScoreTemplatesApiCompanyIdGetScoreTemplatesPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation companyupdateScoreTemplatesApiCompanyIdUpdateScoreTemplatesPost
   */
  static readonly CompanyupdateScoreTemplatesApiCompanyIdUpdateScoreTemplatesPostPath = '/api/company/{id}/updateScoreTemplates';

  /**
   * Companyupdatescoretemplates.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companyupdateScoreTemplatesApiCompanyIdUpdateScoreTemplatesPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companyupdateScoreTemplatesApiCompanyIdUpdateScoreTemplatesPost$Response(params: {
    id: string;
    body: CompanyupdateScoreTemplatesParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.CompanyupdateScoreTemplatesApiCompanyIdUpdateScoreTemplatesPostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Companyupdatescoretemplates.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `companyupdateScoreTemplatesApiCompanyIdUpdateScoreTemplatesPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companyupdateScoreTemplatesApiCompanyIdUpdateScoreTemplatesPost(params: {
    id: string;
    body: CompanyupdateScoreTemplatesParams
  }): Observable<any> {

    return this.companyupdateScoreTemplatesApiCompanyIdUpdateScoreTemplatesPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation companygetMastertemplateDataApiCompanyIdGetMastertemplateDataPost
   */
  static readonly CompanygetMastertemplateDataApiCompanyIdGetMastertemplateDataPostPath = '/api/company/{id}/getMastertemplateData';

  /**
   * Companygetmastertemplatedata.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companygetMastertemplateDataApiCompanyIdGetMastertemplateDataPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companygetMastertemplateDataApiCompanyIdGetMastertemplateDataPost$Response(params: {
    id: string;
    body: CompanygetMastertemplateDataParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.CompanygetMastertemplateDataApiCompanyIdGetMastertemplateDataPostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Companygetmastertemplatedata.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `companygetMastertemplateDataApiCompanyIdGetMastertemplateDataPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companygetMastertemplateDataApiCompanyIdGetMastertemplateDataPost(params: {
    id: string;
    body: CompanygetMastertemplateDataParams
  }): Observable<any> {

    return this.companygetMastertemplateDataApiCompanyIdGetMastertemplateDataPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation companygetActivedirectoryStatsApiCompanyIdGetActivedirectoryStatsPost
   */
  static readonly CompanygetActivedirectoryStatsApiCompanyIdGetActivedirectoryStatsPostPath = '/api/company/{id}/getActivedirectoryStats';

  /**
   * Companygetactivedirectorystats.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companygetActivedirectoryStatsApiCompanyIdGetActivedirectoryStatsPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companygetActivedirectoryStatsApiCompanyIdGetActivedirectoryStatsPost$Response(params: {
    id: string;
    body: CompanygetActivedirectoryStatsParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.CompanygetActivedirectoryStatsApiCompanyIdGetActivedirectoryStatsPostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Companygetactivedirectorystats.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `companygetActivedirectoryStatsApiCompanyIdGetActivedirectoryStatsPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companygetActivedirectoryStatsApiCompanyIdGetActivedirectoryStatsPost(params: {
    id: string;
    body: CompanygetActivedirectoryStatsParams
  }): Observable<any> {

    return this.companygetActivedirectoryStatsApiCompanyIdGetActivedirectoryStatsPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation companyactivedirectoryScanCompletedApiCompanyIdActivedirectoryScanCompletedPost
   */
  static readonly CompanyactivedirectoryScanCompletedApiCompanyIdActivedirectoryScanCompletedPostPath = '/api/company/{id}/activedirectoryScanCompleted';

  /**
   * Companyactivedirectoryscancompleted.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companyactivedirectoryScanCompletedApiCompanyIdActivedirectoryScanCompletedPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companyactivedirectoryScanCompletedApiCompanyIdActivedirectoryScanCompletedPost$Response(params: {
    id: string;
    body: CompanyactivedirectoryScanCompletedParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.CompanyactivedirectoryScanCompletedApiCompanyIdActivedirectoryScanCompletedPostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Companyactivedirectoryscancompleted.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `companyactivedirectoryScanCompletedApiCompanyIdActivedirectoryScanCompletedPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companyactivedirectoryScanCompletedApiCompanyIdActivedirectoryScanCompletedPost(params: {
    id: string;
    body: CompanyactivedirectoryScanCompletedParams
  }): Observable<any> {

    return this.companyactivedirectoryScanCompletedApiCompanyIdActivedirectoryScanCompletedPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation companygetxlsxreportApiCompanyIdGetxlsxreportPost
   */
  static readonly CompanygetxlsxreportApiCompanyIdGetxlsxreportPostPath = '/api/company/{id}/getxlsxreport';

  /**
   * Companygetxlsxreport.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companygetxlsxreportApiCompanyIdGetxlsxreportPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companygetxlsxreportApiCompanyIdGetxlsxreportPost$Response(params: {
    id: string;
    body: CompanygetxlsxreportParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.CompanygetxlsxreportApiCompanyIdGetxlsxreportPostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Companygetxlsxreport.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `companygetxlsxreportApiCompanyIdGetxlsxreportPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companygetxlsxreportApiCompanyIdGetxlsxreportPost(params: {
    id: string;
    body: CompanygetxlsxreportParams
  }): Observable<any> {

    return this.companygetxlsxreportApiCompanyIdGetxlsxreportPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation companyquickExternalScanApiCompanyIdQuickExternalScanPost
   */
  static readonly CompanyquickExternalScanApiCompanyIdQuickExternalScanPostPath = '/api/company/{id}/quickExternalScan';

  /**
   * Companyquickexternalscan.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companyquickExternalScanApiCompanyIdQuickExternalScanPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companyquickExternalScanApiCompanyIdQuickExternalScanPost$Response(params: {
    id: string;
    body: CompanyquickExternalScanParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.CompanyquickExternalScanApiCompanyIdQuickExternalScanPostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Companyquickexternalscan.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `companyquickExternalScanApiCompanyIdQuickExternalScanPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companyquickExternalScanApiCompanyIdQuickExternalScanPost(params: {
    id: string;
    body: CompanyquickExternalScanParams
  }): Observable<any> {

    return this.companyquickExternalScanApiCompanyIdQuickExternalScanPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation companyquickExternalScanResultsApiCompanyIdQuickExternalScanResultsPost
   */
  static readonly CompanyquickExternalScanResultsApiCompanyIdQuickExternalScanResultsPostPath = '/api/company/{id}/quickExternalScanResults';

  /**
   * Companyquickexternalscanresults.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companyquickExternalScanResultsApiCompanyIdQuickExternalScanResultsPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companyquickExternalScanResultsApiCompanyIdQuickExternalScanResultsPost$Response(params: {
    id: string;
    body: CompanyquickExternalScanResultsParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.CompanyquickExternalScanResultsApiCompanyIdQuickExternalScanResultsPostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Companyquickexternalscanresults.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `companyquickExternalScanResultsApiCompanyIdQuickExternalScanResultsPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companyquickExternalScanResultsApiCompanyIdQuickExternalScanResultsPost(params: {
    id: string;
    body: CompanyquickExternalScanResultsParams
  }): Observable<any> {

    return this.companyquickExternalScanResultsApiCompanyIdQuickExternalScanResultsPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation companygetApiRolesApiCompanyIdGetApiRolesPost
   */
  static readonly CompanygetApiRolesApiCompanyIdGetApiRolesPostPath = '/api/company/{id}/getApiRoles';

  /**
   * Companygetapiroles.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companygetApiRolesApiCompanyIdGetApiRolesPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companygetApiRolesApiCompanyIdGetApiRolesPost$Response(params: {
    id: string;
    body: CompanygetApiRolesParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.CompanygetApiRolesApiCompanyIdGetApiRolesPostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Companygetapiroles.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `companygetApiRolesApiCompanyIdGetApiRolesPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companygetApiRolesApiCompanyIdGetApiRolesPost(params: {
    id: string;
    body: CompanygetApiRolesParams
  }): Observable<any> {

    return this.companygetApiRolesApiCompanyIdGetApiRolesPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
