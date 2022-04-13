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

import { AssetSystemInfo } from '../models/asset-system-info';
import { AssetSystemInfoGetResp } from '../models/asset-system-info-get-resp';

@Injectable({
  providedIn: 'root',
})
export class AssetSystemInfoService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getApiAssetsysteminfoIdGet
   */
  static readonly GetApiAssetsysteminfoIdGetPath = '/api/assetsysteminfo/{id}';

  /**
   * Get.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiAssetsysteminfoIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiAssetsysteminfoIdGet$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<AssetSystemInfo>> {

    const rb = new RequestBuilder(this.rootUrl, AssetSystemInfoService.GetApiAssetsysteminfoIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AssetSystemInfo>;
      })
    );
  }

  /**
   * Get.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiAssetsysteminfoIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiAssetsysteminfoIdGet(params: {
    id: string;
  }): Observable<AssetSystemInfo> {

    return this.getApiAssetsysteminfoIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<AssetSystemInfo>) => r.body as AssetSystemInfo)
    );
  }

  /**
   * Path part for operation getAllApiAssetsysteminfoGet
   */
  static readonly GetAllApiAssetsysteminfoGetPath = '/api/assetsysteminfo/';

  /**
   * Get All.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllApiAssetsysteminfoGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiAssetsysteminfoGet$Response(params?: {

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
  }): Observable<StrictHttpResponse<AssetSystemInfoGetResp>> {

    const rb = new RequestBuilder(this.rootUrl, AssetSystemInfoService.GetAllApiAssetsysteminfoGetPath, 'get');
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
        return r as StrictHttpResponse<AssetSystemInfoGetResp>;
      })
    );
  }

  /**
   * Get All.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllApiAssetsysteminfoGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiAssetsysteminfoGet(params?: {

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
  }): Observable<AssetSystemInfoGetResp> {

    return this.getAllApiAssetsysteminfoGet$Response(params).pipe(
      map((r: StrictHttpResponse<AssetSystemInfoGetResp>) => r.body as AssetSystemInfoGetResp)
    );
  }

}
