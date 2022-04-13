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

import { BodyCustomGeneratedReportsuploadCompanyLogoApiCustomgeneratedreportsIdUploadCompanyLogoPost } from '../models/body-custom-generated-reportsupload-company-logo-api-customgeneratedreports-id-upload-company-logo-post';
import { BodyCustomGeneratedReportsuploadCustomRefDocApiCustomgeneratedreportsIdUploadCustomRefDocPost } from '../models/body-custom-generated-reportsupload-custom-ref-doc-api-customgeneratedreports-id-upload-custom-ref-doc-post';
import { CustomGeneratedReports } from '../models/custom-generated-reports';
import { CustomGeneratedReportsCreate } from '../models/custom-generated-reports-create';
import { CustomGeneratedReportsGetResp } from '../models/custom-generated-reports-get-resp';
import { CustomGeneratedReportsdeleteAllParams } from '../models/custom-generated-reportsdelete-all-params';
import { CustomGeneratedReportsexecuteReportParams } from '../models/custom-generated-reportsexecute-report-params';
import { CustomGeneratedReportsgenerateReportLinkParams } from '../models/custom-generated-reportsgenerate-report-link-params';
import { CustomGeneratedReportsgetCompanyLogoDocListParams } from '../models/custom-generated-reportsget-company-logo-doc-list-params';
import { CustomGeneratedReportsgetCompanyLogoDocParams } from '../models/custom-generated-reportsget-company-logo-doc-params';
import { CustomGeneratedReportsremoveCompanyLogoDocParams } from '../models/custom-generated-reportsremove-company-logo-doc-params';

