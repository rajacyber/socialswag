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

import { Alerts } from '../models/alerts';
import { AlertsCreate } from '../models/alerts-create';
import { AlertsGetResp } from '../models/alerts-get-resp';

@Injectable({
  providedIn: 'root',
})
export class AlertsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllApiAlertsGet
   */
  static readonly GetAllApiAlertsGetPath = '/api/alerts/';

  /**
   * Get All.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllApiAlertsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiAlertsGet$Response(params?: {

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
  }): Observable<StrictHttpResponse<AlertsGetResp>> {

    const rb = new RequestBuilder(this.rootUrl, AlertsService.GetAllApiAlertsGetPath, 'get');
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
        return r as StrictHttpResponse<AlertsGetResp>;
      })
    );
  }

  /**
   * Get All.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllApiAlertsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiAlertsGet(params?: {

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
  }): Observable<AlertsGetResp> {

    return this.getAllApiAlertsGet$Response(params).pipe(
      map((r: StrictHttpResponse<AlertsGetResp>) => r.body as AlertsGetResp)
    );
  }

  /**
   * Path part for operation createApiAlertsPost
   */
  static readonly CreateApiAlertsPostPath = '/api/alerts/';

  /**
   * Create.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createApiAlertsPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiAlertsPost$Response(params: {
    body: AlertsCreate
  }): Observable<StrictHttpResponse<Alerts>> {

    const rb = new RequestBuilder(this.rootUrl, AlertsService.CreateApiAlertsPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Alerts>;
      })
    );
  }

  /**
   * Create.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createApiAlertsPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiAlertsPost(params: {
    body: AlertsCreate
  }): Observable<Alerts> {

    return this.createApiAlertsPost$Response(params).pipe(
      map((r: StrictHttpResponse<Alerts>) => r.body as Alerts)
    );
  }

  /**
   * Path part for operation getApiAlertsIdGet
   */
  static readonly GetApiAlertsIdGetPath = '/api/alerts/{id}';

  /**
   * Get.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiAlertsIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiAlertsIdGet$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<Alerts>> {

    const rb = new RequestBuilder(this.rootUrl, AlertsService.GetApiAlertsIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Alerts>;
      })
    );
  }

  /**
   * Get.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiAlertsIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiAlertsIdGet(params: {
    id: string;
  }): Observable<Alerts> {

    return this.getApiAlertsIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<Alerts>) => r.body as Alerts)
    );
  }

}
