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

import { AssetTimeStats } from '../models/asset-time-stats';
import { AssetTimeStatsCreate } from '../models/asset-time-stats-create';
import { AssetTimeStatsGetResp } from '../models/asset-time-stats-get-resp';

@Injectable({
  providedIn: 'root',
})
export class AssetTimeStatsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllApiAssettimestatsGet
   */
  static readonly GetAllApiAssettimestatsGetPath = '/api/assettimestats/';

  /**
   * Get All.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllApiAssettimestatsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiAssettimestatsGet$Response(params?: {

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
  }): Observable<StrictHttpResponse<AssetTimeStatsGetResp>> {

    const rb = new RequestBuilder(this.rootUrl, AssetTimeStatsService.GetAllApiAssettimestatsGetPath, 'get');
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
        return r as StrictHttpResponse<AssetTimeStatsGetResp>;
      })
    );
  }

  /**
   * Get All.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllApiAssettimestatsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiAssettimestatsGet(params?: {

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
  }): Observable<AssetTimeStatsGetResp> {

    return this.getAllApiAssettimestatsGet$Response(params).pipe(
      map((r: StrictHttpResponse<AssetTimeStatsGetResp>) => r.body as AssetTimeStatsGetResp)
    );
  }

  /**
   * Path part for operation updateApiAssettimestatsPut
   */
  static readonly UpdateApiAssettimestatsPutPath = '/api/assettimestats/';

  /**
   * Update.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateApiAssettimestatsPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiAssettimestatsPut$Response(params: {
    body: AssetTimeStats
  }): Observable<StrictHttpResponse<AssetTimeStats>> {

    const rb = new RequestBuilder(this.rootUrl, AssetTimeStatsService.UpdateApiAssettimestatsPutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AssetTimeStats>;
      })
    );
  }

  /**
   * Update.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateApiAssettimestatsPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiAssettimestatsPut(params: {
    body: AssetTimeStats
  }): Observable<AssetTimeStats> {

    return this.updateApiAssettimestatsPut$Response(params).pipe(
      map((r: StrictHttpResponse<AssetTimeStats>) => r.body as AssetTimeStats)
    );
  }

  /**
   * Path part for operation createApiAssettimestatsPost
   */
  static readonly CreateApiAssettimestatsPostPath = '/api/assettimestats/';

  /**
   * Create.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createApiAssettimestatsPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiAssettimestatsPost$Response(params: {
    body: AssetTimeStatsCreate
  }): Observable<StrictHttpResponse<AssetTimeStats>> {

    const rb = new RequestBuilder(this.rootUrl, AssetTimeStatsService.CreateApiAssettimestatsPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AssetTimeStats>;
      })
    );
  }

  /**
   * Create.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createApiAssettimestatsPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiAssettimestatsPost(params: {
    body: AssetTimeStatsCreate
  }): Observable<AssetTimeStats> {

    return this.createApiAssettimestatsPost$Response(params).pipe(
      map((r: StrictHttpResponse<AssetTimeStats>) => r.body as AssetTimeStats)
    );
  }

  /**
   * Path part for operation getApiAssettimestatsIdGet
   */
  static readonly GetApiAssettimestatsIdGetPath = '/api/assettimestats/{id}';

  /**
   * Get.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiAssettimestatsIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiAssettimestatsIdGet$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<AssetTimeStats>> {

    const rb = new RequestBuilder(this.rootUrl, AssetTimeStatsService.GetApiAssettimestatsIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AssetTimeStats>;
      })
    );
  }

  /**
   * Get.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiAssettimestatsIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiAssettimestatsIdGet(params: {
    id: string;
  }): Observable<AssetTimeStats> {

    return this.getApiAssettimestatsIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<AssetTimeStats>) => r.body as AssetTimeStats)
    );
  }

  /**
   * Path part for operation deleteApiAssettimestatsIdDelete
   */
  static readonly DeleteApiAssettimestatsIdDeletePath = '/api/assettimestats/{id}';

  /**
   * Delete.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteApiAssettimestatsIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiAssettimestatsIdDelete$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, AssetTimeStatsService.DeleteApiAssettimestatsIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `deleteApiAssettimestatsIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiAssettimestatsIdDelete(params: {
    id: string;
  }): Observable<any> {

    return this.deleteApiAssettimestatsIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
