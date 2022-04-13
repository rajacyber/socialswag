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

import { NotificationRules } from '../models/notification-rules';
import { NotificationRulesCreate } from '../models/notification-rules-create';
import { NotificationRulesGetResp } from '../models/notification-rules-get-resp';
import { NotificationRulesgetAlertingRulesParams } from '../models/notification-rulesget-alerting-rules-params';

@Injectable({
  providedIn: 'root',
})
export class NotificationRulesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllApiNotificationrulesGet
   */
  static readonly GetAllApiNotificationrulesGetPath = '/api/notificationrules/';

  /**
   * Get All.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllApiNotificationrulesGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiNotificationrulesGet$Response(params?: {

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
  }): Observable<StrictHttpResponse<NotificationRulesGetResp>> {

    const rb = new RequestBuilder(this.rootUrl, NotificationRulesService.GetAllApiNotificationrulesGetPath, 'get');
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
        return r as StrictHttpResponse<NotificationRulesGetResp>;
      })
    );
  }

  /**
   * Get All.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllApiNotificationrulesGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiNotificationrulesGet(params?: {

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
  }): Observable<NotificationRulesGetResp> {

    return this.getAllApiNotificationrulesGet$Response(params).pipe(
      map((r: StrictHttpResponse<NotificationRulesGetResp>) => r.body as NotificationRulesGetResp)
    );
  }

  /**
   * Path part for operation updateApiNotificationrulesPut
   */
  static readonly UpdateApiNotificationrulesPutPath = '/api/notificationrules/';

  /**
   * Update.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateApiNotificationrulesPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiNotificationrulesPut$Response(params: {
    body: NotificationRules
  }): Observable<StrictHttpResponse<NotificationRules>> {

    const rb = new RequestBuilder(this.rootUrl, NotificationRulesService.UpdateApiNotificationrulesPutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<NotificationRules>;
      })
    );
  }

  /**
   * Update.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateApiNotificationrulesPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiNotificationrulesPut(params: {
    body: NotificationRules
  }): Observable<NotificationRules> {

    return this.updateApiNotificationrulesPut$Response(params).pipe(
      map((r: StrictHttpResponse<NotificationRules>) => r.body as NotificationRules)
    );
  }

  /**
   * Path part for operation createApiNotificationrulesPost
   */
  static readonly CreateApiNotificationrulesPostPath = '/api/notificationrules/';

  /**
   * Create.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createApiNotificationrulesPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiNotificationrulesPost$Response(params: {
    body: NotificationRulesCreate
  }): Observable<StrictHttpResponse<NotificationRules>> {

    const rb = new RequestBuilder(this.rootUrl, NotificationRulesService.CreateApiNotificationrulesPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<NotificationRules>;
      })
    );
  }

  /**
   * Create.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createApiNotificationrulesPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiNotificationrulesPost(params: {
    body: NotificationRulesCreate
  }): Observable<NotificationRules> {

    return this.createApiNotificationrulesPost$Response(params).pipe(
      map((r: StrictHttpResponse<NotificationRules>) => r.body as NotificationRules)
    );
  }

  /**
   * Path part for operation getApiNotificationrulesIdGet
   */
  static readonly GetApiNotificationrulesIdGetPath = '/api/notificationrules/{id}';

  /**
   * Get.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiNotificationrulesIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiNotificationrulesIdGet$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<NotificationRules>> {

    const rb = new RequestBuilder(this.rootUrl, NotificationRulesService.GetApiNotificationrulesIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<NotificationRules>;
      })
    );
  }

  /**
   * Get.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiNotificationrulesIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiNotificationrulesIdGet(params: {
    id: string;
  }): Observable<NotificationRules> {

    return this.getApiNotificationrulesIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<NotificationRules>) => r.body as NotificationRules)
    );
  }

  /**
   * Path part for operation deleteApiNotificationrulesIdDelete
   */
  static readonly DeleteApiNotificationrulesIdDeletePath = '/api/notificationrules/{id}';

  /**
   * Delete.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteApiNotificationrulesIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiNotificationrulesIdDelete$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, NotificationRulesService.DeleteApiNotificationrulesIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `deleteApiNotificationrulesIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiNotificationrulesIdDelete(params: {
    id: string;
  }): Observable<any> {

    return this.deleteApiNotificationrulesIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation notificationRulesgetAlertingRulesApiNotificationrulesIdGetAlertingRulesPost
   */
  static readonly NotificationRulesgetAlertingRulesApiNotificationrulesIdGetAlertingRulesPostPath = '/api/notificationrules/{id}/getAlertingRules';

  /**
   * Notificationrulesgetalertingrules.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `notificationRulesgetAlertingRulesApiNotificationrulesIdGetAlertingRulesPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  notificationRulesgetAlertingRulesApiNotificationrulesIdGetAlertingRulesPost$Response(params: {
    id: string;
    body: NotificationRulesgetAlertingRulesParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, NotificationRulesService.NotificationRulesgetAlertingRulesApiNotificationrulesIdGetAlertingRulesPostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
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
   * Notificationrulesgetalertingrules.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `notificationRulesgetAlertingRulesApiNotificationrulesIdGetAlertingRulesPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  notificationRulesgetAlertingRulesApiNotificationrulesIdGetAlertingRulesPost(params: {
    id: string;
    body: NotificationRulesgetAlertingRulesParams
  }): Observable<any> {

    return this.notificationRulesgetAlertingRulesApiNotificationrulesIdGetAlertingRulesPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
