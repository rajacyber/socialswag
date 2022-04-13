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

import { ComplianceChecks } from '../models/compliance-checks';
import { ComplianceChecksCreate } from '../models/compliance-checks-create';
import { ComplianceChecksGetResp } from '../models/compliance-checks-get-resp';

@Injectable({
  providedIn: 'root',
})
export class ComplianceChecksService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllApiCompliancechecksGet
   */
  static readonly GetAllApiCompliancechecksGetPath = '/api/compliancechecks/';

  /**
   * Get All.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllApiCompliancechecksGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiCompliancechecksGet$Response(params?: {

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
  }): Observable<StrictHttpResponse<ComplianceChecksGetResp>> {

    const rb = new RequestBuilder(this.rootUrl, ComplianceChecksService.GetAllApiCompliancechecksGetPath, 'get');
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
        return r as StrictHttpResponse<ComplianceChecksGetResp>;
      })
    );
  }

  /**
   * Get All.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllApiCompliancechecksGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiCompliancechecksGet(params?: {

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
  }): Observable<ComplianceChecksGetResp> {

    return this.getAllApiCompliancechecksGet$Response(params).pipe(
      map((r: StrictHttpResponse<ComplianceChecksGetResp>) => r.body as ComplianceChecksGetResp)
    );
  }

  /**
   * Path part for operation updateApiCompliancechecksPut
   */
  static readonly UpdateApiCompliancechecksPutPath = '/api/compliancechecks/';

  /**
   * Update.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateApiCompliancechecksPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiCompliancechecksPut$Response(params: {
    body: ComplianceChecks
  }): Observable<StrictHttpResponse<ComplianceChecks>> {

    const rb = new RequestBuilder(this.rootUrl, ComplianceChecksService.UpdateApiCompliancechecksPutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ComplianceChecks>;
      })
    );
  }

  /**
   * Update.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateApiCompliancechecksPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiCompliancechecksPut(params: {
    body: ComplianceChecks
  }): Observable<ComplianceChecks> {

    return this.updateApiCompliancechecksPut$Response(params).pipe(
      map((r: StrictHttpResponse<ComplianceChecks>) => r.body as ComplianceChecks)
    );
  }

  /**
   * Path part for operation createApiCompliancechecksPost
   */
  static readonly CreateApiCompliancechecksPostPath = '/api/compliancechecks/';

  /**
   * Create.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createApiCompliancechecksPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiCompliancechecksPost$Response(params: {
    body: ComplianceChecksCreate
  }): Observable<StrictHttpResponse<ComplianceChecks>> {

    const rb = new RequestBuilder(this.rootUrl, ComplianceChecksService.CreateApiCompliancechecksPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ComplianceChecks>;
      })
    );
  }

  /**
   * Create.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createApiCompliancechecksPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiCompliancechecksPost(params: {
    body: ComplianceChecksCreate
  }): Observable<ComplianceChecks> {

    return this.createApiCompliancechecksPost$Response(params).pipe(
      map((r: StrictHttpResponse<ComplianceChecks>) => r.body as ComplianceChecks)
    );
  }

  /**
   * Path part for operation getApiCompliancechecksIdGet
   */
  static readonly GetApiCompliancechecksIdGetPath = '/api/compliancechecks/{id}';

  /**
   * Get.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiCompliancechecksIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiCompliancechecksIdGet$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<ComplianceChecks>> {

    const rb = new RequestBuilder(this.rootUrl, ComplianceChecksService.GetApiCompliancechecksIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ComplianceChecks>;
      })
    );
  }

  /**
   * Get.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiCompliancechecksIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiCompliancechecksIdGet(params: {
    id: string;
  }): Observable<ComplianceChecks> {

    return this.getApiCompliancechecksIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<ComplianceChecks>) => r.body as ComplianceChecks)
    );
  }

  /**
   * Path part for operation deleteApiCompliancechecksIdDelete
   */
  static readonly DeleteApiCompliancechecksIdDeletePath = '/api/compliancechecks/{id}';

  /**
   * Delete.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteApiCompliancechecksIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiCompliancechecksIdDelete$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, ComplianceChecksService.DeleteApiCompliancechecksIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `deleteApiCompliancechecksIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiCompliancechecksIdDelete(params: {
    id: string;
  }): Observable<any> {

    return this.deleteApiCompliancechecksIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
