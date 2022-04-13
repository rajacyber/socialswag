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

import { BodyUploadFileApiExternalnetworkvulsUploadFilePost } from '../models/body-upload-file-api-externalnetworkvuls-upload-file-post';
import { ExternalNetworkVuls } from '../models/external-network-vuls';
import { ExternalNetworkVulsCreate } from '../models/external-network-vuls-create';
import { ExternalNetworkVulsGetResp } from '../models/external-network-vuls-get-resp';

@Injectable({
  providedIn: 'root',
})
export class ExternalNetworkVulsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllApiExternalnetworkvulsGet
   */
  static readonly GetAllApiExternalnetworkvulsGetPath = '/api/externalnetworkvuls/';

  /**
   * Get All.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllApiExternalnetworkvulsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiExternalnetworkvulsGet$Response(params?: {
    'q'?: string;
    skip?: number;
    limit?: number;
    sort?: string;
    fields?: string;
  }): Observable<StrictHttpResponse<ExternalNetworkVulsGetResp>> {

    const rb = new RequestBuilder(this.rootUrl, ExternalNetworkVulsService.GetAllApiExternalnetworkvulsGetPath, 'get');
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
        return r as StrictHttpResponse<ExternalNetworkVulsGetResp>;
      })
    );
  }

  /**
   * Get All.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllApiExternalnetworkvulsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiExternalnetworkvulsGet(params?: {
    'q'?: string;
    skip?: number;
    limit?: number;
    sort?: string;
    fields?: string;
  }): Observable<ExternalNetworkVulsGetResp> {

    return this.getAllApiExternalnetworkvulsGet$Response(params).pipe(
      map((r: StrictHttpResponse<ExternalNetworkVulsGetResp>) => r.body as ExternalNetworkVulsGetResp)
    );
  }

  /**
   * Path part for operation updateApiExternalnetworkvulsPut
   */
  static readonly UpdateApiExternalnetworkvulsPutPath = '/api/externalnetworkvuls/';

  /**
   * Update.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateApiExternalnetworkvulsPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiExternalnetworkvulsPut$Response(params: {
    body: ExternalNetworkVuls
  }): Observable<StrictHttpResponse<ExternalNetworkVuls>> {

    const rb = new RequestBuilder(this.rootUrl, ExternalNetworkVulsService.UpdateApiExternalnetworkvulsPutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ExternalNetworkVuls>;
      })
    );
  }

  /**
   * Update.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateApiExternalnetworkvulsPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiExternalnetworkvulsPut(params: {
    body: ExternalNetworkVuls
  }): Observable<ExternalNetworkVuls> {

    return this.updateApiExternalnetworkvulsPut$Response(params).pipe(
      map((r: StrictHttpResponse<ExternalNetworkVuls>) => r.body as ExternalNetworkVuls)
    );
  }

  /**
   * Path part for operation createApiExternalnetworkvulsPost
   */
  static readonly CreateApiExternalnetworkvulsPostPath = '/api/externalnetworkvuls/';

  /**
   * Create.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createApiExternalnetworkvulsPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiExternalnetworkvulsPost$Response(params: {
    body: ExternalNetworkVulsCreate
  }): Observable<StrictHttpResponse<ExternalNetworkVuls>> {

    const rb = new RequestBuilder(this.rootUrl, ExternalNetworkVulsService.CreateApiExternalnetworkvulsPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ExternalNetworkVuls>;
      })
    );
  }

  /**
   * Create.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createApiExternalnetworkvulsPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiExternalnetworkvulsPost(params: {
    body: ExternalNetworkVulsCreate
  }): Observable<ExternalNetworkVuls> {

    return this.createApiExternalnetworkvulsPost$Response(params).pipe(
      map((r: StrictHttpResponse<ExternalNetworkVuls>) => r.body as ExternalNetworkVuls)
    );
  }

  /**
   * Path part for operation bulkcreateApiExternalnetworkvulsBulkcreatePost
   */
  static readonly BulkcreateApiExternalnetworkvulsBulkcreatePostPath = '/api/externalnetworkvuls/bulkcreate';

  /**
   * Bulkcreate.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `bulkcreateApiExternalnetworkvulsBulkcreatePost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  bulkcreateApiExternalnetworkvulsBulkcreatePost$Response(params: {
    body: Array<ExternalNetworkVulsCreate>
  }): Observable<StrictHttpResponse<ExternalNetworkVuls>> {

    const rb = new RequestBuilder(this.rootUrl, ExternalNetworkVulsService.BulkcreateApiExternalnetworkvulsBulkcreatePostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ExternalNetworkVuls>;
      })
    );
  }

  /**
   * Bulkcreate.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `bulkcreateApiExternalnetworkvulsBulkcreatePost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  bulkcreateApiExternalnetworkvulsBulkcreatePost(params: {
    body: Array<ExternalNetworkVulsCreate>
  }): Observable<ExternalNetworkVuls> {

    return this.bulkcreateApiExternalnetworkvulsBulkcreatePost$Response(params).pipe(
      map((r: StrictHttpResponse<ExternalNetworkVuls>) => r.body as ExternalNetworkVuls)
    );
  }

  /**
   * Path part for operation uploadFileApiExternalnetworkvulsUploadFilePost
   */
  static readonly UploadFileApiExternalnetworkvulsUploadFilePostPath = '/api/externalnetworkvuls/upload_file';

  /**
   * Upload File.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uploadFileApiExternalnetworkvulsUploadFilePost()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadFileApiExternalnetworkvulsUploadFilePost$Response(params: {
    body: BodyUploadFileApiExternalnetworkvulsUploadFilePost
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, ExternalNetworkVulsService.UploadFileApiExternalnetworkvulsUploadFilePostPath, 'post');
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
   * To access the full response (for headers, for example), `uploadFileApiExternalnetworkvulsUploadFilePost$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadFileApiExternalnetworkvulsUploadFilePost(params: {
    body: BodyUploadFileApiExternalnetworkvulsUploadFilePost
  }): Observable<any> {

    return this.uploadFileApiExternalnetworkvulsUploadFilePost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation getApiExternalnetworkvulsIdGet
   */
  static readonly GetApiExternalnetworkvulsIdGetPath = '/api/externalnetworkvuls/{id}';

  /**
   * Get.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiExternalnetworkvulsIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiExternalnetworkvulsIdGet$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<ExternalNetworkVuls>> {

    const rb = new RequestBuilder(this.rootUrl, ExternalNetworkVulsService.GetApiExternalnetworkvulsIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ExternalNetworkVuls>;
      })
    );
  }

  /**
   * Get.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiExternalnetworkvulsIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiExternalnetworkvulsIdGet(params: {
    id: string;
  }): Observable<ExternalNetworkVuls> {

    return this.getApiExternalnetworkvulsIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<ExternalNetworkVuls>) => r.body as ExternalNetworkVuls)
    );
  }

  /**
   * Path part for operation deleteApiExternalnetworkvulsIdDelete
   */
  static readonly DeleteApiExternalnetworkvulsIdDeletePath = '/api/externalnetworkvuls/{id}';

  /**
   * Delete.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteApiExternalnetworkvulsIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiExternalnetworkvulsIdDelete$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, ExternalNetworkVulsService.DeleteApiExternalnetworkvulsIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `deleteApiExternalnetworkvulsIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiExternalnetworkvulsIdDelete(params: {
    id: string;
  }): Observable<any> {

    return this.deleteApiExternalnetworkvulsIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
