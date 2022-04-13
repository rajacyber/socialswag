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

import { AssetServices } from '../models/asset-services';
import { AssetServicesCreate } from '../models/asset-services-create';
import { AssetServicesGetResp } from '../models/asset-services-get-resp';

@Injectable({
  providedIn: 'root',
})
export class AssetServicesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllApiAssetservicesGet
   */
  static readonly GetAllApiAssetservicesGetPath = '/api/assetservices/';

  /**
   * Get All.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllApiAssetservicesGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiAssetservicesGet$Response(params?: {

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
  }): Observable<StrictHttpResponse<AssetServicesGetResp>> {

    const rb = new RequestBuilder(this.rootUrl, AssetServicesService.GetAllApiAssetservicesGetPath, 'get');
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
        return r as StrictHttpResponse<AssetServicesGetResp>;
      })
    );
  }

  /**
   * Get All.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllApiAssetservicesGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiAssetservicesGet(params?: {

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
  }): Observable<AssetServicesGetResp> {

    return this.getAllApiAssetservicesGet$Response(params).pipe(
      map((r: StrictHttpResponse<AssetServicesGetResp>) => r.body as AssetServicesGetResp)
    );
  }

  /**
   * Path part for operation updateApiAssetservicesPut
   */
  static readonly UpdateApiAssetservicesPutPath = '/api/assetservices/';

  /**
   * Update.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateApiAssetservicesPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiAssetservicesPut$Response(params: {
    body: AssetServices
  }): Observable<StrictHttpResponse<AssetServices>> {

    const rb = new RequestBuilder(this.rootUrl, AssetServicesService.UpdateApiAssetservicesPutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AssetServices>;
      })
    );
  }

  /**
   * Update.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateApiAssetservicesPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiAssetservicesPut(params: {
    body: AssetServices
  }): Observable<AssetServices> {

    return this.updateApiAssetservicesPut$Response(params).pipe(
      map((r: StrictHttpResponse<AssetServices>) => r.body as AssetServices)
    );
  }

  /**
   * Path part for operation createApiAssetservicesPost
   */
  static readonly CreateApiAssetservicesPostPath = '/api/assetservices/';

  /**
   * Create.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createApiAssetservicesPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiAssetservicesPost$Response(params: {
    body: AssetServicesCreate
  }): Observable<StrictHttpResponse<AssetServices>> {

    const rb = new RequestBuilder(this.rootUrl, AssetServicesService.CreateApiAssetservicesPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AssetServices>;
      })
    );
  }

  /**
   * Create.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createApiAssetservicesPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiAssetservicesPost(params: {
    body: AssetServicesCreate
  }): Observable<AssetServices> {

    return this.createApiAssetservicesPost$Response(params).pipe(
      map((r: StrictHttpResponse<AssetServices>) => r.body as AssetServices)
    );
  }

  /**
   * Path part for operation getApiAssetservicesIdGet
   */
  static readonly GetApiAssetservicesIdGetPath = '/api/assetservices/{id}';

  /**
   * Get.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiAssetservicesIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiAssetservicesIdGet$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<AssetServices>> {

    const rb = new RequestBuilder(this.rootUrl, AssetServicesService.GetApiAssetservicesIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AssetServices>;
      })
    );
  }

  /**
   * Get.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiAssetservicesIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiAssetservicesIdGet(params: {
    id: string;
  }): Observable<AssetServices> {

    return this.getApiAssetservicesIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<AssetServices>) => r.body as AssetServices)
    );
  }

  /**
   * Path part for operation deleteApiAssetservicesIdDelete
   */
  static readonly DeleteApiAssetservicesIdDeletePath = '/api/assetservices/{id}';

  /**
   * Delete.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteApiAssetservicesIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiAssetservicesIdDelete$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, AssetServicesService.DeleteApiAssetservicesIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `deleteApiAssetservicesIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiAssetservicesIdDelete(params: {
    id: string;
  }): Observable<any> {

    return this.deleteApiAssetservicesIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
