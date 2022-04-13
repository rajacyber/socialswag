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

import { DiscoverySettings } from '../models/discovery-settings';
import { DiscoverySettingsCreate } from '../models/discovery-settings-create';
import { DiscoverySettingsGetResp } from '../models/discovery-settings-get-resp';

@Injectable({
  providedIn: 'root',
})
export class DiscoverySettingsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllApiDiscoverysettingsGet
   */
  static readonly GetAllApiDiscoverysettingsGetPath = '/api/discoverysettings/';

  /**
   * Get All.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllApiDiscoverysettingsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiDiscoverysettingsGet$Response(params?: {

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
  }): Observable<StrictHttpResponse<DiscoverySettingsGetResp>> {

    const rb = new RequestBuilder(this.rootUrl, DiscoverySettingsService.GetAllApiDiscoverysettingsGetPath, 'get');
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
        return r as StrictHttpResponse<DiscoverySettingsGetResp>;
      })
    );
  }

  /**
   * Get All.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllApiDiscoverysettingsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiDiscoverysettingsGet(params?: {

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
  }): Observable<DiscoverySettingsGetResp> {

    return this.getAllApiDiscoverysettingsGet$Response(params).pipe(
      map((r: StrictHttpResponse<DiscoverySettingsGetResp>) => r.body as DiscoverySettingsGetResp)
    );
  }

  /**
   * Path part for operation updateApiDiscoverysettingsPut
   */
  static readonly UpdateApiDiscoverysettingsPutPath = '/api/discoverysettings/';

  /**
   * Update.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateApiDiscoverysettingsPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiDiscoverysettingsPut$Response(params: {
    body: DiscoverySettings
  }): Observable<StrictHttpResponse<DiscoverySettings>> {

    const rb = new RequestBuilder(this.rootUrl, DiscoverySettingsService.UpdateApiDiscoverysettingsPutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<DiscoverySettings>;
      })
    );
  }

  /**
   * Update.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateApiDiscoverysettingsPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiDiscoverysettingsPut(params: {
    body: DiscoverySettings
  }): Observable<DiscoverySettings> {

    return this.updateApiDiscoverysettingsPut$Response(params).pipe(
      map((r: StrictHttpResponse<DiscoverySettings>) => r.body as DiscoverySettings)
    );
  }

  /**
   * Path part for operation createApiDiscoverysettingsPost
   */
  static readonly CreateApiDiscoverysettingsPostPath = '/api/discoverysettings/';

  /**
   * Create.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createApiDiscoverysettingsPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiDiscoverysettingsPost$Response(params: {
    body: DiscoverySettingsCreate
  }): Observable<StrictHttpResponse<DiscoverySettings>> {

    const rb = new RequestBuilder(this.rootUrl, DiscoverySettingsService.CreateApiDiscoverysettingsPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<DiscoverySettings>;
      })
    );
  }

  /**
   * Create.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createApiDiscoverysettingsPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiDiscoverysettingsPost(params: {
    body: DiscoverySettingsCreate
  }): Observable<DiscoverySettings> {

    return this.createApiDiscoverysettingsPost$Response(params).pipe(
      map((r: StrictHttpResponse<DiscoverySettings>) => r.body as DiscoverySettings)
    );
  }

  /**
   * Path part for operation getApiDiscoverysettingsIdGet
   */
  static readonly GetApiDiscoverysettingsIdGetPath = '/api/discoverysettings/{id}';

  /**
   * Get.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiDiscoverysettingsIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiDiscoverysettingsIdGet$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<DiscoverySettings>> {

    const rb = new RequestBuilder(this.rootUrl, DiscoverySettingsService.GetApiDiscoverysettingsIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<DiscoverySettings>;
      })
    );
  }

  /**
   * Get.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiDiscoverysettingsIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiDiscoverysettingsIdGet(params: {
    id: string;
  }): Observable<DiscoverySettings> {

    return this.getApiDiscoverysettingsIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<DiscoverySettings>) => r.body as DiscoverySettings)
    );
  }

  /**
   * Path part for operation deleteApiDiscoverysettingsIdDelete
   */
  static readonly DeleteApiDiscoverysettingsIdDeletePath = '/api/discoverysettings/{id}';

  /**
   * Delete.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteApiDiscoverysettingsIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiDiscoverysettingsIdDelete$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, DiscoverySettingsService.DeleteApiDiscoverysettingsIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `deleteApiDiscoverysettingsIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiDiscoverysettingsIdDelete(params: {
    id: string;
  }): Observable<any> {

    return this.deleteApiDiscoverysettingsIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
