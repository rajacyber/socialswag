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

import { BodyUploadFileApiSslscandataUploadFilePost } from '../models/body-upload-file-api-sslscandata-upload-file-post';
import { SslScanData } from '../models/ssl-scan-data';
import { SslScanDataCreate } from '../models/ssl-scan-data-create';
import { SslScanDataGetResp } from '../models/ssl-scan-data-get-resp';

@Injectable({
  providedIn: 'root',
})
export class SslScanDataService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllApiSslscandataGet
   */
  static readonly GetAllApiSslscandataGetPath = '/api/sslscandata/';

  /**
   * Get All.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllApiSslscandataGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiSslscandataGet$Response(params?: {
    'q'?: string;
    skip?: number;
    limit?: number;
    sort?: string;
    fields?: string;
  }): Observable<StrictHttpResponse<SslScanDataGetResp>> {

    const rb = new RequestBuilder(this.rootUrl, SslScanDataService.GetAllApiSslscandataGetPath, 'get');
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
        return r as StrictHttpResponse<SslScanDataGetResp>;
      })
    );
  }

  /**
   * Get All.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllApiSslscandataGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiSslscandataGet(params?: {
    'q'?: string;
    skip?: number;
    limit?: number;
    sort?: string;
    fields?: string;
  }): Observable<SslScanDataGetResp> {

    return this.getAllApiSslscandataGet$Response(params).pipe(
      map((r: StrictHttpResponse<SslScanDataGetResp>) => r.body as SslScanDataGetResp)
    );
  }

  /**
   * Path part for operation updateApiSslscandataPut
   */
  static readonly UpdateApiSslscandataPutPath = '/api/sslscandata/';

  /**
   * Update.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateApiSslscandataPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiSslscandataPut$Response(params: {
    body: SslScanData
  }): Observable<StrictHttpResponse<SslScanData>> {

    const rb = new RequestBuilder(this.rootUrl, SslScanDataService.UpdateApiSslscandataPutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SslScanData>;
      })
    );
  }

  /**
   * Update.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateApiSslscandataPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiSslscandataPut(params: {
    body: SslScanData
  }): Observable<SslScanData> {

    return this.updateApiSslscandataPut$Response(params).pipe(
      map((r: StrictHttpResponse<SslScanData>) => r.body as SslScanData)
    );
  }

  /**
   * Path part for operation createApiSslscandataPost
   */
  static readonly CreateApiSslscandataPostPath = '/api/sslscandata/';

  /**
   * Create.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createApiSslscandataPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiSslscandataPost$Response(params: {
    body: SslScanDataCreate
  }): Observable<StrictHttpResponse<SslScanData>> {

    const rb = new RequestBuilder(this.rootUrl, SslScanDataService.CreateApiSslscandataPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SslScanData>;
      })
    );
  }

  /**
   * Create.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createApiSslscandataPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiSslscandataPost(params: {
    body: SslScanDataCreate
  }): Observable<SslScanData> {

    return this.createApiSslscandataPost$Response(params).pipe(
      map((r: StrictHttpResponse<SslScanData>) => r.body as SslScanData)
    );
  }

  /**
   * Path part for operation bulkcreateApiSslscandataBulkcreatePost
   */
  static readonly BulkcreateApiSslscandataBulkcreatePostPath = '/api/sslscandata/bulkcreate';

  /**
   * Bulkcreate.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `bulkcreateApiSslscandataBulkcreatePost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  bulkcreateApiSslscandataBulkcreatePost$Response(params: {
    body: Array<SslScanDataCreate>
  }): Observable<StrictHttpResponse<SslScanData>> {

    const rb = new RequestBuilder(this.rootUrl, SslScanDataService.BulkcreateApiSslscandataBulkcreatePostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SslScanData>;
      })
    );
  }

  /**
   * Bulkcreate.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `bulkcreateApiSslscandataBulkcreatePost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  bulkcreateApiSslscandataBulkcreatePost(params: {
    body: Array<SslScanDataCreate>
  }): Observable<SslScanData> {

    return this.bulkcreateApiSslscandataBulkcreatePost$Response(params).pipe(
      map((r: StrictHttpResponse<SslScanData>) => r.body as SslScanData)
    );
  }

  /**
   * Path part for operation uploadFileApiSslscandataUploadFilePost
   */
  static readonly UploadFileApiSslscandataUploadFilePostPath = '/api/sslscandata/upload_file';

  /**
   * Upload File.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uploadFileApiSslscandataUploadFilePost()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadFileApiSslscandataUploadFilePost$Response(params: {
    body: BodyUploadFileApiSslscandataUploadFilePost
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, SslScanDataService.UploadFileApiSslscandataUploadFilePostPath, 'post');
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
   * To access the full response (for headers, for example), `uploadFileApiSslscandataUploadFilePost$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadFileApiSslscandataUploadFilePost(params: {
    body: BodyUploadFileApiSslscandataUploadFilePost
  }): Observable<any> {

    return this.uploadFileApiSslscandataUploadFilePost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation getApiSslscandataIdGet
   */
  static readonly GetApiSslscandataIdGetPath = '/api/sslscandata/{id}';

  /**
   * Get.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiSslscandataIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiSslscandataIdGet$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<SslScanData>> {

    const rb = new RequestBuilder(this.rootUrl, SslScanDataService.GetApiSslscandataIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SslScanData>;
      })
    );
  }

  /**
   * Get.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiSslscandataIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiSslscandataIdGet(params: {
    id: string;
  }): Observable<SslScanData> {

    return this.getApiSslscandataIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<SslScanData>) => r.body as SslScanData)
    );
  }

  /**
   * Path part for operation deleteApiSslscandataIdDelete
   */
  static readonly DeleteApiSslscandataIdDeletePath = '/api/sslscandata/{id}';

  /**
   * Delete.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteApiSslscandataIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiSslscandataIdDelete$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, SslScanDataService.DeleteApiSslscandataIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `deleteApiSslscandataIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiSslscandataIdDelete(params: {
    id: string;
  }): Observable<any> {

    return this.deleteApiSslscandataIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
