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

import { Diagnostics } from '../models/diagnostics';
import { DiagnosticsCreate } from '../models/diagnostics-create';
import { DiagnosticsGetResp } from '../models/diagnostics-get-resp';

@Injectable({
  providedIn: 'root',
})
export class DiagnosticsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllApiDiagnosticsGet
   */
  static readonly GetAllApiDiagnosticsGetPath = '/api/diagnostics/';

  /**
   * Get All.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllApiDiagnosticsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiDiagnosticsGet$Response(params?: {

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
  }): Observable<StrictHttpResponse<DiagnosticsGetResp>> {

    const rb = new RequestBuilder(this.rootUrl, DiagnosticsService.GetAllApiDiagnosticsGetPath, 'get');
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
        return r as StrictHttpResponse<DiagnosticsGetResp>;
      })
    );
  }

  /**
   * Get All.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllApiDiagnosticsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiDiagnosticsGet(params?: {

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
  }): Observable<DiagnosticsGetResp> {

    return this.getAllApiDiagnosticsGet$Response(params).pipe(
      map((r: StrictHttpResponse<DiagnosticsGetResp>) => r.body as DiagnosticsGetResp)
    );
  }

  /**
   * Path part for operation updateApiDiagnosticsPut
   */
  static readonly UpdateApiDiagnosticsPutPath = '/api/diagnostics/';

  /**
   * Update.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateApiDiagnosticsPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiDiagnosticsPut$Response(params: {
    body: Diagnostics
  }): Observable<StrictHttpResponse<Diagnostics>> {

    const rb = new RequestBuilder(this.rootUrl, DiagnosticsService.UpdateApiDiagnosticsPutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Diagnostics>;
      })
    );
  }

  /**
   * Update.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateApiDiagnosticsPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiDiagnosticsPut(params: {
    body: Diagnostics
  }): Observable<Diagnostics> {

    return this.updateApiDiagnosticsPut$Response(params).pipe(
      map((r: StrictHttpResponse<Diagnostics>) => r.body as Diagnostics)
    );
  }

  /**
   * Path part for operation createApiDiagnosticsPost
   */
  static readonly CreateApiDiagnosticsPostPath = '/api/diagnostics/';

  /**
   * Create.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createApiDiagnosticsPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiDiagnosticsPost$Response(params: {
    body: DiagnosticsCreate
  }): Observable<StrictHttpResponse<Diagnostics>> {

    const rb = new RequestBuilder(this.rootUrl, DiagnosticsService.CreateApiDiagnosticsPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Diagnostics>;
      })
    );
  }

  /**
   * Create.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createApiDiagnosticsPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiDiagnosticsPost(params: {
    body: DiagnosticsCreate
  }): Observable<Diagnostics> {

    return this.createApiDiagnosticsPost$Response(params).pipe(
      map((r: StrictHttpResponse<Diagnostics>) => r.body as Diagnostics)
    );
  }

  /**
   * Path part for operation getApiDiagnosticsIdGet
   */
  static readonly GetApiDiagnosticsIdGetPath = '/api/diagnostics/{id}';

  /**
   * Get.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiDiagnosticsIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiDiagnosticsIdGet$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<Diagnostics>> {

    const rb = new RequestBuilder(this.rootUrl, DiagnosticsService.GetApiDiagnosticsIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Diagnostics>;
      })
    );
  }

  /**
   * Get.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiDiagnosticsIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiDiagnosticsIdGet(params: {
    id: string;
  }): Observable<Diagnostics> {

    return this.getApiDiagnosticsIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<Diagnostics>) => r.body as Diagnostics)
    );
  }

  /**
   * Path part for operation deleteApiDiagnosticsIdDelete
   */
  static readonly DeleteApiDiagnosticsIdDeletePath = '/api/diagnostics/{id}';

  /**
   * Delete.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteApiDiagnosticsIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiDiagnosticsIdDelete$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, DiagnosticsService.DeleteApiDiagnosticsIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `deleteApiDiagnosticsIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiDiagnosticsIdDelete(params: {
    id: string;
  }): Observable<any> {

    return this.deleteApiDiagnosticsIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
