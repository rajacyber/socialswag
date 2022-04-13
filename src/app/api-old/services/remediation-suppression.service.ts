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

import { RemediationSuppression } from '../models/remediation-suppression';
import { RemediationSuppressionCreate } from '../models/remediation-suppression-create';
import { RemediationSuppressionGetResp } from '../models/remediation-suppression-get-resp';

@Injectable({
  providedIn: 'root',
})
export class RemediationSuppressionService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllApiRemediationsuppressionGet
   */
  static readonly GetAllApiRemediationsuppressionGetPath = '/api/remediationsuppression/';

  /**
   * Get All.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllApiRemediationsuppressionGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiRemediationsuppressionGet$Response(params?: {

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
  }): Observable<StrictHttpResponse<RemediationSuppressionGetResp>> {

    const rb = new RequestBuilder(this.rootUrl, RemediationSuppressionService.GetAllApiRemediationsuppressionGetPath, 'get');
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
        return r as StrictHttpResponse<RemediationSuppressionGetResp>;
      })
    );
  }

  /**
   * Get All.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllApiRemediationsuppressionGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiRemediationsuppressionGet(params?: {

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
  }): Observable<RemediationSuppressionGetResp> {

    return this.getAllApiRemediationsuppressionGet$Response(params).pipe(
      map((r: StrictHttpResponse<RemediationSuppressionGetResp>) => r.body as RemediationSuppressionGetResp)
    );
  }

  /**
   * Path part for operation updateApiRemediationsuppressionPut
   */
  static readonly UpdateApiRemediationsuppressionPutPath = '/api/remediationsuppression/';

  /**
   * Update.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateApiRemediationsuppressionPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiRemediationsuppressionPut$Response(params: {
    body: RemediationSuppression
  }): Observable<StrictHttpResponse<RemediationSuppression>> {

    const rb = new RequestBuilder(this.rootUrl, RemediationSuppressionService.UpdateApiRemediationsuppressionPutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<RemediationSuppression>;
      })
    );
  }

  /**
   * Update.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateApiRemediationsuppressionPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiRemediationsuppressionPut(params: {
    body: RemediationSuppression
  }): Observable<RemediationSuppression> {

    return this.updateApiRemediationsuppressionPut$Response(params).pipe(
      map((r: StrictHttpResponse<RemediationSuppression>) => r.body as RemediationSuppression)
    );
  }

  /**
   * Path part for operation createApiRemediationsuppressionPost
   */
  static readonly CreateApiRemediationsuppressionPostPath = '/api/remediationsuppression/';

  /**
   * Create.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createApiRemediationsuppressionPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiRemediationsuppressionPost$Response(params: {
    body: RemediationSuppressionCreate
  }): Observable<StrictHttpResponse<RemediationSuppression>> {

    const rb = new RequestBuilder(this.rootUrl, RemediationSuppressionService.CreateApiRemediationsuppressionPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<RemediationSuppression>;
      })
    );
  }

  /**
   * Create.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createApiRemediationsuppressionPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiRemediationsuppressionPost(params: {
    body: RemediationSuppressionCreate
  }): Observable<RemediationSuppression> {

    return this.createApiRemediationsuppressionPost$Response(params).pipe(
      map((r: StrictHttpResponse<RemediationSuppression>) => r.body as RemediationSuppression)
    );
  }

  /**
   * Path part for operation getApiRemediationsuppressionIdGet
   */
  static readonly GetApiRemediationsuppressionIdGetPath = '/api/remediationsuppression/{id}';

  /**
   * Get.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiRemediationsuppressionIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiRemediationsuppressionIdGet$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<RemediationSuppression>> {

    const rb = new RequestBuilder(this.rootUrl, RemediationSuppressionService.GetApiRemediationsuppressionIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<RemediationSuppression>;
      })
    );
  }

  /**
   * Get.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiRemediationsuppressionIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiRemediationsuppressionIdGet(params: {
    id: string;
  }): Observable<RemediationSuppression> {

    return this.getApiRemediationsuppressionIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<RemediationSuppression>) => r.body as RemediationSuppression)
    );
  }

  /**
   * Path part for operation deleteApiRemediationsuppressionIdDelete
   */
  static readonly DeleteApiRemediationsuppressionIdDeletePath = '/api/remediationsuppression/{id}';

  /**
   * Delete.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteApiRemediationsuppressionIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiRemediationsuppressionIdDelete$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, RemediationSuppressionService.DeleteApiRemediationsuppressionIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `deleteApiRemediationsuppressionIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiRemediationsuppressionIdDelete(params: {
    id: string;
  }): Observable<any> {

    return this.deleteApiRemediationsuppressionIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
