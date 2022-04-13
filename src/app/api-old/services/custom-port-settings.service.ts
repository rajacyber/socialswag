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

import { CustomPortSettings } from '../models/custom-port-settings';
import { CustomPortSettingsCreate } from '../models/custom-port-settings-create';
import { CustomPortSettingsGetResp } from '../models/custom-port-settings-get-resp';

@Injectable({
  providedIn: 'root',
})
export class CustomPortSettingsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllApiCustomportsettingsGet
   */
  static readonly GetAllApiCustomportsettingsGetPath = '/api/customportsettings/';

  /**
   * Get All.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllApiCustomportsettingsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiCustomportsettingsGet$Response(params?: {

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
  }): Observable<StrictHttpResponse<CustomPortSettingsGetResp>> {

    const rb = new RequestBuilder(this.rootUrl, CustomPortSettingsService.GetAllApiCustomportsettingsGetPath, 'get');
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
        return r as StrictHttpResponse<CustomPortSettingsGetResp>;
      })
    );
  }

  /**
   * Get All.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllApiCustomportsettingsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiCustomportsettingsGet(params?: {

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
  }): Observable<CustomPortSettingsGetResp> {

    return this.getAllApiCustomportsettingsGet$Response(params).pipe(
      map((r: StrictHttpResponse<CustomPortSettingsGetResp>) => r.body as CustomPortSettingsGetResp)
    );
  }

  /**
   * Path part for operation updateApiCustomportsettingsPut
   */
  static readonly UpdateApiCustomportsettingsPutPath = '/api/customportsettings/';

  /**
   * Update.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateApiCustomportsettingsPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiCustomportsettingsPut$Response(params: {
    body: CustomPortSettings
  }): Observable<StrictHttpResponse<CustomPortSettings>> {

    const rb = new RequestBuilder(this.rootUrl, CustomPortSettingsService.UpdateApiCustomportsettingsPutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CustomPortSettings>;
      })
    );
  }

  /**
   * Update.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateApiCustomportsettingsPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiCustomportsettingsPut(params: {
    body: CustomPortSettings
  }): Observable<CustomPortSettings> {

    return this.updateApiCustomportsettingsPut$Response(params).pipe(
      map((r: StrictHttpResponse<CustomPortSettings>) => r.body as CustomPortSettings)
    );
  }

  /**
   * Path part for operation createApiCustomportsettingsPost
   */
  static readonly CreateApiCustomportsettingsPostPath = '/api/customportsettings/';

  /**
   * Create.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createApiCustomportsettingsPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiCustomportsettingsPost$Response(params: {
    body: CustomPortSettingsCreate
  }): Observable<StrictHttpResponse<CustomPortSettings>> {

    const rb = new RequestBuilder(this.rootUrl, CustomPortSettingsService.CreateApiCustomportsettingsPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CustomPortSettings>;
      })
    );
  }

  /**
   * Create.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createApiCustomportsettingsPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiCustomportsettingsPost(params: {
    body: CustomPortSettingsCreate
  }): Observable<CustomPortSettings> {

    return this.createApiCustomportsettingsPost$Response(params).pipe(
      map((r: StrictHttpResponse<CustomPortSettings>) => r.body as CustomPortSettings)
    );
  }

  /**
   * Path part for operation getApiCustomportsettingsIdGet
   */
  static readonly GetApiCustomportsettingsIdGetPath = '/api/customportsettings/{id}';

  /**
   * Get.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiCustomportsettingsIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiCustomportsettingsIdGet$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<CustomPortSettings>> {

    const rb = new RequestBuilder(this.rootUrl, CustomPortSettingsService.GetApiCustomportsettingsIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CustomPortSettings>;
      })
    );
  }

  /**
   * Get.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiCustomportsettingsIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiCustomportsettingsIdGet(params: {
    id: string;
  }): Observable<CustomPortSettings> {

    return this.getApiCustomportsettingsIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<CustomPortSettings>) => r.body as CustomPortSettings)
    );
  }

  /**
   * Path part for operation deleteApiCustomportsettingsIdDelete
   */
  static readonly DeleteApiCustomportsettingsIdDeletePath = '/api/customportsettings/{id}';

  /**
   * Delete.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteApiCustomportsettingsIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiCustomportsettingsIdDelete$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CustomPortSettingsService.DeleteApiCustomportsettingsIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `deleteApiCustomportsettingsIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiCustomportsettingsIdDelete(params: {
    id: string;
  }): Observable<any> {

    return this.deleteApiCustomportsettingsIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
