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

import { AssetSnmpTable } from '../models/asset-snmp-table';
import { AssetSnmpTableCreate } from '../models/asset-snmp-table-create';
import { AssetSnmpTableGetResp } from '../models/asset-snmp-table-get-resp';

@Injectable({
  providedIn: 'root',
})
export class AssetSnmpTableService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllApiAssetsnmptableGet
   */
  static readonly GetAllApiAssetsnmptableGetPath = '/api/assetsnmptable/';

  /**
   * Get All.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllApiAssetsnmptableGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiAssetsnmptableGet$Response(params?: {

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
  }): Observable<StrictHttpResponse<AssetSnmpTableGetResp>> {

    const rb = new RequestBuilder(this.rootUrl, AssetSnmpTableService.GetAllApiAssetsnmptableGetPath, 'get');
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
        return r as StrictHttpResponse<AssetSnmpTableGetResp>;
      })
    );
  }

  /**
   * Get All.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllApiAssetsnmptableGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiAssetsnmptableGet(params?: {

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
  }): Observable<AssetSnmpTableGetResp> {

    return this.getAllApiAssetsnmptableGet$Response(params).pipe(
      map((r: StrictHttpResponse<AssetSnmpTableGetResp>) => r.body as AssetSnmpTableGetResp)
    );
  }

  /**
   * Path part for operation updateApiAssetsnmptablePut
   */
  static readonly UpdateApiAssetsnmptablePutPath = '/api/assetsnmptable/';

  /**
   * Update.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateApiAssetsnmptablePut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiAssetsnmptablePut$Response(params: {
    body: AssetSnmpTable
  }): Observable<StrictHttpResponse<AssetSnmpTable>> {

    const rb = new RequestBuilder(this.rootUrl, AssetSnmpTableService.UpdateApiAssetsnmptablePutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AssetSnmpTable>;
      })
    );
  }

  /**
   * Update.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateApiAssetsnmptablePut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiAssetsnmptablePut(params: {
    body: AssetSnmpTable
  }): Observable<AssetSnmpTable> {

    return this.updateApiAssetsnmptablePut$Response(params).pipe(
      map((r: StrictHttpResponse<AssetSnmpTable>) => r.body as AssetSnmpTable)
    );
  }

  /**
   * Path part for operation createApiAssetsnmptablePost
   */
  static readonly CreateApiAssetsnmptablePostPath = '/api/assetsnmptable/';

  /**
   * Create.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createApiAssetsnmptablePost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiAssetsnmptablePost$Response(params: {
    body: AssetSnmpTableCreate
  }): Observable<StrictHttpResponse<AssetSnmpTable>> {

    const rb = new RequestBuilder(this.rootUrl, AssetSnmpTableService.CreateApiAssetsnmptablePostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AssetSnmpTable>;
      })
    );
  }

  /**
   * Create.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createApiAssetsnmptablePost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiAssetsnmptablePost(params: {
    body: AssetSnmpTableCreate
  }): Observable<AssetSnmpTable> {

    return this.createApiAssetsnmptablePost$Response(params).pipe(
      map((r: StrictHttpResponse<AssetSnmpTable>) => r.body as AssetSnmpTable)
    );
  }

  /**
   * Path part for operation getApiAssetsnmptableIdGet
   */
  static readonly GetApiAssetsnmptableIdGetPath = '/api/assetsnmptable/{id}';

  /**
   * Get.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiAssetsnmptableIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiAssetsnmptableIdGet$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<AssetSnmpTable>> {

    const rb = new RequestBuilder(this.rootUrl, AssetSnmpTableService.GetApiAssetsnmptableIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AssetSnmpTable>;
      })
    );
  }

  /**
   * Get.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiAssetsnmptableIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiAssetsnmptableIdGet(params: {
    id: string;
  }): Observable<AssetSnmpTable> {

    return this.getApiAssetsnmptableIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<AssetSnmpTable>) => r.body as AssetSnmpTable)
    );
  }

  /**
   * Path part for operation deleteApiAssetsnmptableIdDelete
   */
  static readonly DeleteApiAssetsnmptableIdDeletePath = '/api/assetsnmptable/{id}';

  /**
   * Delete.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteApiAssetsnmptableIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiAssetsnmptableIdDelete$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, AssetSnmpTableService.DeleteApiAssetsnmptableIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `deleteApiAssetsnmptableIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiAssetsnmptableIdDelete(params: {
    id: string;
  }): Observable<any> {

    return this.deleteApiAssetsnmptableIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
