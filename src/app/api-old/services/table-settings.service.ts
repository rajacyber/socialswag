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

import { TableSettings } from '../models/table-settings';
import { TableSettingsCreate } from '../models/table-settings-create';
import { TableSettingsGetResp } from '../models/table-settings-get-resp';

@Injectable({
  providedIn: 'root',
})
export class TableSettingsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllApiTablesettingsGet
   */
  static readonly GetAllApiTablesettingsGetPath = '/api/tablesettings/';

  /**
   * Get All.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllApiTablesettingsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiTablesettingsGet$Response(params?: {

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
  }): Observable<StrictHttpResponse<TableSettingsGetResp>> {

    const rb = new RequestBuilder(this.rootUrl, TableSettingsService.GetAllApiTablesettingsGetPath, 'get');
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
        return r as StrictHttpResponse<TableSettingsGetResp>;
      })
    );
  }

  /**
   * Get All.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllApiTablesettingsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiTablesettingsGet(params?: {

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
  }): Observable<TableSettingsGetResp> {

    return this.getAllApiTablesettingsGet$Response(params).pipe(
      map((r: StrictHttpResponse<TableSettingsGetResp>) => r.body as TableSettingsGetResp)
    );
  }

  /**
   * Path part for operation updateApiTablesettingsPut
   */
  static readonly UpdateApiTablesettingsPutPath = '/api/tablesettings/';

  /**
   * Update.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateApiTablesettingsPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiTablesettingsPut$Response(params: {
    body: TableSettings
  }): Observable<StrictHttpResponse<TableSettings>> {

    const rb = new RequestBuilder(this.rootUrl, TableSettingsService.UpdateApiTablesettingsPutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TableSettings>;
      })
    );
  }

  /**
   * Update.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateApiTablesettingsPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiTablesettingsPut(params: {
    body: TableSettings
  }): Observable<TableSettings> {

    return this.updateApiTablesettingsPut$Response(params).pipe(
      map((r: StrictHttpResponse<TableSettings>) => r.body as TableSettings)
    );
  }

  /**
   * Path part for operation createApiTablesettingsPost
   */
  static readonly CreateApiTablesettingsPostPath = '/api/tablesettings/';

  /**
   * Create.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createApiTablesettingsPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiTablesettingsPost$Response(params: {
    body: TableSettingsCreate
  }): Observable<StrictHttpResponse<TableSettings>> {

    const rb = new RequestBuilder(this.rootUrl, TableSettingsService.CreateApiTablesettingsPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TableSettings>;
      })
    );
  }

  /**
   * Create.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createApiTablesettingsPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiTablesettingsPost(params: {
    body: TableSettingsCreate
  }): Observable<TableSettings> {

    return this.createApiTablesettingsPost$Response(params).pipe(
      map((r: StrictHttpResponse<TableSettings>) => r.body as TableSettings)
    );
  }

  /**
   * Path part for operation getApiTablesettingsIdGet
   */
  static readonly GetApiTablesettingsIdGetPath = '/api/tablesettings/{id}';

  /**
   * Get.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiTablesettingsIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiTablesettingsIdGet$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<TableSettings>> {

    const rb = new RequestBuilder(this.rootUrl, TableSettingsService.GetApiTablesettingsIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TableSettings>;
      })
    );
  }

  /**
   * Get.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiTablesettingsIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiTablesettingsIdGet(params: {
    id: string;
  }): Observable<TableSettings> {

    return this.getApiTablesettingsIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<TableSettings>) => r.body as TableSettings)
    );
  }

  /**
   * Path part for operation deleteApiTablesettingsIdDelete
   */
  static readonly DeleteApiTablesettingsIdDeletePath = '/api/tablesettings/{id}';

  /**
   * Delete.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteApiTablesettingsIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiTablesettingsIdDelete$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, TableSettingsService.DeleteApiTablesettingsIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `deleteApiTablesettingsIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiTablesettingsIdDelete(params: {
    id: string;
  }): Observable<any> {

    return this.deleteApiTablesettingsIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
