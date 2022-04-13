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

import { ApplicationBaseline } from '../models/application-baseline';
import { ApplicationBaselineCreate } from '../models/application-baseline-create';
import { ApplicationBaselineGetResp } from '../models/application-baseline-get-resp';
import { ApplicationBaselinegetApplicationBaselineParams } from '../models/application-baselineget-application-baseline-params';
import { ApplicationBaselinegetListOfOsParams } from '../models/application-baselineget-list-of-os-params';

@Injectable({
  providedIn: 'root',
})
export class ApplicationBaselineService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllApiApplicationbaselineGet
   */
  static readonly GetAllApiApplicationbaselineGetPath = '/api/applicationbaseline/';

  /**
   * Get All.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllApiApplicationbaselineGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiApplicationbaselineGet$Response(params?: {

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
  }): Observable<StrictHttpResponse<ApplicationBaselineGetResp>> {

    const rb = new RequestBuilder(this.rootUrl, ApplicationBaselineService.GetAllApiApplicationbaselineGetPath, 'get');
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
        return r as StrictHttpResponse<ApplicationBaselineGetResp>;
      })
    );
  }

  /**
   * Get All.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllApiApplicationbaselineGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiApplicationbaselineGet(params?: {

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
  }): Observable<ApplicationBaselineGetResp> {

    return this.getAllApiApplicationbaselineGet$Response(params).pipe(
      map((r: StrictHttpResponse<ApplicationBaselineGetResp>) => r.body as ApplicationBaselineGetResp)
    );
  }

  /**
   * Path part for operation updateApiApplicationbaselinePut
   */
  static readonly UpdateApiApplicationbaselinePutPath = '/api/applicationbaseline/';

  /**
   * Update.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateApiApplicationbaselinePut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiApplicationbaselinePut$Response(params: {
    body: ApplicationBaseline
  }): Observable<StrictHttpResponse<ApplicationBaseline>> {

    const rb = new RequestBuilder(this.rootUrl, ApplicationBaselineService.UpdateApiApplicationbaselinePutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ApplicationBaseline>;
      })
    );
  }

  /**
   * Update.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateApiApplicationbaselinePut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiApplicationbaselinePut(params: {
    body: ApplicationBaseline
  }): Observable<ApplicationBaseline> {

    return this.updateApiApplicationbaselinePut$Response(params).pipe(
      map((r: StrictHttpResponse<ApplicationBaseline>) => r.body as ApplicationBaseline)
    );
  }

  /**
   * Path part for operation createApiApplicationbaselinePost
   */
  static readonly CreateApiApplicationbaselinePostPath = '/api/applicationbaseline/';

  /**
   * Create.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createApiApplicationbaselinePost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiApplicationbaselinePost$Response(params: {
    body: ApplicationBaselineCreate
  }): Observable<StrictHttpResponse<ApplicationBaseline>> {

    const rb = new RequestBuilder(this.rootUrl, ApplicationBaselineService.CreateApiApplicationbaselinePostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ApplicationBaseline>;
      })
    );
  }

  /**
   * Create.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createApiApplicationbaselinePost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiApplicationbaselinePost(params: {
    body: ApplicationBaselineCreate
  }): Observable<ApplicationBaseline> {

    return this.createApiApplicationbaselinePost$Response(params).pipe(
      map((r: StrictHttpResponse<ApplicationBaseline>) => r.body as ApplicationBaseline)
    );
  }

  /**
   * Path part for operation getApiApplicationbaselineIdGet
   */
  static readonly GetApiApplicationbaselineIdGetPath = '/api/applicationbaseline/{id}';

  /**
   * Get.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiApplicationbaselineIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiApplicationbaselineIdGet$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<ApplicationBaseline>> {

    const rb = new RequestBuilder(this.rootUrl, ApplicationBaselineService.GetApiApplicationbaselineIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ApplicationBaseline>;
      })
    );
  }

  /**
   * Get.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiApplicationbaselineIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiApplicationbaselineIdGet(params: {
    id: string;
  }): Observable<ApplicationBaseline> {

    return this.getApiApplicationbaselineIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<ApplicationBaseline>) => r.body as ApplicationBaseline)
    );
  }

  /**
   * Path part for operation deleteApiApplicationbaselineIdDelete
   */
  static readonly DeleteApiApplicationbaselineIdDeletePath = '/api/applicationbaseline/{id}';

  /**
   * Delete.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteApiApplicationbaselineIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiApplicationbaselineIdDelete$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, ApplicationBaselineService.DeleteApiApplicationbaselineIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `deleteApiApplicationbaselineIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiApplicationbaselineIdDelete(params: {
    id: string;
  }): Observable<any> {

    return this.deleteApiApplicationbaselineIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation applicationBaselinegetApplicationBaselineApiApplicationbaselineIdGetApplicationBaselinePost
   */
  static readonly ApplicationBaselinegetApplicationBaselineApiApplicationbaselineIdGetApplicationBaselinePostPath = '/api/applicationbaseline/{id}/getApplicationBaseline';

  /**
   * Applicationbaselinegetapplicationbaseline.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `applicationBaselinegetApplicationBaselineApiApplicationbaselineIdGetApplicationBaselinePost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  applicationBaselinegetApplicationBaselineApiApplicationbaselineIdGetApplicationBaselinePost$Response(params: {
    id: string;
    body: ApplicationBaselinegetApplicationBaselineParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, ApplicationBaselineService.ApplicationBaselinegetApplicationBaselineApiApplicationbaselineIdGetApplicationBaselinePostPath, 'post');
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
   * Applicationbaselinegetapplicationbaseline.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `applicationBaselinegetApplicationBaselineApiApplicationbaselineIdGetApplicationBaselinePost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  applicationBaselinegetApplicationBaselineApiApplicationbaselineIdGetApplicationBaselinePost(params: {
    id: string;
    body: ApplicationBaselinegetApplicationBaselineParams
  }): Observable<any> {

    return this.applicationBaselinegetApplicationBaselineApiApplicationbaselineIdGetApplicationBaselinePost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation applicationBaselinegetListOfOsApiApplicationbaselineIdGetListOfOsPost
   */
  static readonly ApplicationBaselinegetListOfOsApiApplicationbaselineIdGetListOfOsPostPath = '/api/applicationbaseline/{id}/getListOfOS';

  /**
   * Applicationbaselinegetlistofos.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `applicationBaselinegetListOfOsApiApplicationbaselineIdGetListOfOsPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  applicationBaselinegetListOfOsApiApplicationbaselineIdGetListOfOsPost$Response(params: {
    id: string;
    body: ApplicationBaselinegetListOfOsParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, ApplicationBaselineService.ApplicationBaselinegetListOfOsApiApplicationbaselineIdGetListOfOsPostPath, 'post');
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
   * Applicationbaselinegetlistofos.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `applicationBaselinegetListOfOsApiApplicationbaselineIdGetListOfOsPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  applicationBaselinegetListOfOsApiApplicationbaselineIdGetListOfOsPost(params: {
    id: string;
    body: ApplicationBaselinegetListOfOsParams
  }): Observable<any> {

    return this.applicationBaselinegetListOfOsApiApplicationbaselineIdGetListOfOsPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
