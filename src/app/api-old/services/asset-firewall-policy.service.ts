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

import { AssetFirewallPolicy } from '../models/asset-firewall-policy';
import { AssetFirewallPolicyCreate } from '../models/asset-firewall-policy-create';
import { AssetFirewallPolicyGetResp } from '../models/asset-firewall-policy-get-resp';

@Injectable({
  providedIn: 'root',
})
export class AssetFirewallPolicyService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllApiAssetfirewallpolicyGet
   */
  static readonly GetAllApiAssetfirewallpolicyGetPath = '/api/assetfirewallpolicy/';

  /**
   * Get All.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllApiAssetfirewallpolicyGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiAssetfirewallpolicyGet$Response(params?: {

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
  }): Observable<StrictHttpResponse<AssetFirewallPolicyGetResp>> {

    const rb = new RequestBuilder(this.rootUrl, AssetFirewallPolicyService.GetAllApiAssetfirewallpolicyGetPath, 'get');
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
        return r as StrictHttpResponse<AssetFirewallPolicyGetResp>;
      })
    );
  }

  /**
   * Get All.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllApiAssetfirewallpolicyGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiAssetfirewallpolicyGet(params?: {

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
  }): Observable<AssetFirewallPolicyGetResp> {

    return this.getAllApiAssetfirewallpolicyGet$Response(params).pipe(
      map((r: StrictHttpResponse<AssetFirewallPolicyGetResp>) => r.body as AssetFirewallPolicyGetResp)
    );
  }

  /**
   * Path part for operation updateApiAssetfirewallpolicyPut
   */
  static readonly UpdateApiAssetfirewallpolicyPutPath = '/api/assetfirewallpolicy/';

  /**
   * Update.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateApiAssetfirewallpolicyPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiAssetfirewallpolicyPut$Response(params: {
    body: AssetFirewallPolicy
  }): Observable<StrictHttpResponse<AssetFirewallPolicy>> {

    const rb = new RequestBuilder(this.rootUrl, AssetFirewallPolicyService.UpdateApiAssetfirewallpolicyPutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AssetFirewallPolicy>;
      })
    );
  }

  /**
   * Update.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateApiAssetfirewallpolicyPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiAssetfirewallpolicyPut(params: {
    body: AssetFirewallPolicy
  }): Observable<AssetFirewallPolicy> {

    return this.updateApiAssetfirewallpolicyPut$Response(params).pipe(
      map((r: StrictHttpResponse<AssetFirewallPolicy>) => r.body as AssetFirewallPolicy)
    );
  }

  /**
   * Path part for operation createApiAssetfirewallpolicyPost
   */
  static readonly CreateApiAssetfirewallpolicyPostPath = '/api/assetfirewallpolicy/';

  /**
   * Create.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createApiAssetfirewallpolicyPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiAssetfirewallpolicyPost$Response(params: {
    body: AssetFirewallPolicyCreate
  }): Observable<StrictHttpResponse<AssetFirewallPolicy>> {

    const rb = new RequestBuilder(this.rootUrl, AssetFirewallPolicyService.CreateApiAssetfirewallpolicyPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AssetFirewallPolicy>;
      })
    );
  }

  /**
   * Create.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createApiAssetfirewallpolicyPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiAssetfirewallpolicyPost(params: {
    body: AssetFirewallPolicyCreate
  }): Observable<AssetFirewallPolicy> {

    return this.createApiAssetfirewallpolicyPost$Response(params).pipe(
      map((r: StrictHttpResponse<AssetFirewallPolicy>) => r.body as AssetFirewallPolicy)
    );
  }

  /**
   * Path part for operation getApiAssetfirewallpolicyIdGet
   */
  static readonly GetApiAssetfirewallpolicyIdGetPath = '/api/assetfirewallpolicy/{id}';

  /**
   * Get.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiAssetfirewallpolicyIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiAssetfirewallpolicyIdGet$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<AssetFirewallPolicy>> {

    const rb = new RequestBuilder(this.rootUrl, AssetFirewallPolicyService.GetApiAssetfirewallpolicyIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AssetFirewallPolicy>;
      })
    );
  }

  /**
   * Get.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiAssetfirewallpolicyIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiAssetfirewallpolicyIdGet(params: {
    id: string;
  }): Observable<AssetFirewallPolicy> {

    return this.getApiAssetfirewallpolicyIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<AssetFirewallPolicy>) => r.body as AssetFirewallPolicy)
    );
  }

  /**
   * Path part for operation deleteApiAssetfirewallpolicyIdDelete
   */
  static readonly DeleteApiAssetfirewallpolicyIdDeletePath = '/api/assetfirewallpolicy/{id}';

  /**
   * Delete.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteApiAssetfirewallpolicyIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiAssetfirewallpolicyIdDelete$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, AssetFirewallPolicyService.DeleteApiAssetfirewallpolicyIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `deleteApiAssetfirewallpolicyIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiAssetfirewallpolicyIdDelete(params: {
    id: string;
  }): Observable<any> {

    return this.deleteApiAssetfirewallpolicyIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
