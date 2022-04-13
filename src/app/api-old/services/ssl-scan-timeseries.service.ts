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

import { SslScanTimeseries } from '../models/ssl-scan-timeseries';
import { SslScanTimeseriesCreate } from '../models/ssl-scan-timeseries-create';
import { SslScanTimeseriesGetResp } from '../models/ssl-scan-timeseries-get-resp';

@Injectable({
  providedIn: 'root',
})
export class SslScanTimeseriesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllApiSslscantimeseriesGet
   */
  static readonly GetAllApiSslscantimeseriesGetPath = '/api/sslscantimeseries/';

  /**
   * Get All.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllApiSslscantimeseriesGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiSslscantimeseriesGet$Response(params?: {

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
  }): Observable<StrictHttpResponse<SslScanTimeseriesGetResp>> {

    const rb = new RequestBuilder(this.rootUrl, SslScanTimeseriesService.GetAllApiSslscantimeseriesGetPath, 'get');
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
        return r as StrictHttpResponse<SslScanTimeseriesGetResp>;
      })
    );
  }

  /**
   * Get All.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllApiSslscantimeseriesGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiSslscantimeseriesGet(params?: {

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
  }): Observable<SslScanTimeseriesGetResp> {

    return this.getAllApiSslscantimeseriesGet$Response(params).pipe(
      map((r: StrictHttpResponse<SslScanTimeseriesGetResp>) => r.body as SslScanTimeseriesGetResp)
    );
  }

  /**
   * Path part for operation updateApiSslscantimeseriesPut
   */
  static readonly UpdateApiSslscantimeseriesPutPath = '/api/sslscantimeseries/';

  /**
   * Update.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateApiSslscantimeseriesPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiSslscantimeseriesPut$Response(params: {
    body: SslScanTimeseries
  }): Observable<StrictHttpResponse<SslScanTimeseries>> {

    const rb = new RequestBuilder(this.rootUrl, SslScanTimeseriesService.UpdateApiSslscantimeseriesPutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SslScanTimeseries>;
      })
    );
  }

  /**
   * Update.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateApiSslscantimeseriesPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiSslscantimeseriesPut(params: {
    body: SslScanTimeseries
  }): Observable<SslScanTimeseries> {

    return this.updateApiSslscantimeseriesPut$Response(params).pipe(
      map((r: StrictHttpResponse<SslScanTimeseries>) => r.body as SslScanTimeseries)
    );
  }

  /**
   * Path part for operation createApiSslscantimeseriesPost
   */
  static readonly CreateApiSslscantimeseriesPostPath = '/api/sslscantimeseries/';

  /**
   * Create.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createApiSslscantimeseriesPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiSslscantimeseriesPost$Response(params: {
    body: SslScanTimeseriesCreate
  }): Observable<StrictHttpResponse<SslScanTimeseries>> {

    const rb = new RequestBuilder(this.rootUrl, SslScanTimeseriesService.CreateApiSslscantimeseriesPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SslScanTimeseries>;
      })
    );
  }

  /**
   * Create.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createApiSslscantimeseriesPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiSslscantimeseriesPost(params: {
    body: SslScanTimeseriesCreate
  }): Observable<SslScanTimeseries> {

    return this.createApiSslscantimeseriesPost$Response(params).pipe(
      map((r: StrictHttpResponse<SslScanTimeseries>) => r.body as SslScanTimeseries)
    );
  }

  /**
   * Path part for operation getApiSslscantimeseriesIdGet
   */
  static readonly GetApiSslscantimeseriesIdGetPath = '/api/sslscantimeseries/{id}';

  /**
   * Get.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiSslscantimeseriesIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiSslscantimeseriesIdGet$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<SslScanTimeseries>> {

    const rb = new RequestBuilder(this.rootUrl, SslScanTimeseriesService.GetApiSslscantimeseriesIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SslScanTimeseries>;
      })
    );
  }

  /**
   * Get.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiSslscantimeseriesIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiSslscantimeseriesIdGet(params: {
    id: string;
  }): Observable<SslScanTimeseries> {

    return this.getApiSslscantimeseriesIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<SslScanTimeseries>) => r.body as SslScanTimeseries)
    );
  }

  /**
   * Path part for operation deleteApiSslscantimeseriesIdDelete
   */
  static readonly DeleteApiSslscantimeseriesIdDeletePath = '/api/sslscantimeseries/{id}';

  /**
   * Delete.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteApiSslscantimeseriesIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiSslscantimeseriesIdDelete$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, SslScanTimeseriesService.DeleteApiSslscantimeseriesIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `deleteApiSslscantimeseriesIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiSslscantimeseriesIdDelete(params: {
    id: string;
  }): Observable<any> {

    return this.deleteApiSslscantimeseriesIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
