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

import { BodyUploadFileApiExternalscantimeseriesdataUploadFilePost } from '../models/body-upload-file-api-externalscantimeseriesdata-upload-file-post';
import { ExternalScanTimeSeriesData } from '../models/external-scan-time-series-data';
import { ExternalScanTimeSeriesDataCreate } from '../models/external-scan-time-series-data-create';
import { ExternalScanTimeSeriesDataGetResp } from '../models/external-scan-time-series-data-get-resp';

@Injectable({
  providedIn: 'root',
})
export class ExternalScanTimeSeriesDataService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllApiExternalscantimeseriesdataGet
   */
  static readonly GetAllApiExternalscantimeseriesdataGetPath = '/api/externalscantimeseriesdata/';

  /**
   * Get All.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllApiExternalscantimeseriesdataGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiExternalscantimeseriesdataGet$Response(params?: {
    'q'?: string;
    skip?: number;
    limit?: number;
    sort?: string;
    fields?: string;
  }): Observable<StrictHttpResponse<ExternalScanTimeSeriesDataGetResp>> {

    const rb = new RequestBuilder(this.rootUrl, ExternalScanTimeSeriesDataService.GetAllApiExternalscantimeseriesdataGetPath, 'get');
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
        return r as StrictHttpResponse<ExternalScanTimeSeriesDataGetResp>;
      })
    );
  }

  /**
   * Get All.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllApiExternalscantimeseriesdataGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiExternalscantimeseriesdataGet(params?: {
    'q'?: string;
    skip?: number;
    limit?: number;
    sort?: string;
    fields?: string;
  }): Observable<ExternalScanTimeSeriesDataGetResp> {

    return this.getAllApiExternalscantimeseriesdataGet$Response(params).pipe(
      map((r: StrictHttpResponse<ExternalScanTimeSeriesDataGetResp>) => r.body as ExternalScanTimeSeriesDataGetResp)
    );
  }

  /**
   * Path part for operation updateApiExternalscantimeseriesdataPut
   */
  static readonly UpdateApiExternalscantimeseriesdataPutPath = '/api/externalscantimeseriesdata/';

  /**
   * Update.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateApiExternalscantimeseriesdataPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiExternalscantimeseriesdataPut$Response(params: {
    body: ExternalScanTimeSeriesData
  }): Observable<StrictHttpResponse<ExternalScanTimeSeriesData>> {

    const rb = new RequestBuilder(this.rootUrl, ExternalScanTimeSeriesDataService.UpdateApiExternalscantimeseriesdataPutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ExternalScanTimeSeriesData>;
      })
    );
  }

  /**
   * Update.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateApiExternalscantimeseriesdataPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiExternalscantimeseriesdataPut(params: {
    body: ExternalScanTimeSeriesData
  }): Observable<ExternalScanTimeSeriesData> {

    return this.updateApiExternalscantimeseriesdataPut$Response(params).pipe(
      map((r: StrictHttpResponse<ExternalScanTimeSeriesData>) => r.body as ExternalScanTimeSeriesData)
    );
  }

  /**
   * Path part for operation createApiExternalscantimeseriesdataPost
   */
  static readonly CreateApiExternalscantimeseriesdataPostPath = '/api/externalscantimeseriesdata/';

  /**
   * Create.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createApiExternalscantimeseriesdataPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiExternalscantimeseriesdataPost$Response(params: {
    body: ExternalScanTimeSeriesDataCreate
  }): Observable<StrictHttpResponse<ExternalScanTimeSeriesData>> {

    const rb = new RequestBuilder(this.rootUrl, ExternalScanTimeSeriesDataService.CreateApiExternalscantimeseriesdataPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ExternalScanTimeSeriesData>;
      })
    );
  }

  /**
   * Create.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createApiExternalscantimeseriesdataPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiExternalscantimeseriesdataPost(params: {
    body: ExternalScanTimeSeriesDataCreate
  }): Observable<ExternalScanTimeSeriesData> {

    return this.createApiExternalscantimeseriesdataPost$Response(params).pipe(
      map((r: StrictHttpResponse<ExternalScanTimeSeriesData>) => r.body as ExternalScanTimeSeriesData)
    );
  }

  /**
   * Path part for operation bulkcreateApiExternalscantimeseriesdataBulkcreatePost
   */
  static readonly BulkcreateApiExternalscantimeseriesdataBulkcreatePostPath = '/api/externalscantimeseriesdata/bulkcreate';

  /**
   * Bulkcreate.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `bulkcreateApiExternalscantimeseriesdataBulkcreatePost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  bulkcreateApiExternalscantimeseriesdataBulkcreatePost$Response(params: {
    body: Array<ExternalScanTimeSeriesDataCreate>
  }): Observable<StrictHttpResponse<ExternalScanTimeSeriesData>> {

    const rb = new RequestBuilder(this.rootUrl, ExternalScanTimeSeriesDataService.BulkcreateApiExternalscantimeseriesdataBulkcreatePostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ExternalScanTimeSeriesData>;
      })
    );
  }

  /**
   * Bulkcreate.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `bulkcreateApiExternalscantimeseriesdataBulkcreatePost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  bulkcreateApiExternalscantimeseriesdataBulkcreatePost(params: {
    body: Array<ExternalScanTimeSeriesDataCreate>
  }): Observable<ExternalScanTimeSeriesData> {

    return this.bulkcreateApiExternalscantimeseriesdataBulkcreatePost$Response(params).pipe(
      map((r: StrictHttpResponse<ExternalScanTimeSeriesData>) => r.body as ExternalScanTimeSeriesData)
    );
  }

  /**
   * Path part for operation uploadFileApiExternalscantimeseriesdataUploadFilePost
   */
  static readonly UploadFileApiExternalscantimeseriesdataUploadFilePostPath = '/api/externalscantimeseriesdata/upload_file';

  /**
   * Upload File.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uploadFileApiExternalscantimeseriesdataUploadFilePost()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadFileApiExternalscantimeseriesdataUploadFilePost$Response(params: {
    body: BodyUploadFileApiExternalscantimeseriesdataUploadFilePost
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, ExternalScanTimeSeriesDataService.UploadFileApiExternalscantimeseriesdataUploadFilePostPath, 'post');
    if (params) {
      rb.body(params.body, 'multipart/form-data');
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
   * Upload File.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `uploadFileApiExternalscantimeseriesdataUploadFilePost$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadFileApiExternalscantimeseriesdataUploadFilePost(params: {
    body: BodyUploadFileApiExternalscantimeseriesdataUploadFilePost
  }): Observable<any> {

    return this.uploadFileApiExternalscantimeseriesdataUploadFilePost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation getApiExternalscantimeseriesdataIdGet
   */
  static readonly GetApiExternalscantimeseriesdataIdGetPath = '/api/externalscantimeseriesdata/{id}';

  /**
   * Get.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiExternalscantimeseriesdataIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiExternalscantimeseriesdataIdGet$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<ExternalScanTimeSeriesData>> {

    const rb = new RequestBuilder(this.rootUrl, ExternalScanTimeSeriesDataService.GetApiExternalscantimeseriesdataIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ExternalScanTimeSeriesData>;
      })
    );
  }

  /**
   * Get.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiExternalscantimeseriesdataIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiExternalscantimeseriesdataIdGet(params: {
    id: string;
  }): Observable<ExternalScanTimeSeriesData> {

    return this.getApiExternalscantimeseriesdataIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<ExternalScanTimeSeriesData>) => r.body as ExternalScanTimeSeriesData)
    );
  }

  /**
   * Path part for operation deleteApiExternalscantimeseriesdataIdDelete
   */
  static readonly DeleteApiExternalscantimeseriesdataIdDeletePath = '/api/externalscantimeseriesdata/{id}';

  /**
   * Delete.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteApiExternalscantimeseriesdataIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiExternalscantimeseriesdataIdDelete$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, ExternalScanTimeSeriesDataService.DeleteApiExternalscantimeseriesdataIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `deleteApiExternalscantimeseriesdataIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiExternalscantimeseriesdataIdDelete(params: {
    id: string;
  }): Observable<any> {

    return this.deleteApiExternalscantimeseriesdataIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
