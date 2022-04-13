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

import { NotificationTickets } from '../models/notification-tickets';
import { NotificationTicketsCreate } from '../models/notification-tickets-create';
import { NotificationTicketsGetResp } from '../models/notification-tickets-get-resp';

@Injectable({
  providedIn: 'root',
})
export class NotificationTicketsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllApiNotificationticketsGet
   */
  static readonly GetAllApiNotificationticketsGetPath = '/api/notificationtickets/';

  /**
   * Get All.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllApiNotificationticketsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiNotificationticketsGet$Response(params?: {

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
  }): Observable<StrictHttpResponse<NotificationTicketsGetResp>> {

    const rb = new RequestBuilder(this.rootUrl, NotificationTicketsService.GetAllApiNotificationticketsGetPath, 'get');
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
        return r as StrictHttpResponse<NotificationTicketsGetResp>;
      })
    );
  }

  /**
   * Get All.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllApiNotificationticketsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiNotificationticketsGet(params?: {

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
  }): Observable<NotificationTicketsGetResp> {

    return this.getAllApiNotificationticketsGet$Response(params).pipe(
      map((r: StrictHttpResponse<NotificationTicketsGetResp>) => r.body as NotificationTicketsGetResp)
    );
  }

  /**
   * Path part for operation updateApiNotificationticketsPut
   */
  static readonly UpdateApiNotificationticketsPutPath = '/api/notificationtickets/';

  /**
   * Update.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateApiNotificationticketsPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiNotificationticketsPut$Response(params: {
    body: NotificationTickets
  }): Observable<StrictHttpResponse<NotificationTickets>> {

    const rb = new RequestBuilder(this.rootUrl, NotificationTicketsService.UpdateApiNotificationticketsPutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<NotificationTickets>;
      })
    );
  }

  /**
   * Update.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateApiNotificationticketsPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiNotificationticketsPut(params: {
    body: NotificationTickets
  }): Observable<NotificationTickets> {

    return this.updateApiNotificationticketsPut$Response(params).pipe(
      map((r: StrictHttpResponse<NotificationTickets>) => r.body as NotificationTickets)
    );
  }

  /**
   * Path part for operation createApiNotificationticketsPost
   */
  static readonly CreateApiNotificationticketsPostPath = '/api/notificationtickets/';

  /**
   * Create.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createApiNotificationticketsPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiNotificationticketsPost$Response(params: {
    body: NotificationTicketsCreate
  }): Observable<StrictHttpResponse<NotificationTickets>> {

    const rb = new RequestBuilder(this.rootUrl, NotificationTicketsService.CreateApiNotificationticketsPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<NotificationTickets>;
      })
    );
  }

  /**
   * Create.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createApiNotificationticketsPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiNotificationticketsPost(params: {
    body: NotificationTicketsCreate
  }): Observable<NotificationTickets> {

    return this.createApiNotificationticketsPost$Response(params).pipe(
      map((r: StrictHttpResponse<NotificationTickets>) => r.body as NotificationTickets)
    );
  }

  /**
   * Path part for operation getApiNotificationticketsIdGet
   */
  static readonly GetApiNotificationticketsIdGetPath = '/api/notificationtickets/{id}';

  /**
   * Get.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiNotificationticketsIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiNotificationticketsIdGet$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<NotificationTickets>> {

    const rb = new RequestBuilder(this.rootUrl, NotificationTicketsService.GetApiNotificationticketsIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<NotificationTickets>;
      })
    );
  }

  /**
   * Get.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiNotificationticketsIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiNotificationticketsIdGet(params: {
    id: string;
  }): Observable<NotificationTickets> {

    return this.getApiNotificationticketsIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<NotificationTickets>) => r.body as NotificationTickets)
    );
  }

  /**
   * Path part for operation deleteApiNotificationticketsIdDelete
   */
  static readonly DeleteApiNotificationticketsIdDeletePath = '/api/notificationtickets/{id}';

  /**
   * Delete.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteApiNotificationticketsIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiNotificationticketsIdDelete$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, NotificationTicketsService.DeleteApiNotificationticketsIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `deleteApiNotificationticketsIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiNotificationticketsIdDelete(params: {
    id: string;
  }): Observable<any> {

    return this.deleteApiNotificationticketsIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
