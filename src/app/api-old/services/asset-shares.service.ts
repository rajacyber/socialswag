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

import { AssetShares } from '../models/asset-shares';
import { AssetSharesCreate } from '../models/asset-shares-create';
import { AssetSharesGetResp } from '../models/asset-shares-get-resp';

@Injectable({
  providedIn: 'root',
})
export class AssetSharesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllApiAssetsharesGet
   */
  static readonly GetAllApiAssetsharesGetPath = '/api/assetshares/';

  /**
   * Get All.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllApiAssetsharesGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiAssetsharesGet$Response(params?: {

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
  }): Observable<StrictHttpResponse<AssetSharesGetResp>> {

    const rb = new RequestBuilder(this.rootUrl, AssetSharesService.GetAllApiAssetsharesGetPath, 'get');
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
        return r as StrictHttpResponse<AssetSharesGetResp>;
      })
    );
  }

  /**
   * Get All.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllApiAssetsharesGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiAssetsharesGet(params?: {

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
  }): Observable<AssetSharesGetResp> {

    return this.getAllApiAssetsharesGet$Response(params).pipe(
      map((r: StrictHttpResponse<AssetSharesGetResp>) => r.body as AssetSharesGetResp)
    );
  }

  /**
   * Path part for operation updateApiAssetsharesPut
   */
  static readonly UpdateApiAssetsharesPutPath = '/api/assetshares/';

  /**
   * Update.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateApiAssetsharesPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiAssetsharesPut$Response(params: {
    body: AssetShares
  }): Observable<StrictHttpResponse<AssetShares>> {

    const rb = new RequestBuilder(this.rootUrl, AssetSharesService.UpdateApiAssetsharesPutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AssetShares>;
      })
    );
  }

  /**
   * Update.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateApiAssetsharesPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiAssetsharesPut(params: {
    body: AssetShares
  }): Observable<AssetShares> {

    return this.updateApiAssetsharesPut$Response(params).pipe(
      map((r: StrictHttpResponse<AssetShares>) => r.body as AssetShares)
    );
  }

  /**
   * Path part for operation createApiAssetsharesPost
   */
  static readonly CreateApiAssetsharesPostPath = '/api/assetshares/';

  /**
   * Create.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createApiAssetsharesPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiAssetsharesPost$Response(params: {
    body: AssetSharesCreate
  }): Observable<StrictHttpResponse<AssetShares>> {

    const rb = new RequestBuilder(this.rootUrl, AssetSharesService.CreateApiAssetsharesPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AssetShares>;
      })
    );
  }

  /**
   * Create.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createApiAssetsharesPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiAssetsharesPost(params: {
    body: AssetSharesCreate
  }): Observable<AssetShares> {

    return this.createApiAssetsharesPost$Response(params).pipe(
      map((r: StrictHttpResponse<AssetShares>) => r.body as AssetShares)
    );
  }

  /**
   * Path part for operation getApiAssetsharesIdGet
   */
  static readonly GetApiAssetsharesIdGetPath = '/api/assetshares/{id}';

  /**
   * Get.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiAssetsharesIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiAssetsharesIdGet$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<AssetShares>> {

    const rb = new RequestBuilder(this.rootUrl, AssetSharesService.GetApiAssetsharesIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AssetShares>;
      })
    );
  }

  /**
   * Get.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiAssetsharesIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiAssetsharesIdGet(params: {
    id: string;
  }): Observable<AssetShares> {

    return this.getApiAssetsharesIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<AssetShares>) => r.body as AssetShares)
    );
  }

  /**
   * Path part for operation deleteApiAssetsharesIdDelete
   */
  static readonly DeleteApiAssetsharesIdDeletePath = '/api/assetshares/{id}';

  /**
   * Delete.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteApiAssetsharesIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiAssetsharesIdDelete$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, AssetSharesService.DeleteApiAssetsharesIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `deleteApiAssetsharesIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiAssetsharesIdDelete(params: {
    id: string;
  }): Observable<any> {

    return this.deleteApiAssetsharesIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
