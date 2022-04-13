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

import { AssetUsers } from '../models/asset-users';
import { AssetUsersCreate } from '../models/asset-users-create';
import { AssetUsersGetResp } from '../models/asset-users-get-resp';

@Injectable({
  providedIn: 'root',
})
export class AssetUsersService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllApiAssetusersGet
   */
  static readonly GetAllApiAssetusersGetPath = '/api/assetusers/';

  /**
   * Get All.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllApiAssetusersGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiAssetusersGet$Response(params?: {

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
  }): Observable<StrictHttpResponse<AssetUsersGetResp>> {

    const rb = new RequestBuilder(this.rootUrl, AssetUsersService.GetAllApiAssetusersGetPath, 'get');
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
        return r as StrictHttpResponse<AssetUsersGetResp>;
      })
    );
  }

  /**
   * Get All.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllApiAssetusersGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiAssetusersGet(params?: {

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
  }): Observable<AssetUsersGetResp> {

    return this.getAllApiAssetusersGet$Response(params).pipe(
      map((r: StrictHttpResponse<AssetUsersGetResp>) => r.body as AssetUsersGetResp)
    );
  }

  /**
   * Path part for operation updateApiAssetusersPut
   */
  static readonly UpdateApiAssetusersPutPath = '/api/assetusers/';

  /**
   * Update.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateApiAssetusersPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiAssetusersPut$Response(params: {
    body: AssetUsers
  }): Observable<StrictHttpResponse<AssetUsers>> {

    const rb = new RequestBuilder(this.rootUrl, AssetUsersService.UpdateApiAssetusersPutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AssetUsers>;
      })
    );
  }

  /**
   * Update.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateApiAssetusersPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiAssetusersPut(params: {
    body: AssetUsers
  }): Observable<AssetUsers> {

    return this.updateApiAssetusersPut$Response(params).pipe(
      map((r: StrictHttpResponse<AssetUsers>) => r.body as AssetUsers)
    );
  }

  /**
   * Path part for operation createApiAssetusersPost
   */
  static readonly CreateApiAssetusersPostPath = '/api/assetusers/';

  /**
   * Create.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createApiAssetusersPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiAssetusersPost$Response(params: {
    body: AssetUsersCreate
  }): Observable<StrictHttpResponse<AssetUsers>> {

    const rb = new RequestBuilder(this.rootUrl, AssetUsersService.CreateApiAssetusersPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AssetUsers>;
      })
    );
  }

  /**
   * Create.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createApiAssetusersPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiAssetusersPost(params: {
    body: AssetUsersCreate
  }): Observable<AssetUsers> {

    return this.createApiAssetusersPost$Response(params).pipe(
      map((r: StrictHttpResponse<AssetUsers>) => r.body as AssetUsers)
    );
  }

  /**
   * Path part for operation getApiAssetusersIdGet
   */
  static readonly GetApiAssetusersIdGetPath = '/api/assetusers/{id}';

  /**
   * Get.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiAssetusersIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiAssetusersIdGet$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<AssetUsers>> {

    const rb = new RequestBuilder(this.rootUrl, AssetUsersService.GetApiAssetusersIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AssetUsers>;
      })
    );
  }

  /**
   * Get.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiAssetusersIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiAssetusersIdGet(params: {
    id: string;
  }): Observable<AssetUsers> {

    return this.getApiAssetusersIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<AssetUsers>) => r.body as AssetUsers)
    );
  }

  /**
   * Path part for operation deleteApiAssetusersIdDelete
   */
  static readonly DeleteApiAssetusersIdDeletePath = '/api/assetusers/{id}';

  /**
   * Delete.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteApiAssetusersIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiAssetusersIdDelete$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, AssetUsersService.DeleteApiAssetusersIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `deleteApiAssetusersIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiAssetusersIdDelete(params: {
    id: string;
  }): Observable<any> {

    return this.deleteApiAssetusersIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
