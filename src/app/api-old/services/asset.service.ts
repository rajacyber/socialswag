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

import { Asset } from '../models/asset';
import { AssetCreate } from '../models/asset-create';
import { AssetGetResp } from '../models/asset-get-resp';
import { AssetscanParams } from '../models/assetscan-params';

@Injectable({
  providedIn: 'root',
})
export class AssetService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllApiAssetGet
   */
  static readonly GetAllApiAssetGetPath = '/api/asset/';

  /**
   * Get All.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllApiAssetGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiAssetGet$Response(params?: {

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
  }): Observable<StrictHttpResponse<AssetGetResp>> {

    const rb = new RequestBuilder(this.rootUrl, AssetService.GetAllApiAssetGetPath, 'get');
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
        return r as StrictHttpResponse<AssetGetResp>;
      })
    );
  }

  /**
   * Get All.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllApiAssetGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiAssetGet(params?: {

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
  }): Observable<AssetGetResp> {

    return this.getAllApiAssetGet$Response(params).pipe(
      map((r: StrictHttpResponse<AssetGetResp>) => r.body as AssetGetResp)
    );
  }

  /**
   * Path part for operation updateApiAssetPut
   */
  static readonly UpdateApiAssetPutPath = '/api/asset/';

  /**
   * Update.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateApiAssetPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiAssetPut$Response(params: {
    body: Asset
  }): Observable<StrictHttpResponse<Asset>> {

    const rb = new RequestBuilder(this.rootUrl, AssetService.UpdateApiAssetPutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Asset>;
      })
    );
  }

  /**
   * Update.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateApiAssetPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiAssetPut(params: {
    body: Asset
  }): Observable<Asset> {

    return this.updateApiAssetPut$Response(params).pipe(
      map((r: StrictHttpResponse<Asset>) => r.body as Asset)
    );
  }

  /**
   * Path part for operation createApiAssetPost
   */
  static readonly CreateApiAssetPostPath = '/api/asset/';

  /**
   * Create.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createApiAssetPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiAssetPost$Response(params: {
    body: AssetCreate
  }): Observable<StrictHttpResponse<Asset>> {

    const rb = new RequestBuilder(this.rootUrl, AssetService.CreateApiAssetPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Asset>;
      })
    );
  }

  /**
   * Create.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createApiAssetPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiAssetPost(params: {
    body: AssetCreate
  }): Observable<Asset> {

    return this.createApiAssetPost$Response(params).pipe(
      map((r: StrictHttpResponse<Asset>) => r.body as Asset)
    );
  }

  /**
   * Path part for operation bulkupdateApiAssetBulkupdatePut
   */
  static readonly BulkupdateApiAssetBulkupdatePutPath = '/api/asset/bulkupdate';

  /**
   * Bulkupdate.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `bulkupdateApiAssetBulkupdatePut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  bulkupdateApiAssetBulkupdatePut$Response(params: {
    body: Array<Asset>
  }): Observable<StrictHttpResponse<Array<Asset>>> {

    const rb = new RequestBuilder(this.rootUrl, AssetService.BulkupdateApiAssetBulkupdatePutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Asset>>;
      })
    );
  }

  /**
   * Bulkupdate.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `bulkupdateApiAssetBulkupdatePut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  bulkupdateApiAssetBulkupdatePut(params: {
    body: Array<Asset>
  }): Observable<Array<Asset>> {

    return this.bulkupdateApiAssetBulkupdatePut$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Asset>>) => r.body as Array<Asset>)
    );
  }

  /**
   * Path part for operation getApiAssetIdGet
   */
  static readonly GetApiAssetIdGetPath = '/api/asset/{id}';

  /**
   * Get.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiAssetIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiAssetIdGet$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<Asset>> {

    const rb = new RequestBuilder(this.rootUrl, AssetService.GetApiAssetIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Asset>;
      })
    );
  }

  /**
   * Get.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiAssetIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiAssetIdGet(params: {
    id: string;
  }): Observable<Asset> {

    return this.getApiAssetIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<Asset>) => r.body as Asset)
    );
  }

  /**
   * Path part for operation deleteApiAssetIdDelete
   */
  static readonly DeleteApiAssetIdDeletePath = '/api/asset/{id}';

  /**
   * Delete.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteApiAssetIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiAssetIdDelete$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, AssetService.DeleteApiAssetIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `deleteApiAssetIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiAssetIdDelete(params: {
    id: string;
  }): Observable<any> {

    return this.deleteApiAssetIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation assetscanApiAssetIdScanPost
   */
  static readonly AssetscanApiAssetIdScanPostPath = '/api/asset/{id}/scan';

  /**
   * Assetscan.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `assetscanApiAssetIdScanPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  assetscanApiAssetIdScanPost$Response(params: {
    id: string;
    body: AssetscanParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, AssetService.AssetscanApiAssetIdScanPostPath, 'post');
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
   * Assetscan.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `assetscanApiAssetIdScanPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  assetscanApiAssetIdScanPost(params: {
    id: string;
    body: AssetscanParams
  }): Observable<any> {

    return this.assetscanApiAssetIdScanPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
