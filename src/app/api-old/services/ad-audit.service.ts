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

import { AdAudit } from '../models/ad-audit';
import { AdAuditCreate } from '../models/ad-audit-create';
import { AdAuditGetResp } from '../models/ad-audit-get-resp';
import { AdAuditsavedataParams } from '../models/ad-auditsavedata-params';

@Injectable({
  providedIn: 'root',
})
export class AdAuditService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllApiAdauditGet
   */
  static readonly GetAllApiAdauditGetPath = '/api/adaudit/';

  /**
   * Get All.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllApiAdauditGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiAdauditGet$Response(params?: {

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
  }): Observable<StrictHttpResponse<AdAuditGetResp>> {

    const rb = new RequestBuilder(this.rootUrl, AdAuditService.GetAllApiAdauditGetPath, 'get');
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
        return r as StrictHttpResponse<AdAuditGetResp>;
      })
    );
  }

  /**
   * Get All.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllApiAdauditGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiAdauditGet(params?: {

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
  }): Observable<AdAuditGetResp> {

    return this.getAllApiAdauditGet$Response(params).pipe(
      map((r: StrictHttpResponse<AdAuditGetResp>) => r.body as AdAuditGetResp)
    );
  }

  /**
   * Path part for operation updateApiAdauditPut
   */
  static readonly UpdateApiAdauditPutPath = '/api/adaudit/';

  /**
   * Update.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateApiAdauditPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiAdauditPut$Response(params: {
    body: AdAudit
  }): Observable<StrictHttpResponse<AdAudit>> {

    const rb = new RequestBuilder(this.rootUrl, AdAuditService.UpdateApiAdauditPutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AdAudit>;
      })
    );
  }

  /**
   * Update.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateApiAdauditPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiAdauditPut(params: {
    body: AdAudit
  }): Observable<AdAudit> {

    return this.updateApiAdauditPut$Response(params).pipe(
      map((r: StrictHttpResponse<AdAudit>) => r.body as AdAudit)
    );
  }

  /**
   * Path part for operation createApiAdauditPost
   */
  static readonly CreateApiAdauditPostPath = '/api/adaudit/';

  /**
   * Create.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createApiAdauditPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiAdauditPost$Response(params: {
    body: AdAuditCreate
  }): Observable<StrictHttpResponse<AdAudit>> {

    const rb = new RequestBuilder(this.rootUrl, AdAuditService.CreateApiAdauditPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AdAudit>;
      })
    );
  }

  /**
   * Create.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createApiAdauditPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiAdauditPost(params: {
    body: AdAuditCreate
  }): Observable<AdAudit> {

    return this.createApiAdauditPost$Response(params).pipe(
      map((r: StrictHttpResponse<AdAudit>) => r.body as AdAudit)
    );
  }

  /**
   * Path part for operation getApiAdauditIdGet
   */
  static readonly GetApiAdauditIdGetPath = '/api/adaudit/{id}';

  /**
   * Get.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiAdauditIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiAdauditIdGet$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<AdAudit>> {

    const rb = new RequestBuilder(this.rootUrl, AdAuditService.GetApiAdauditIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AdAudit>;
      })
    );
  }

  /**
   * Get.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiAdauditIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiAdauditIdGet(params: {
    id: string;
  }): Observable<AdAudit> {

    return this.getApiAdauditIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<AdAudit>) => r.body as AdAudit)
    );
  }

  /**
   * Path part for operation deleteApiAdauditIdDelete
   */
  static readonly DeleteApiAdauditIdDeletePath = '/api/adaudit/{id}';

  /**
   * Delete.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteApiAdauditIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiAdauditIdDelete$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, AdAuditService.DeleteApiAdauditIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `deleteApiAdauditIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiAdauditIdDelete(params: {
    id: string;
  }): Observable<any> {

    return this.deleteApiAdauditIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation adAuditsavedataApiAdauditIdSavedataPost
   */
  static readonly AdAuditsavedataApiAdauditIdSavedataPostPath = '/api/adaudit/{id}/savedata';

  /**
   * Adauditsavedata.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `adAuditsavedataApiAdauditIdSavedataPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  adAuditsavedataApiAdauditIdSavedataPost$Response(params: {
    id: string;
    body: AdAuditsavedataParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, AdAuditService.AdAuditsavedataApiAdauditIdSavedataPostPath, 'post');
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
   * Adauditsavedata.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `adAuditsavedataApiAdauditIdSavedataPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  adAuditsavedataApiAdauditIdSavedataPost(params: {
    id: string;
    body: AdAuditsavedataParams
  }): Observable<any> {

    return this.adAuditsavedataApiAdauditIdSavedataPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
