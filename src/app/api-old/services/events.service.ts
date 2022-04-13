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

import { Events } from '../models/events';
import { EventsCreate } from '../models/events-create';
import { EventsGetResp } from '../models/events-get-resp';
import { EventscreateNotificationParams } from '../models/eventscreate-notification-params';

@Injectable({
  providedIn: 'root',
})
export class EventsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllApiEventsGet
   */
  static readonly GetAllApiEventsGetPath = '/api/events/';

  /**
   * Get All.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllApiEventsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiEventsGet$Response(params?: {

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
  }): Observable<StrictHttpResponse<EventsGetResp>> {

    const rb = new RequestBuilder(this.rootUrl, EventsService.GetAllApiEventsGetPath, 'get');
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
        return r as StrictHttpResponse<EventsGetResp>;
      })
    );
  }

  /**
   * Get All.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllApiEventsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiEventsGet(params?: {

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
  }): Observable<EventsGetResp> {

    return this.getAllApiEventsGet$Response(params).pipe(
      map((r: StrictHttpResponse<EventsGetResp>) => r.body as EventsGetResp)
    );
  }

  /**
   * Path part for operation createApiEventsPost
   */
  static readonly CreateApiEventsPostPath = '/api/events/';

  /**
   * Create.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createApiEventsPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiEventsPost$Response(params: {
    body: EventsCreate
  }): Observable<StrictHttpResponse<Events>> {

    const rb = new RequestBuilder(this.rootUrl, EventsService.CreateApiEventsPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Events>;
      })
    );
  }

  /**
   * Create.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createApiEventsPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiEventsPost(params: {
    body: EventsCreate
  }): Observable<Events> {

    return this.createApiEventsPost$Response(params).pipe(
      map((r: StrictHttpResponse<Events>) => r.body as Events)
    );
  }

  /**
   * Path part for operation getApiEventsIdGet
   */
  static readonly GetApiEventsIdGetPath = '/api/events/{id}';

  /**
   * Get.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiEventsIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiEventsIdGet$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<Events>> {

    const rb = new RequestBuilder(this.rootUrl, EventsService.GetApiEventsIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Events>;
      })
    );
  }

  /**
   * Get.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiEventsIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiEventsIdGet(params: {
    id: string;
  }): Observable<Events> {

    return this.getApiEventsIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<Events>) => r.body as Events)
    );
  }

  /**
   * Path part for operation eventscreateNotificationApiEventsIdCreateNotificationPost
   */
  static readonly EventscreateNotificationApiEventsIdCreateNotificationPostPath = '/api/events/{id}/createNotification';

  /**
   * Eventscreatenotification.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `eventscreateNotificationApiEventsIdCreateNotificationPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  eventscreateNotificationApiEventsIdCreateNotificationPost$Response(params: {
    id: string;
    body: EventscreateNotificationParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, EventsService.EventscreateNotificationApiEventsIdCreateNotificationPostPath, 'post');
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
   * Eventscreatenotification.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `eventscreateNotificationApiEventsIdCreateNotificationPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  eventscreateNotificationApiEventsIdCreateNotificationPost(params: {
    id: string;
    body: EventscreateNotificationParams
  }): Observable<any> {

    return this.eventscreateNotificationApiEventsIdCreateNotificationPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