@Injectable({
  providedIn: 'root',
})
export class CustomGeneratedReportsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllApiCustomgeneratedreportsGet
   */
  static readonly GetAllApiCustomgeneratedreportsGetPath = '/api/customgeneratedreports/';

  /**
   * Get All.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllApiCustomgeneratedreportsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiCustomgeneratedreportsGet$Response(params?: {

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
  }): Observable<StrictHttpResponse<CustomGeneratedReportsGetResp>> {

    const rb = new RequestBuilder(this.rootUrl, CustomGeneratedReportsService.GetAllApiCustomgeneratedreportsGetPath, 'get');
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
        return r as StrictHttpResponse<CustomGeneratedReportsGetResp>;
      })
    );
  }

  /**
   * Get All.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllApiCustomgeneratedreportsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiCustomgeneratedreportsGet(params?: {

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
  }): Observable<CustomGeneratedReportsGetResp> {

    return this.getAllApiCustomgeneratedreportsGet$Response(params).pipe(
      map((r: StrictHttpResponse<CustomGeneratedReportsGetResp>) => r.body as CustomGeneratedReportsGetResp)
    );
  }

  /**
   * Path part for operation updateApiCustomgeneratedreportsPut
   */
  static readonly UpdateApiCustomgeneratedreportsPutPath = '/api/customgeneratedreports/';

  /**
   * Update.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateApiCustomgeneratedreportsPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiCustomgeneratedreportsPut$Response(params: {
    body: CustomGeneratedReports
  }): Observable<StrictHttpResponse<CustomGeneratedReports>> {

    const rb = new RequestBuilder(this.rootUrl, CustomGeneratedReportsService.UpdateApiCustomgeneratedreportsPutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CustomGeneratedReports>;
      })
    );
  }

  /**
   * Update.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateApiCustomgeneratedreportsPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiCustomgeneratedreportsPut(params: {
    body: CustomGeneratedReports
  }): Observable<CustomGeneratedReports> {

    return this.updateApiCustomgeneratedreportsPut$Response(params).pipe(
      map((r: StrictHttpResponse<CustomGeneratedReports>) => r.body as CustomGeneratedReports)
    );
  }

  /**
   * Path part for operation createApiCustomgeneratedreportsPost
   */
  static readonly CreateApiCustomgeneratedreportsPostPath = '/api/customgeneratedreports/';

  /**
   * Create.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createApiCustomgeneratedreportsPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiCustomgeneratedreportsPost$Response(params: {
    body: CustomGeneratedReportsCreate
  }): Observable<StrictHttpResponse<CustomGeneratedReports>> {

    const rb = new RequestBuilder(this.rootUrl, CustomGeneratedReportsService.CreateApiCustomgeneratedreportsPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CustomGeneratedReports>;
      })
    );
  }

  /**
   * Create.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createApiCustomgeneratedreportsPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiCustomgeneratedreportsPost(params: {
    body: CustomGeneratedReportsCreate
  }): Observable<CustomGeneratedReports> {

    return this.createApiCustomgeneratedreportsPost$Response(params).pipe(
      map((r: StrictHttpResponse<CustomGeneratedReports>) => r.body as CustomGeneratedReports)
    );
  }

  /**
   * Path part for operation getApiCustomgeneratedreportsIdGet
   */
  static readonly GetApiCustomgeneratedreportsIdGetPath = '/api/customgeneratedreports/{id}';

  /**
   * Get.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiCustomgeneratedreportsIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiCustomgeneratedreportsIdGet$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<CustomGeneratedReports>> {

    const rb = new RequestBuilder(this.rootUrl, CustomGeneratedReportsService.GetApiCustomgeneratedreportsIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CustomGeneratedReports>;
      })
    );
  }

  /**
   * Get.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiCustomgeneratedreportsIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiCustomgeneratedreportsIdGet(params: {
    id: string;
  }): Observable<CustomGeneratedReports> {

    return this.getApiCustomgeneratedreportsIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<CustomGeneratedReports>) => r.body as CustomGeneratedReports)
    );
  }

  /**
   * Path part for operation deleteApiCustomgeneratedreportsIdDelete
   */
  static readonly DeleteApiCustomgeneratedreportsIdDeletePath = '/api/customgeneratedreports/{id}';

  /**
   * Delete.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteApiCustomgeneratedreportsIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiCustomgeneratedreportsIdDelete$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CustomGeneratedReportsService.DeleteApiCustomgeneratedreportsIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `deleteApiCustomgeneratedreportsIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiCustomgeneratedreportsIdDelete(params: {
    id: string;
  }): Observable<any> {

    return this.deleteApiCustomgeneratedreportsIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation customGeneratedReportsexecuteReportApiCustomgeneratedreportsIdExecuteReportPost
   */
  static readonly CustomGeneratedReportsexecuteReportApiCustomgeneratedreportsIdExecuteReportPostPath = '/api/customgeneratedreports/{id}/executeReport';

  /**
   * Customgeneratedreportsexecutereport.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `customGeneratedReportsexecuteReportApiCustomgeneratedreportsIdExecuteReportPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  customGeneratedReportsexecuteReportApiCustomgeneratedreportsIdExecuteReportPost$Response(params: {
    id: string;
    body: CustomGeneratedReportsexecuteReportParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CustomGeneratedReportsService.CustomGeneratedReportsexecuteReportApiCustomgeneratedreportsIdExecuteReportPostPath, 'post');
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
   * Customgeneratedreportsexecutereport.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `customGeneratedReportsexecuteReportApiCustomgeneratedreportsIdExecuteReportPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  customGeneratedReportsexecuteReportApiCustomgeneratedreportsIdExecuteReportPost(params: {
    id: string;
    body: CustomGeneratedReportsexecuteReportParams
  }): Observable<any> {

    return this.customGeneratedReportsexecuteReportApiCustomgeneratedreportsIdExecuteReportPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation customGeneratedReportsuploadCustomRefDocApiCustomgeneratedreportsIdUploadCustomRefDocPost
   */
  static readonly CustomGeneratedReportsuploadCustomRefDocApiCustomgeneratedreportsIdUploadCustomRefDocPostPath = '/api/customgeneratedreports/{id}/uploadCustomRefDoc';

  /**
   * Customgeneratedreportsuploadcustomrefdoc.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `customGeneratedReportsuploadCustomRefDocApiCustomgeneratedreportsIdUploadCustomRefDocPost()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  customGeneratedReportsuploadCustomRefDocApiCustomgeneratedreportsIdUploadCustomRefDocPost$Response(params: {
    id: string;
    body: BodyCustomGeneratedReportsuploadCustomRefDocApiCustomgeneratedreportsIdUploadCustomRefDocPost
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CustomGeneratedReportsService.CustomGeneratedReportsuploadCustomRefDocApiCustomgeneratedreportsIdUploadCustomRefDocPostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'multipart/form-data');
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
   * Customgeneratedreportsuploadcustomrefdoc.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `customGeneratedReportsuploadCustomRefDocApiCustomgeneratedreportsIdUploadCustomRefDocPost$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  customGeneratedReportsuploadCustomRefDocApiCustomgeneratedreportsIdUploadCustomRefDocPost(params: {
    id: string;
    body: BodyCustomGeneratedReportsuploadCustomRefDocApiCustomgeneratedreportsIdUploadCustomRefDocPost
  }): Observable<any> {

    return this.customGeneratedReportsuploadCustomRefDocApiCustomgeneratedreportsIdUploadCustomRefDocPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation customGeneratedReportsuploadCompanyLogoApiCustomgeneratedreportsIdUploadCompanyLogoPost
   */
  static readonly CustomGeneratedReportsuploadCompanyLogoApiCustomgeneratedreportsIdUploadCompanyLogoPostPath = '/api/customgeneratedreports/{id}/uploadCompanyLogo';

  /**
   * Customgeneratedreportsuploadcompanylogo.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `customGeneratedReportsuploadCompanyLogoApiCustomgeneratedreportsIdUploadCompanyLogoPost()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  customGeneratedReportsuploadCompanyLogoApiCustomgeneratedreportsIdUploadCompanyLogoPost$Response(params: {
    id: string;
    body: BodyCustomGeneratedReportsuploadCompanyLogoApiCustomgeneratedreportsIdUploadCompanyLogoPost
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CustomGeneratedReportsService.CustomGeneratedReportsuploadCompanyLogoApiCustomgeneratedreportsIdUploadCompanyLogoPostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'multipart/form-data');
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
   * Customgeneratedreportsuploadcompanylogo.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `customGeneratedReportsuploadCompanyLogoApiCustomgeneratedreportsIdUploadCompanyLogoPost$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  customGeneratedReportsuploadCompanyLogoApiCustomgeneratedreportsIdUploadCompanyLogoPost(params: {
    id: string;
    body: BodyCustomGeneratedReportsuploadCompanyLogoApiCustomgeneratedreportsIdUploadCompanyLogoPost
  }): Observable<any> {

    return this.customGeneratedReportsuploadCompanyLogoApiCustomgeneratedreportsIdUploadCompanyLogoPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation customGeneratedReportsremoveCompanyLogoDocApiCustomgeneratedreportsIdRemoveCompanyLogoDocPost
   */
  static readonly CustomGeneratedReportsremoveCompanyLogoDocApiCustomgeneratedreportsIdRemoveCompanyLogoDocPostPath = '/api/customgeneratedreports/{id}/removeCompanyLogoDoc';

  /**
   * Customgeneratedreportsremovecompanylogodoc.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `customGeneratedReportsremoveCompanyLogoDocApiCustomgeneratedreportsIdRemoveCompanyLogoDocPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  customGeneratedReportsremoveCompanyLogoDocApiCustomgeneratedreportsIdRemoveCompanyLogoDocPost$Response(params: {
    id: string;
    body: CustomGeneratedReportsremoveCompanyLogoDocParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CustomGeneratedReportsService.CustomGeneratedReportsremoveCompanyLogoDocApiCustomgeneratedreportsIdRemoveCompanyLogoDocPostPath, 'post');
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
   * Customgeneratedreportsremovecompanylogodoc.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `customGeneratedReportsremoveCompanyLogoDocApiCustomgeneratedreportsIdRemoveCompanyLogoDocPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  customGeneratedReportsremoveCompanyLogoDocApiCustomgeneratedreportsIdRemoveCompanyLogoDocPost(params: {
    id: string;
    body: CustomGeneratedReportsremoveCompanyLogoDocParams
  }): Observable<any> {

    return this.customGeneratedReportsremoveCompanyLogoDocApiCustomgeneratedreportsIdRemoveCompanyLogoDocPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation customGeneratedReportsgetCompanyLogoDocApiCustomgeneratedreportsIdGetCompanyLogoDocPost
   */
  static readonly CustomGeneratedReportsgetCompanyLogoDocApiCustomgeneratedreportsIdGetCompanyLogoDocPostPath = '/api/customgeneratedreports/{id}/getCompanyLogoDoc';

  /**
   * Customgeneratedreportsgetcompanylogodoc.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `customGeneratedReportsgetCompanyLogoDocApiCustomgeneratedreportsIdGetCompanyLogoDocPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  customGeneratedReportsgetCompanyLogoDocApiCustomgeneratedreportsIdGetCompanyLogoDocPost$Response(params: {
    id: string;
    body: CustomGeneratedReportsgetCompanyLogoDocParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CustomGeneratedReportsService.CustomGeneratedReportsgetCompanyLogoDocApiCustomgeneratedreportsIdGetCompanyLogoDocPostPath, 'post');
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
   * Customgeneratedreportsgetcompanylogodoc.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `customGeneratedReportsgetCompanyLogoDocApiCustomgeneratedreportsIdGetCompanyLogoDocPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  customGeneratedReportsgetCompanyLogoDocApiCustomgeneratedreportsIdGetCompanyLogoDocPost(params: {
    id: string;
    body: CustomGeneratedReportsgetCompanyLogoDocParams
  }): Observable<any> {

    return this.customGeneratedReportsgetCompanyLogoDocApiCustomgeneratedreportsIdGetCompanyLogoDocPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation customGeneratedReportsgetCompanyLogoDocListApiCustomgeneratedreportsGetCompanyLogoDocListPost
   */
  static readonly CustomGeneratedReportsgetCompanyLogoDocListApiCustomgeneratedreportsGetCompanyLogoDocListPostPath = '/api/customgeneratedreports/getCompanyLogoDocList';

  /**
   * Customgeneratedreportsgetcompanylogodoclist.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `customGeneratedReportsgetCompanyLogoDocListApiCustomgeneratedreportsGetCompanyLogoDocListPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  customGeneratedReportsgetCompanyLogoDocListApiCustomgeneratedreportsGetCompanyLogoDocListPost$Response(params: {
    body: CustomGeneratedReportsgetCompanyLogoDocListParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CustomGeneratedReportsService.CustomGeneratedReportsgetCompanyLogoDocListApiCustomgeneratedreportsGetCompanyLogoDocListPostPath, 'post');
    if (params) {
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
   * Customgeneratedreportsgetcompanylogodoclist.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `customGeneratedReportsgetCompanyLogoDocListApiCustomgeneratedreportsGetCompanyLogoDocListPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  customGeneratedReportsgetCompanyLogoDocListApiCustomgeneratedreportsGetCompanyLogoDocListPost(params: {
    body: CustomGeneratedReportsgetCompanyLogoDocListParams
  }): Observable<any> {

    return this.customGeneratedReportsgetCompanyLogoDocListApiCustomgeneratedreportsGetCompanyLogoDocListPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation customGeneratedReportsgenerateReportLinkApiCustomgeneratedreportsIdGenerateReportLinkPost
   */
  static readonly CustomGeneratedReportsgenerateReportLinkApiCustomgeneratedreportsIdGenerateReportLinkPostPath = '/api/customgeneratedreports/{id}/generateReportLink';

  /**
   * Customgeneratedreportsgeneratereportlink.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `customGeneratedReportsgenerateReportLinkApiCustomgeneratedreportsIdGenerateReportLinkPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  customGeneratedReportsgenerateReportLinkApiCustomgeneratedreportsIdGenerateReportLinkPost$Response(params: {
    id: string;
    body: CustomGeneratedReportsgenerateReportLinkParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CustomGeneratedReportsService.CustomGeneratedReportsgenerateReportLinkApiCustomgeneratedreportsIdGenerateReportLinkPostPath, 'post');
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
   * Customgeneratedreportsgeneratereportlink.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `customGeneratedReportsgenerateReportLinkApiCustomgeneratedreportsIdGenerateReportLinkPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  customGeneratedReportsgenerateReportLinkApiCustomgeneratedreportsIdGenerateReportLinkPost(params: {
    id: string;
    body: CustomGeneratedReportsgenerateReportLinkParams
  }): Observable<any> {

    return this.customGeneratedReportsgenerateReportLinkApiCustomgeneratedreportsIdGenerateReportLinkPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation customGeneratedReportsdeleteAllApiCustomgeneratedreportsDeleteAllPost
   */
  static readonly CustomGeneratedReportsdeleteAllApiCustomgeneratedreportsDeleteAllPostPath = '/api/customgeneratedreports/deleteAll';

  /**
   * Customgeneratedreportsdeleteall.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `customGeneratedReportsdeleteAllApiCustomgeneratedreportsDeleteAllPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  customGeneratedReportsdeleteAllApiCustomgeneratedreportsDeleteAllPost$Response(params: {
    body: CustomGeneratedReportsdeleteAllParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CustomGeneratedReportsService.CustomGeneratedReportsdeleteAllApiCustomgeneratedreportsDeleteAllPostPath, 'post');
    if (params) {
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
   * Customgeneratedreportsdeleteall.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `customGeneratedReportsdeleteAllApiCustomgeneratedreportsDeleteAllPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  customGeneratedReportsdeleteAllApiCustomgeneratedreportsDeleteAllPost(params: {
    body: CustomGeneratedReportsdeleteAllParams
  }): Observable<any> {

    return this.customGeneratedReportsdeleteAllApiCustomgeneratedreportsDeleteAllPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
