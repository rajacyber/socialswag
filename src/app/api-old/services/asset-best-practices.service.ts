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

import { AssetBestPractices } from '../models/asset-best-practices';
import { AssetBestPracticesCreate } from '../models/asset-best-practices-create';
import { AssetBestPracticesGetResp } from '../models/asset-best-practices-get-resp';

@Injectable({
  providedIn: 'root',
})
export class AssetBestPracticesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllApiAssetbestpracticesGet
   */
  static readonly GetAllApiAssetbestpracticesGetPath = '/api/assetbestpractices/';

  /**
   * Get All.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllApiAssetbestpracticesGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiAssetbestpracticesGet$Response(params?: {

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
  }): Observable<StrictHttpResponse<AssetBestPracticesGetResp>> {

    const rb = new RequestBuilder(this.rootUrl, AssetBestPracticesService.GetAllApiAssetbestpracticesGetPath, 'get');
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
        return r as StrictHttpResponse<AssetBestPracticesGetResp>;
      })
    );
  }

  /**
   * Get All.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllApiAssetbestpracticesGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiAssetbestpracticesGet(params?: {

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
  }): Observable<AssetBestPracticesGetResp> {

    return this.getAllApiAssetbestpracticesGet$Response(params).pipe(
      map((r: StrictHttpResponse<AssetBestPracticesGetResp>) => r.body as AssetBestPracticesGetResp)
    );
  }

  /**
   * Path part for operation updateApiAssetbestpracticesPut
   */
  static readonly UpdateApiAssetbestpracticesPutPath = '/api/assetbestpractices/';

  /**
   * Update.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateApiAssetbestpracticesPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiAssetbestpracticesPut$Response(params: {
    body: AssetBestPractices
  }): Observable<StrictHttpResponse<AssetBestPractices>> {

    const rb = new RequestBuilder(this.rootUrl, AssetBestPracticesService.UpdateApiAssetbestpracticesPutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AssetBestPractices>;
      })
    );
  }

  /**
   * Update.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateApiAssetbestpracticesPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiAssetbestpracticesPut(params: {
    body: AssetBestPractices
  }): Observable<AssetBestPractices> {

    return this.updateApiAssetbestpracticesPut$Response(params).pipe(
      map((r: StrictHttpResponse<AssetBestPractices>) => r.body as AssetBestPractices)
    );
  }

  /**
   * Path part for operation createApiAssetbestpracticesPost
   */
  static readonly CreateApiAssetbestpracticesPostPath = '/api/assetbestpractices/';

  /**
   * Create.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createApiAssetbestpracticesPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiAssetbestpracticesPost$Response(params: {
    body: AssetBestPracticesCreate
  }): Observable<StrictHttpResponse<AssetBestPractices>> {

    const rb = new RequestBuilder(this.rootUrl, AssetBestPracticesService.CreateApiAssetbestpracticesPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AssetBestPractices>;
      })
    );
  }

  /**
   * Create.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createApiAssetbestpracticesPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiAssetbestpracticesPost(params: {
    body: AssetBestPracticesCreate
  }): Observable<AssetBestPractices> {

    return this.createApiAssetbestpracticesPost$Response(params).pipe(
      map((r: StrictHttpResponse<AssetBestPractices>) => r.body as AssetBestPractices)
    );
  }

  /**
   * Path part for operation getApiAssetbestpracticesIdGet
   */
  static readonly GetApiAssetbestpracticesIdGetPath = '/api/assetbestpractices/{id}';

  /**
   * Get.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiAssetbestpracticesIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiAssetbestpracticesIdGet$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<AssetBestPractices>> {

    const rb = new RequestBuilder(this.rootUrl, AssetBestPracticesService.GetApiAssetbestpracticesIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AssetBestPractices>;
      })
    );
  }

  /**
   * Get.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiAssetbestpracticesIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiAssetbestpracticesIdGet(params: {
    id: string;
  }): Observable<AssetBestPractices> {

    return this.getApiAssetbestpracticesIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<AssetBestPractices>) => r.body as AssetBestPractices)
    );
  }

  /**
   * Path part for operation deleteApiAssetbestpracticesIdDelete
   */
  static readonly DeleteApiAssetbestpracticesIdDeletePath = '/api/assetbestpractices/{id}';

  /**
   * Delete.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteApiAssetbestpracticesIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiAssetbestpracticesIdDelete$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, AssetBestPracticesService.DeleteApiAssetbestpracticesIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `deleteApiAssetbestpracticesIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiAssetbestpracticesIdDelete(params: {
    id: string;
  }): Observable<any> {

    return this.deleteApiAssetbestpracticesIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
