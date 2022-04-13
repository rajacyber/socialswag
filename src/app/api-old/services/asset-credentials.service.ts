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

import { AssetCredentials } from '../models/asset-credentials';
import { AssetCredentialsCreate } from '../models/asset-credentials-create';
import { AssetCredentialsGetResp } from '../models/asset-credentials-get-resp';

@Injectable({
  providedIn: 'root',
})
export class AssetCredentialsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllApiAssetcredentialsGet
   */
  static readonly GetAllApiAssetcredentialsGetPath = '/api/assetcredentials/';

  /**
   * Get All.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllApiAssetcredentialsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiAssetcredentialsGet$Response(params?: {

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
  }): Observable<StrictHttpResponse<AssetCredentialsGetResp>> {

    const rb = new RequestBuilder(this.rootUrl, AssetCredentialsService.GetAllApiAssetcredentialsGetPath, 'get');
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
        return r as StrictHttpResponse<AssetCredentialsGetResp>;
      })
    );
  }

  /**
   * Get All.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllApiAssetcredentialsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiAssetcredentialsGet(params?: {

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
  }): Observable<AssetCredentialsGetResp> {

    return this.getAllApiAssetcredentialsGet$Response(params).pipe(
      map((r: StrictHttpResponse<AssetCredentialsGetResp>) => r.body as AssetCredentialsGetResp)
    );
  }

  /**
   * Path part for operation updateApiAssetcredentialsPut
   */
  static readonly UpdateApiAssetcredentialsPutPath = '/api/assetcredentials/';

  /**
   * Update.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateApiAssetcredentialsPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiAssetcredentialsPut$Response(params: {
    body: AssetCredentials
  }): Observable<StrictHttpResponse<AssetCredentials>> {

    const rb = new RequestBuilder(this.rootUrl, AssetCredentialsService.UpdateApiAssetcredentialsPutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AssetCredentials>;
      })
    );
  }

  /**
   * Update.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateApiAssetcredentialsPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiAssetcredentialsPut(params: {
    body: AssetCredentials
  }): Observable<AssetCredentials> {

    return this.updateApiAssetcredentialsPut$Response(params).pipe(
      map((r: StrictHttpResponse<AssetCredentials>) => r.body as AssetCredentials)
    );
  }

  /**
   * Path part for operation createApiAssetcredentialsPost
   */
  static readonly CreateApiAssetcredentialsPostPath = '/api/assetcredentials/';

  /**
   * Create.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createApiAssetcredentialsPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiAssetcredentialsPost$Response(params: {
    body: AssetCredentialsCreate
  }): Observable<StrictHttpResponse<AssetCredentials>> {

    const rb = new RequestBuilder(this.rootUrl, AssetCredentialsService.CreateApiAssetcredentialsPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AssetCredentials>;
      })
    );
  }

  /**
   * Create.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createApiAssetcredentialsPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiAssetcredentialsPost(params: {
    body: AssetCredentialsCreate
  }): Observable<AssetCredentials> {

    return this.createApiAssetcredentialsPost$Response(params).pipe(
      map((r: StrictHttpResponse<AssetCredentials>) => r.body as AssetCredentials)
    );
  }

  /**
   * Path part for operation getApiAssetcredentialsIdGet
   */
  static readonly GetApiAssetcredentialsIdGetPath = '/api/assetcredentials/{id}';

  /**
   * Get.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiAssetcredentialsIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiAssetcredentialsIdGet$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<AssetCredentials>> {

    const rb = new RequestBuilder(this.rootUrl, AssetCredentialsService.GetApiAssetcredentialsIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AssetCredentials>;
      })
    );
  }

  /**
   * Get.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiAssetcredentialsIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiAssetcredentialsIdGet(params: {
    id: string;
  }): Observable<AssetCredentials> {

    return this.getApiAssetcredentialsIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<AssetCredentials>) => r.body as AssetCredentials)
    );
  }

  /**
   * Path part for operation deleteApiAssetcredentialsIdDelete
   */
  static readonly DeleteApiAssetcredentialsIdDeletePath = '/api/assetcredentials/{id}';

  /**
   * Delete.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteApiAssetcredentialsIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiAssetcredentialsIdDelete$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, AssetCredentialsService.DeleteApiAssetcredentialsIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `deleteApiAssetcredentialsIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiAssetcredentialsIdDelete(params: {
    id: string;
  }): Observable<any> {

    return this.deleteApiAssetcredentialsIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
