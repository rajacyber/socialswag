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

import { Scheduler } from '../models/scheduler';
import { SchedulerCreate } from '../models/scheduler-create';
import { SchedulerGetResp } from '../models/scheduler-get-resp';
import { SchedulergetScheduleTemplatesParams } from '../models/schedulerget-schedule-templates-params';

@Injectable({
  providedIn: 'root',
})
export class SchedulerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllApiSchedulerGet
   */
  static readonly GetAllApiSchedulerGetPath = '/api/scheduler/';

  /**
   * Get All.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllApiSchedulerGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiSchedulerGet$Response(params?: {

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
  }): Observable<StrictHttpResponse<SchedulerGetResp>> {

    const rb = new RequestBuilder(this.rootUrl, SchedulerService.GetAllApiSchedulerGetPath, 'get');
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
        return r as StrictHttpResponse<SchedulerGetResp>;
      })
    );
  }

  /**
   * Get All.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllApiSchedulerGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiSchedulerGet(params?: {

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
  }): Observable<SchedulerGetResp> {

    return this.getAllApiSchedulerGet$Response(params).pipe(
      map((r: StrictHttpResponse<SchedulerGetResp>) => r.body as SchedulerGetResp)
    );
  }

  /**
   * Path part for operation updateApiSchedulerPut
   */
  static readonly UpdateApiSchedulerPutPath = '/api/scheduler/';

  /**
   * Update.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateApiSchedulerPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiSchedulerPut$Response(params: {
    body: Scheduler
  }): Observable<StrictHttpResponse<Scheduler>> {

    const rb = new RequestBuilder(this.rootUrl, SchedulerService.UpdateApiSchedulerPutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Scheduler>;
      })
    );
  }

  /**
   * Update.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateApiSchedulerPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiSchedulerPut(params: {
    body: Scheduler
  }): Observable<Scheduler> {

    return this.updateApiSchedulerPut$Response(params).pipe(
      map((r: StrictHttpResponse<Scheduler>) => r.body as Scheduler)
    );
  }

  /**
   * Path part for operation createApiSchedulerPost
   */
  static readonly CreateApiSchedulerPostPath = '/api/scheduler/';

  /**
   * Create.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createApiSchedulerPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiSchedulerPost$Response(params: {
    body: SchedulerCreate
  }): Observable<StrictHttpResponse<Scheduler>> {

    const rb = new RequestBuilder(this.rootUrl, SchedulerService.CreateApiSchedulerPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Scheduler>;
      })
    );
  }

  /**
   * Create.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createApiSchedulerPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiSchedulerPost(params: {
    body: SchedulerCreate
  }): Observable<Scheduler> {

    return this.createApiSchedulerPost$Response(params).pipe(
      map((r: StrictHttpResponse<Scheduler>) => r.body as Scheduler)
    );
  }

  /**
   * Path part for operation getApiSchedulerIdGet
   */
  static readonly GetApiSchedulerIdGetPath = '/api/scheduler/{id}';

  /**
   * Get.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiSchedulerIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiSchedulerIdGet$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<Scheduler>> {

    const rb = new RequestBuilder(this.rootUrl, SchedulerService.GetApiSchedulerIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Scheduler>;
      })
    );
  }

  /**
   * Get.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiSchedulerIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiSchedulerIdGet(params: {
    id: string;
  }): Observable<Scheduler> {

    return this.getApiSchedulerIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<Scheduler>) => r.body as Scheduler)
    );
  }

  /**
   * Path part for operation deleteApiSchedulerIdDelete
   */
  static readonly DeleteApiSchedulerIdDeletePath = '/api/scheduler/{id}';

  /**
   * Delete.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteApiSchedulerIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiSchedulerIdDelete$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, SchedulerService.DeleteApiSchedulerIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `deleteApiSchedulerIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiSchedulerIdDelete(params: {
    id: string;
  }): Observable<any> {

    return this.deleteApiSchedulerIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation schedulergetScheduleTemplatesApiSchedulerIdGetScheduleTemplatesPost
   */
  static readonly SchedulergetScheduleTemplatesApiSchedulerIdGetScheduleTemplatesPostPath = '/api/scheduler/{id}/getScheduleTemplates';

  /**
   * Schedulergetscheduletemplates.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `schedulergetScheduleTemplatesApiSchedulerIdGetScheduleTemplatesPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  schedulergetScheduleTemplatesApiSchedulerIdGetScheduleTemplatesPost$Response(params: {
    id: string;
    body: SchedulergetScheduleTemplatesParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, SchedulerService.SchedulergetScheduleTemplatesApiSchedulerIdGetScheduleTemplatesPostPath, 'post');
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
   * Schedulergetscheduletemplates.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `schedulergetScheduleTemplatesApiSchedulerIdGetScheduleTemplatesPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  schedulergetScheduleTemplatesApiSchedulerIdGetScheduleTemplatesPost(params: {
    id: string;
    body: SchedulergetScheduleTemplatesParams
  }): Observable<any> {

    return this.schedulergetScheduleTemplatesApiSchedulerIdGetScheduleTemplatesPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
