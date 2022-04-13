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

import { Jobs } from '../models/jobs';
import { JobsCreate } from '../models/jobs-create';
import { JobsGetResp } from '../models/jobs-get-resp';
import { JobsterminatejobParams } from '../models/jobsterminatejob-params';
import { JobsupdatejobParams } from '../models/jobsupdatejob-params';

@Injectable({
  providedIn: 'root',
})
export class JobsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllApiJobsGet
   */
  static readonly GetAllApiJobsGetPath = '/api/jobs/';

  /**
   * Get All.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllApiJobsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiJobsGet$Response(params?: {

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
  }): Observable<StrictHttpResponse<JobsGetResp>> {

    const rb = new RequestBuilder(this.rootUrl, JobsService.GetAllApiJobsGetPath, 'get');
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
        return r as StrictHttpResponse<JobsGetResp>;
      })
    );
  }

  /**
   * Get All.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllApiJobsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiJobsGet(params?: {

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
  }): Observable<JobsGetResp> {

    return this.getAllApiJobsGet$Response(params).pipe(
      map((r: StrictHttpResponse<JobsGetResp>) => r.body as JobsGetResp)
    );
  }

  /**
   * Path part for operation updateApiJobsPut
   */
  static readonly UpdateApiJobsPutPath = '/api/jobs/';

  /**
   * Update.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateApiJobsPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiJobsPut$Response(params: {
    body: Jobs
  }): Observable<StrictHttpResponse<Jobs>> {

    const rb = new RequestBuilder(this.rootUrl, JobsService.UpdateApiJobsPutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Jobs>;
      })
    );
  }

  /**
   * Update.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateApiJobsPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiJobsPut(params: {
    body: Jobs
  }): Observable<Jobs> {

    return this.updateApiJobsPut$Response(params).pipe(
      map((r: StrictHttpResponse<Jobs>) => r.body as Jobs)
    );
  }

  /**
   * Path part for operation createApiJobsPost
   */
  static readonly CreateApiJobsPostPath = '/api/jobs/';

  /**
   * Create.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createApiJobsPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiJobsPost$Response(params: {
    body: JobsCreate
  }): Observable<StrictHttpResponse<Jobs>> {

    const rb = new RequestBuilder(this.rootUrl, JobsService.CreateApiJobsPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Jobs>;
      })
    );
  }

  /**
   * Create.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createApiJobsPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiJobsPost(params: {
    body: JobsCreate
  }): Observable<Jobs> {

    return this.createApiJobsPost$Response(params).pipe(
      map((r: StrictHttpResponse<Jobs>) => r.body as Jobs)
    );
  }

  /**
   * Path part for operation getApiJobsIdGet
   */
  static readonly GetApiJobsIdGetPath = '/api/jobs/{id}';

  /**
   * Get.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiJobsIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiJobsIdGet$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<Jobs>> {

    const rb = new RequestBuilder(this.rootUrl, JobsService.GetApiJobsIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Jobs>;
      })
    );
  }

  /**
   * Get.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiJobsIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiJobsIdGet(params: {
    id: string;
  }): Observable<Jobs> {

    return this.getApiJobsIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<Jobs>) => r.body as Jobs)
    );
  }

  /**
   * Path part for operation deleteApiJobsIdDelete
   */
  static readonly DeleteApiJobsIdDeletePath = '/api/jobs/{id}';

  /**
   * Delete.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteApiJobsIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiJobsIdDelete$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, JobsService.DeleteApiJobsIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `deleteApiJobsIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiJobsIdDelete(params: {
    id: string;
  }): Observable<any> {

    return this.deleteApiJobsIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation jobsupdatejobApiJobsIdUpdatejobPost
   */
  static readonly JobsupdatejobApiJobsIdUpdatejobPostPath = '/api/jobs/{id}/updatejob';

  /**
   * Jobsupdatejob.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `jobsupdatejobApiJobsIdUpdatejobPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  jobsupdatejobApiJobsIdUpdatejobPost$Response(params: {
    id: string;
    body: JobsupdatejobParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, JobsService.JobsupdatejobApiJobsIdUpdatejobPostPath, 'post');
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
   * Jobsupdatejob.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `jobsupdatejobApiJobsIdUpdatejobPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  jobsupdatejobApiJobsIdUpdatejobPost(params: {
    id: string;
    body: JobsupdatejobParams
  }): Observable<any> {

    return this.jobsupdatejobApiJobsIdUpdatejobPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation jobsterminatejobApiJobsIdTerminatejobPost
   */
  static readonly JobsterminatejobApiJobsIdTerminatejobPostPath = '/api/jobs/{id}/terminatejob';

  /**
   * Jobsterminatejob.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `jobsterminatejobApiJobsIdTerminatejobPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  jobsterminatejobApiJobsIdTerminatejobPost$Response(params: {
    id: string;
    body: JobsterminatejobParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, JobsService.JobsterminatejobApiJobsIdTerminatejobPostPath, 'post');
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
   * Jobsterminatejob.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `jobsterminatejobApiJobsIdTerminatejobPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  jobsterminatejobApiJobsIdTerminatejobPost(params: {
    id: string;
    body: JobsterminatejobParams
  }): Observable<any> {

    return this.jobsterminatejobApiJobsIdTerminatejobPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
