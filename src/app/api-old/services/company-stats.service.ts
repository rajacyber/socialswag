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

import { CompanyStats } from '../models/company-stats';
import { CompanyStatsCreate } from '../models/company-stats-create';
import { CompanyStatsGetResp } from '../models/company-stats-get-resp';

@Injectable({
  providedIn: 'root',
})
export class CompanyStatsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllApiCompanystatsGet
   */
  static readonly GetAllApiCompanystatsGetPath = '/api/companystats/';

  /**
   * Get All.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllApiCompanystatsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiCompanystatsGet$Response(params?: {

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
  }): Observable<StrictHttpResponse<CompanyStatsGetResp>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyStatsService.GetAllApiCompanystatsGetPath, 'get');
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
        return r as StrictHttpResponse<CompanyStatsGetResp>;
      })
    );
  }

  /**
   * Get All.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllApiCompanystatsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiCompanystatsGet(params?: {

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
  }): Observable<CompanyStatsGetResp> {

    return this.getAllApiCompanystatsGet$Response(params).pipe(
      map((r: StrictHttpResponse<CompanyStatsGetResp>) => r.body as CompanyStatsGetResp)
    );
  }

  /**
   * Path part for operation updateApiCompanystatsPut
   */
  static readonly UpdateApiCompanystatsPutPath = '/api/companystats/';

  /**
   * Update.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateApiCompanystatsPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiCompanystatsPut$Response(params: {
    body: CompanyStats
  }): Observable<StrictHttpResponse<CompanyStats>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyStatsService.UpdateApiCompanystatsPutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CompanyStats>;
      })
    );
  }

  /**
   * Update.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateApiCompanystatsPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiCompanystatsPut(params: {
    body: CompanyStats
  }): Observable<CompanyStats> {

    return this.updateApiCompanystatsPut$Response(params).pipe(
      map((r: StrictHttpResponse<CompanyStats>) => r.body as CompanyStats)
    );
  }

  /**
   * Path part for operation createApiCompanystatsPost
   */
  static readonly CreateApiCompanystatsPostPath = '/api/companystats/';

  /**
   * Create.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createApiCompanystatsPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiCompanystatsPost$Response(params: {
    body: CompanyStatsCreate
  }): Observable<StrictHttpResponse<CompanyStats>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyStatsService.CreateApiCompanystatsPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CompanyStats>;
      })
    );
  }

  /**
   * Create.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createApiCompanystatsPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiCompanystatsPost(params: {
    body: CompanyStatsCreate
  }): Observable<CompanyStats> {

    return this.createApiCompanystatsPost$Response(params).pipe(
      map((r: StrictHttpResponse<CompanyStats>) => r.body as CompanyStats)
    );
  }

  /**
   * Path part for operation getApiCompanystatsIdGet
   */
  static readonly GetApiCompanystatsIdGetPath = '/api/companystats/{id}';

  /**
   * Get.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiCompanystatsIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiCompanystatsIdGet$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<CompanyStats>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyStatsService.GetApiCompanystatsIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CompanyStats>;
      })
    );
  }

  /**
   * Get.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiCompanystatsIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiCompanystatsIdGet(params: {
    id: string;
  }): Observable<CompanyStats> {

    return this.getApiCompanystatsIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<CompanyStats>) => r.body as CompanyStats)
    );
  }

  /**
   * Path part for operation deleteApiCompanystatsIdDelete
   */
  static readonly DeleteApiCompanystatsIdDeletePath = '/api/companystats/{id}';

  /**
   * Delete.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteApiCompanystatsIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiCompanystatsIdDelete$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyStatsService.DeleteApiCompanystatsIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `deleteApiCompanystatsIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiCompanystatsIdDelete(params: {
    id: string;
  }): Observable<any> {

    return this.deleteApiCompanystatsIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
