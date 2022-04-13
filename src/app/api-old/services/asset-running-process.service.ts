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

import { AssetRunningProcess } from '../models/asset-running-process';
import { AssetRunningProcessCreate } from '../models/asset-running-process-create';
import { AssetRunningProcessGetResp } from '../models/asset-running-process-get-resp';

@Injectable({
  providedIn: 'root',
})
export class AssetRunningProcessService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllApiAssetrunningprocessGet
   */
  static readonly GetAllApiAssetrunningprocessGetPath = '/api/assetrunningprocess/';

  /**
   * Get All.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllApiAssetrunningprocessGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiAssetrunningprocessGet$Response(params?: {

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
  }): Observable<StrictHttpResponse<AssetRunningProcessGetResp>> {

    const rb = new RequestBuilder(this.rootUrl, AssetRunningProcessService.GetAllApiAssetrunningprocessGetPath, 'get');
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
        return r as StrictHttpResponse<AssetRunningProcessGetResp>;
      })
    );
  }

  /**
   * Get All.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllApiAssetrunningprocessGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiAssetrunningprocessGet(params?: {

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
  }): Observable<AssetRunningProcessGetResp> {

    return this.getAllApiAssetrunningprocessGet$Response(params).pipe(
      map((r: StrictHttpResponse<AssetRunningProcessGetResp>) => r.body as AssetRunningProcessGetResp)
    );
  }

  /**
   * Path part for operation updateApiAssetrunningprocessPut
   */
  static readonly UpdateApiAssetrunningprocessPutPath = '/api/assetrunningprocess/';

  /**
   * Update.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateApiAssetrunningprocessPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiAssetrunningprocessPut$Response(params: {
    body: AssetRunningProcess
  }): Observable<StrictHttpResponse<AssetRunningProcess>> {

    const rb = new RequestBuilder(this.rootUrl, AssetRunningProcessService.UpdateApiAssetrunningprocessPutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AssetRunningProcess>;
      })
    );
  }

  /**
   * Update.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateApiAssetrunningprocessPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiAssetrunningprocessPut(params: {
    body: AssetRunningProcess
  }): Observable<AssetRunningProcess> {

    return this.updateApiAssetrunningprocessPut$Response(params).pipe(
      map((r: StrictHttpResponse<AssetRunningProcess>) => r.body as AssetRunningProcess)
    );
  }

  /**
   * Path part for operation createApiAssetrunningprocessPost
   */
  static readonly CreateApiAssetrunningprocessPostPath = '/api/assetrunningprocess/';

  /**
   * Create.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createApiAssetrunningprocessPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiAssetrunningprocessPost$Response(params: {
    body: AssetRunningProcessCreate
  }): Observable<StrictHttpResponse<AssetRunningProcess>> {

    const rb = new RequestBuilder(this.rootUrl, AssetRunningProcessService.CreateApiAssetrunningprocessPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AssetRunningProcess>;
      })
    );
  }

  /**
   * Create.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createApiAssetrunningprocessPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiAssetrunningprocessPost(params: {
    body: AssetRunningProcessCreate
  }): Observable<AssetRunningProcess> {

    return this.createApiAssetrunningprocessPost$Response(params).pipe(
      map((r: StrictHttpResponse<AssetRunningProcess>) => r.body as AssetRunningProcess)
    );
  }

  /**
   * Path part for operation getApiAssetrunningprocessIdGet
   */
  static readonly GetApiAssetrunningprocessIdGetPath = '/api/assetrunningprocess/{id}';

  /**
   * Get.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiAssetrunningprocessIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiAssetrunningprocessIdGet$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<AssetRunningProcess>> {

    const rb = new RequestBuilder(this.rootUrl, AssetRunningProcessService.GetApiAssetrunningprocessIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AssetRunningProcess>;
      })
    );
  }

  /**
   * Get.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiAssetrunningprocessIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiAssetrunningprocessIdGet(params: {
    id: string;
  }): Observable<AssetRunningProcess> {

    return this.getApiAssetrunningprocessIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<AssetRunningProcess>) => r.body as AssetRunningProcess)
    );
  }

  /**
   * Path part for operation deleteApiAssetrunningprocessIdDelete
   */
  static readonly DeleteApiAssetrunningprocessIdDeletePath = '/api/assetrunningprocess/{id}';

  /**
   * Delete.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteApiAssetrunningprocessIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiAssetrunningprocessIdDelete$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, AssetRunningProcessService.DeleteApiAssetrunningprocessIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `deleteApiAssetrunningprocessIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiAssetrunningprocessIdDelete(params: {
    id: string;
  }): Observable<any> {

    return this.deleteApiAssetrunningprocessIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
