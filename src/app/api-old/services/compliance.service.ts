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

import { Compliance } from '../models/compliance';
import { ComplianceCreate } from '../models/compliance-create';
import { ComplianceGetResp } from '../models/compliance-get-resp';

@Injectable({
  providedIn: 'root',
})
export class ComplianceService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllApiComplianceGet
   */
  static readonly GetAllApiComplianceGetPath = '/api/compliance/';

  /**
   * Get All.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllApiComplianceGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiComplianceGet$Response(params?: {

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
  }): Observable<StrictHttpResponse<ComplianceGetResp>> {

    const rb = new RequestBuilder(this.rootUrl, ComplianceService.GetAllApiComplianceGetPath, 'get');
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
        return r as StrictHttpResponse<ComplianceGetResp>;
      })
    );
  }

  /**
   * Get All.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllApiComplianceGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiComplianceGet(params?: {

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
  }): Observable<ComplianceGetResp> {

    return this.getAllApiComplianceGet$Response(params).pipe(
      map((r: StrictHttpResponse<ComplianceGetResp>) => r.body as ComplianceGetResp)
    );
  }

  /**
   * Path part for operation updateApiCompliancePut
   */
  static readonly UpdateApiCompliancePutPath = '/api/compliance/';

  /**
   * Update.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateApiCompliancePut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiCompliancePut$Response(params: {
    body: Compliance
  }): Observable<StrictHttpResponse<Compliance>> {

    const rb = new RequestBuilder(this.rootUrl, ComplianceService.UpdateApiCompliancePutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Compliance>;
      })
    );
  }

  /**
   * Update.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateApiCompliancePut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiCompliancePut(params: {
    body: Compliance
  }): Observable<Compliance> {

    return this.updateApiCompliancePut$Response(params).pipe(
      map((r: StrictHttpResponse<Compliance>) => r.body as Compliance)
    );
  }

  /**
   * Path part for operation createApiCompliancePost
   */
  static readonly CreateApiCompliancePostPath = '/api/compliance/';

  /**
   * Create.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createApiCompliancePost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiCompliancePost$Response(params: {
    body: ComplianceCreate
  }): Observable<StrictHttpResponse<Compliance>> {

    const rb = new RequestBuilder(this.rootUrl, ComplianceService.CreateApiCompliancePostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Compliance>;
      })
    );
  }

  /**
   * Create.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createApiCompliancePost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiCompliancePost(params: {
    body: ComplianceCreate
  }): Observable<Compliance> {

    return this.createApiCompliancePost$Response(params).pipe(
      map((r: StrictHttpResponse<Compliance>) => r.body as Compliance)
    );
  }

  /**
   * Path part for operation getApiComplianceIdGet
   */
  static readonly GetApiComplianceIdGetPath = '/api/compliance/{id}';

  /**
   * Get.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiComplianceIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiComplianceIdGet$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<Compliance>> {

    const rb = new RequestBuilder(this.rootUrl, ComplianceService.GetApiComplianceIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Compliance>;
      })
    );
  }

  /**
   * Get.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiComplianceIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiComplianceIdGet(params: {
    id: string;
  }): Observable<Compliance> {

    return this.getApiComplianceIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<Compliance>) => r.body as Compliance)
    );
  }

  /**
   * Path part for operation deleteApiComplianceIdDelete
   */
  static readonly DeleteApiComplianceIdDeletePath = '/api/compliance/{id}';

  /**
   * Delete.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteApiComplianceIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiComplianceIdDelete$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, ComplianceService.DeleteApiComplianceIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `deleteApiComplianceIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiComplianceIdDelete(params: {
    id: string;
  }): Observable<any> {

    return this.deleteApiComplianceIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
