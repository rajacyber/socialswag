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

import { AdGpo } from '../models/ad-gpo';
import { AdGpoCreate } from '../models/ad-gpo-create';
import { AdGpoGetResp } from '../models/ad-gpo-get-resp';
import { BodyUploadFileApiAdgpoUploadFilePost } from '../models/body-upload-file-api-adgpo-upload-file-post';

@Injectable({
  providedIn: 'root',
})
export class AdGpoService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllApiAdgpoGet
   */
  static readonly GetAllApiAdgpoGetPath = '/api/adgpo/';

  /**
   * Get All.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllApiAdgpoGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiAdgpoGet$Response(params?: {

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
  }): Observable<StrictHttpResponse<AdGpoGetResp>> {

    const rb = new RequestBuilder(this.rootUrl, AdGpoService.GetAllApiAdgpoGetPath, 'get');
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
        return r as StrictHttpResponse<AdGpoGetResp>;
      })
    );
  }

  /**
   * Get All.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllApiAdgpoGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiAdgpoGet(params?: {

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
  }): Observable<AdGpoGetResp> {

    return this.getAllApiAdgpoGet$Response(params).pipe(
      map((r: StrictHttpResponse<AdGpoGetResp>) => r.body as AdGpoGetResp)
    );
  }

  /**
   * Path part for operation updateApiAdgpoPut
   */
  static readonly UpdateApiAdgpoPutPath = '/api/adgpo/';

  /**
   * Update.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateApiAdgpoPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiAdgpoPut$Response(params: {
    body: AdGpo
  }): Observable<StrictHttpResponse<AdGpo>> {

    const rb = new RequestBuilder(this.rootUrl, AdGpoService.UpdateApiAdgpoPutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AdGpo>;
      })
    );
  }

  /**
   * Update.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateApiAdgpoPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiAdgpoPut(params: {
    body: AdGpo
  }): Observable<AdGpo> {

    return this.updateApiAdgpoPut$Response(params).pipe(
      map((r: StrictHttpResponse<AdGpo>) => r.body as AdGpo)
    );
  }

  /**
   * Path part for operation createApiAdgpoPost
   */
  static readonly CreateApiAdgpoPostPath = '/api/adgpo/';

  /**
   * Create.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createApiAdgpoPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiAdgpoPost$Response(params: {
    body: AdGpoCreate
  }): Observable<StrictHttpResponse<AdGpo>> {

    const rb = new RequestBuilder(this.rootUrl, AdGpoService.CreateApiAdgpoPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AdGpo>;
      })
    );
  }

  /**
   * Create.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createApiAdgpoPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiAdgpoPost(params: {
    body: AdGpoCreate
  }): Observable<AdGpo> {

    return this.createApiAdgpoPost$Response(params).pipe(
      map((r: StrictHttpResponse<AdGpo>) => r.body as AdGpo)
    );
  }

  /**
   * Path part for operation uploadFileApiAdgpoUploadFilePost
   */
  static readonly UploadFileApiAdgpoUploadFilePostPath = '/api/adgpo/upload_file';

  /**
   * Upload File.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uploadFileApiAdgpoUploadFilePost()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadFileApiAdgpoUploadFilePost$Response(params: {
    body: BodyUploadFileApiAdgpoUploadFilePost
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, AdGpoService.UploadFileApiAdgpoUploadFilePostPath, 'post');
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
   * To access the full response (for headers, for example), `uploadFileApiAdgpoUploadFilePost$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadFileApiAdgpoUploadFilePost(params: {
    body: BodyUploadFileApiAdgpoUploadFilePost
  }): Observable<any> {

    return this.uploadFileApiAdgpoUploadFilePost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation getApiAdgpoIdGet
   */
  static readonly GetApiAdgpoIdGetPath = '/api/adgpo/{id}';

  /**
   * Get.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiAdgpoIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiAdgpoIdGet$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<AdGpo>> {

    const rb = new RequestBuilder(this.rootUrl, AdGpoService.GetApiAdgpoIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AdGpo>;
      })
    );
  }

  /**
   * Get.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiAdgpoIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiAdgpoIdGet(params: {
    id: string;
  }): Observable<AdGpo> {

    return this.getApiAdgpoIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<AdGpo>) => r.body as AdGpo)
    );
  }

  /**
   * Path part for operation deleteApiAdgpoIdDelete
   */
  static readonly DeleteApiAdgpoIdDeletePath = '/api/adgpo/{id}';

  /**
   * Delete.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteApiAdgpoIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiAdgpoIdDelete$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, AdGpoService.DeleteApiAdgpoIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `deleteApiAdgpoIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiAdgpoIdDelete(params: {
    id: string;
  }): Observable<any> {

    return this.deleteApiAdgpoIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
