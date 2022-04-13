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

import { Remediation } from '../models/remediation';
import { RemediationCreate } from '../models/remediation-create';
import { RemediationGetResp } from '../models/remediation-get-resp';
import { RemediationpatchRemediationParams } from '../models/remediationpatch-remediation-params';
import { RemediationsuppressRemediationParams } from '../models/remediationsuppress-remediation-params';

@Injectable({
  providedIn: 'root',
})
export class RemediationService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllApiRemediationGet
   */
  static readonly GetAllApiRemediationGetPath = '/api/remediation/';

  /**
   * Get All.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllApiRemediationGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiRemediationGet$Response(params?: {

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
  }): Observable<StrictHttpResponse<RemediationGetResp>> {

    const rb = new RequestBuilder(this.rootUrl, RemediationService.GetAllApiRemediationGetPath, 'get');
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
        return r as StrictHttpResponse<RemediationGetResp>;
      })
    );
  }

  /**
   * Get All.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllApiRemediationGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiRemediationGet(params?: {

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
  }): Observable<RemediationGetResp> {

    return this.getAllApiRemediationGet$Response(params).pipe(
      map((r: StrictHttpResponse<RemediationGetResp>) => r.body as RemediationGetResp)
    );
  }

  /**
   * Path part for operation updateApiRemediationPut
   */
  static readonly UpdateApiRemediationPutPath = '/api/remediation/';

  /**
   * Update.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateApiRemediationPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiRemediationPut$Response(params: {
    body: Remediation
  }): Observable<StrictHttpResponse<Remediation>> {

    const rb = new RequestBuilder(this.rootUrl, RemediationService.UpdateApiRemediationPutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Remediation>;
      })
    );
  }

  /**
   * Update.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateApiRemediationPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiRemediationPut(params: {
    body: Remediation
  }): Observable<Remediation> {

    return this.updateApiRemediationPut$Response(params).pipe(
      map((r: StrictHttpResponse<Remediation>) => r.body as Remediation)
    );
  }

  /**
   * Path part for operation createApiRemediationPost
   */
  static readonly CreateApiRemediationPostPath = '/api/remediation/';

  /**
   * Create.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createApiRemediationPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiRemediationPost$Response(params: {
    body: RemediationCreate
  }): Observable<StrictHttpResponse<Remediation>> {

    const rb = new RequestBuilder(this.rootUrl, RemediationService.CreateApiRemediationPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Remediation>;
      })
    );
  }

  /**
   * Create.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createApiRemediationPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiRemediationPost(params: {
    body: RemediationCreate
  }): Observable<Remediation> {

    return this.createApiRemediationPost$Response(params).pipe(
      map((r: StrictHttpResponse<Remediation>) => r.body as Remediation)
    );
  }

  /**
   * Path part for operation getApiRemediationIdGet
   */
  static readonly GetApiRemediationIdGetPath = '/api/remediation/{id}';

  /**
   * Get.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiRemediationIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiRemediationIdGet$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<Remediation>> {

    const rb = new RequestBuilder(this.rootUrl, RemediationService.GetApiRemediationIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Remediation>;
      })
    );
  }

  /**
   * Get.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiRemediationIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiRemediationIdGet(params: {
    id: string;
  }): Observable<Remediation> {

    return this.getApiRemediationIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<Remediation>) => r.body as Remediation)
    );
  }

  /**
   * Path part for operation deleteApiRemediationIdDelete
   */
  static readonly DeleteApiRemediationIdDeletePath = '/api/remediation/{id}';

  /**
   * Delete.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteApiRemediationIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiRemediationIdDelete$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, RemediationService.DeleteApiRemediationIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `deleteApiRemediationIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiRemediationIdDelete(params: {
    id: string;
  }): Observable<any> {

    return this.deleteApiRemediationIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation remediationsuppressRemediationApiRemediationIdSuppressRemediationPost
   */
  static readonly RemediationsuppressRemediationApiRemediationIdSuppressRemediationPostPath = '/api/remediation/{id}/suppressRemediation';

  /**
   * Remediationsuppressremediation.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `remediationsuppressRemediationApiRemediationIdSuppressRemediationPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  remediationsuppressRemediationApiRemediationIdSuppressRemediationPost$Response(params: {
    id: string;
    body: RemediationsuppressRemediationParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, RemediationService.RemediationsuppressRemediationApiRemediationIdSuppressRemediationPostPath, 'post');
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
   * Remediationsuppressremediation.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `remediationsuppressRemediationApiRemediationIdSuppressRemediationPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  remediationsuppressRemediationApiRemediationIdSuppressRemediationPost(params: {
    id: string;
    body: RemediationsuppressRemediationParams
  }): Observable<any> {

    return this.remediationsuppressRemediationApiRemediationIdSuppressRemediationPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation remediationpatchRemediationApiRemediationIdPatchRemediationPost
   */
  static readonly RemediationpatchRemediationApiRemediationIdPatchRemediationPostPath = '/api/remediation/{id}/patchRemediation';

  /**
   * Remediationpatchremediation.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `remediationpatchRemediationApiRemediationIdPatchRemediationPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  remediationpatchRemediationApiRemediationIdPatchRemediationPost$Response(params: {
    id: string;
    body: RemediationpatchRemediationParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, RemediationService.RemediationpatchRemediationApiRemediationIdPatchRemediationPostPath, 'post');
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
   * Remediationpatchremediation.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `remediationpatchRemediationApiRemediationIdPatchRemediationPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  remediationpatchRemediationApiRemediationIdPatchRemediationPost(params: {
    id: string;
    body: RemediationpatchRemediationParams
  }): Observable<any> {

    return this.remediationpatchRemediationApiRemediationIdPatchRemediationPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
