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

import { CompanyStatsTimeseries } from '../models/company-stats-timeseries';
import { CompanyStatsTimeseriesCreate } from '../models/company-stats-timeseries-create';
import { CompanyStatsTimeseriesGetResp } from '../models/company-stats-timeseries-get-resp';

@Injectable({
  providedIn: 'root',
})
export class CompanyStatsTimeseriesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllApiCompanystatstimeseriesGet
   */
  static readonly GetAllApiCompanystatstimeseriesGetPath = '/api/companystatstimeseries/';

  /**
   * Get All.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllApiCompanystatstimeseriesGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiCompanystatstimeseriesGet$Response(params?: {

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
  }): Observable<StrictHttpResponse<CompanyStatsTimeseriesGetResp>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyStatsTimeseriesService.GetAllApiCompanystatstimeseriesGetPath, 'get');
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
        return r as StrictHttpResponse<CompanyStatsTimeseriesGetResp>;
      })
    );
  }

  /**
   * Get All.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllApiCompanystatstimeseriesGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiCompanystatstimeseriesGet(params?: {

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
  }): Observable<CompanyStatsTimeseriesGetResp> {

    return this.getAllApiCompanystatstimeseriesGet$Response(params).pipe(
      map((r: StrictHttpResponse<CompanyStatsTimeseriesGetResp>) => r.body as CompanyStatsTimeseriesGetResp)
    );
  }

  /**
   * Path part for operation updateApiCompanystatstimeseriesPut
   */
  static readonly UpdateApiCompanystatstimeseriesPutPath = '/api/companystatstimeseries/';

  /**
   * Update.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateApiCompanystatstimeseriesPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiCompanystatstimeseriesPut$Response(params: {
    body: CompanyStatsTimeseries
  }): Observable<StrictHttpResponse<CompanyStatsTimeseries>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyStatsTimeseriesService.UpdateApiCompanystatstimeseriesPutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CompanyStatsTimeseries>;
      })
    );
  }

  /**
   * Update.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateApiCompanystatstimeseriesPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiCompanystatstimeseriesPut(params: {
    body: CompanyStatsTimeseries
  }): Observable<CompanyStatsTimeseries> {

    return this.updateApiCompanystatstimeseriesPut$Response(params).pipe(
      map((r: StrictHttpResponse<CompanyStatsTimeseries>) => r.body as CompanyStatsTimeseries)
    );
  }

  /**
   * Path part for operation createApiCompanystatstimeseriesPost
   */
  static readonly CreateApiCompanystatstimeseriesPostPath = '/api/companystatstimeseries/';

  /**
   * Create.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createApiCompanystatstimeseriesPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiCompanystatstimeseriesPost$Response(params: {
    body: CompanyStatsTimeseriesCreate
  }): Observable<StrictHttpResponse<CompanyStatsTimeseries>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyStatsTimeseriesService.CreateApiCompanystatstimeseriesPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CompanyStatsTimeseries>;
      })
    );
  }

  /**
   * Create.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createApiCompanystatstimeseriesPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiCompanystatstimeseriesPost(params: {
    body: CompanyStatsTimeseriesCreate
  }): Observable<CompanyStatsTimeseries> {

    return this.createApiCompanystatstimeseriesPost$Response(params).pipe(
      map((r: StrictHttpResponse<CompanyStatsTimeseries>) => r.body as CompanyStatsTimeseries)
    );
  }

  /**
   * Path part for operation getApiCompanystatstimeseriesIdGet
   */
  static readonly GetApiCompanystatstimeseriesIdGetPath = '/api/companystatstimeseries/{id}';

  /**
   * Get.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiCompanystatstimeseriesIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiCompanystatstimeseriesIdGet$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<CompanyStatsTimeseries>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyStatsTimeseriesService.GetApiCompanystatstimeseriesIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CompanyStatsTimeseries>;
      })
    );
  }

  /**
   * Get.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiCompanystatstimeseriesIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiCompanystatstimeseriesIdGet(params: {
    id: string;
  }): Observable<CompanyStatsTimeseries> {

    return this.getApiCompanystatstimeseriesIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<CompanyStatsTimeseries>) => r.body as CompanyStatsTimeseries)
    );
  }

  /**
   * Path part for operation deleteApiCompanystatstimeseriesIdDelete
   */
  static readonly DeleteApiCompanystatstimeseriesIdDeletePath = '/api/companystatstimeseries/{id}';

  /**
   * Delete.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteApiCompanystatstimeseriesIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiCompanystatstimeseriesIdDelete$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyStatsTimeseriesService.DeleteApiCompanystatstimeseriesIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `deleteApiCompanystatstimeseriesIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiCompanystatstimeseriesIdDelete(params: {
    id: string;
  }): Observable<any> {

    return this.deleteApiCompanystatstimeseriesIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
