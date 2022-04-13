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

import { AdOu } from '../models/ad-ou';
import { AdOuCreate } from '../models/ad-ou-create';
import { AdOuGetResp } from '../models/ad-ou-get-resp';
import { BodyUploadFileApiAdouUploadFilePost } from '../models/body-upload-file-api-adou-upload-file-post';

@Injectable({
  providedIn: 'root',
})
export class AdOuService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllApiAdouGet
   */
  static readonly GetAllApiAdouGetPath = '/api/adou/';

  /**
   * Get All.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllApiAdouGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiAdouGet$Response(params?: {

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
  }): Observable<StrictHttpResponse<AdOuGetResp>> {

    const rb = new RequestBuilder(this.rootUrl, AdOuService.GetAllApiAdouGetPath, 'get');
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
        return r as StrictHttpResponse<AdOuGetResp>;
      })
    );
  }

  /**
   * Get All.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllApiAdouGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiAdouGet(params?: {

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
  }): Observable<AdOuGetResp> {

    return this.getAllApiAdouGet$Response(params).pipe(
      map((r: StrictHttpResponse<AdOuGetResp>) => r.body as AdOuGetResp)
    );
  }

  /**
   * Path part for operation updateApiAdouPut
   */
  static readonly UpdateApiAdouPutPath = '/api/adou/';

  /**
   * Update.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateApiAdouPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiAdouPut$Response(params: {
    body: AdOu
  }): Observable<StrictHttpResponse<AdOu>> {

    const rb = new RequestBuilder(this.rootUrl, AdOuService.UpdateApiAdouPutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AdOu>;
      })
    );
  }

  /**
   * Update.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateApiAdouPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiAdouPut(params: {
    body: AdOu
  }): Observable<AdOu> {

    return this.updateApiAdouPut$Response(params).pipe(
      map((r: StrictHttpResponse<AdOu>) => r.body as AdOu)
    );
  }

  /**
   * Path part for operation createApiAdouPost
   */
  static readonly CreateApiAdouPostPath = '/api/adou/';

  /**
   * Create.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createApiAdouPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiAdouPost$Response(params: {
    body: AdOuCreate
  }): Observable<StrictHttpResponse<AdOu>> {

    const rb = new RequestBuilder(this.rootUrl, AdOuService.CreateApiAdouPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AdOu>;
      })
    );
  }

  /**
   * Create.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createApiAdouPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiAdouPost(params: {
    body: AdOuCreate
  }): Observable<AdOu> {

    return this.createApiAdouPost$Response(params).pipe(
      map((r: StrictHttpResponse<AdOu>) => r.body as AdOu)
    );
  }

  /**
   * Path part for operation uploadFileApiAdouUploadFilePost
   */
  static readonly UploadFileApiAdouUploadFilePostPath = '/api/adou/upload_file';

  /**
   * Upload File.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uploadFileApiAdouUploadFilePost()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadFileApiAdouUploadFilePost$Response(params: {
    body: BodyUploadFileApiAdouUploadFilePost
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, AdOuService.UploadFileApiAdouUploadFilePostPath, 'post');
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
   * To access the full response (for headers, for example), `uploadFileApiAdouUploadFilePost$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadFileApiAdouUploadFilePost(params: {
    body: BodyUploadFileApiAdouUploadFilePost
  }): Observable<any> {

    return this.uploadFileApiAdouUploadFilePost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation getApiAdouIdGet
   */
  static readonly GetApiAdouIdGetPath = '/api/adou/{id}';

  /**
   * Get.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiAdouIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiAdouIdGet$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<AdOu>> {

    const rb = new RequestBuilder(this.rootUrl, AdOuService.GetApiAdouIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AdOu>;
      })
    );
  }

  /**
   * Get.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiAdouIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiAdouIdGet(params: {
    id: string;
  }): Observable<AdOu> {

    return this.getApiAdouIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<AdOu>) => r.body as AdOu)
    );
  }

  /**
   * Path part for operation deleteApiAdouIdDelete
   */
  static readonly DeleteApiAdouIdDeletePath = '/api/adou/{id}';

  /**
   * Delete.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteApiAdouIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiAdouIdDelete$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, AdOuService.DeleteApiAdouIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `deleteApiAdouIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiAdouIdDelete(params: {
    id: string;
  }): Observable<any> {

    return this.deleteApiAdouIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
