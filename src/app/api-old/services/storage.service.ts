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

import { Storage } from '../models/storage';
import { StorageCreate } from '../models/storage-create';
import { StorageGetResp } from '../models/storage-get-resp';

@Injectable({
  providedIn: 'root',
})
export class StorageService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllApiStorageGet
   */
  static readonly GetAllApiStorageGetPath = '/api/storage/';

  /**
   * Get All.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllApiStorageGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiStorageGet$Response(params?: {

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
  }): Observable<StrictHttpResponse<StorageGetResp>> {

    const rb = new RequestBuilder(this.rootUrl, StorageService.GetAllApiStorageGetPath, 'get');
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
        return r as StrictHttpResponse<StorageGetResp>;
      })
    );
  }

  /**
   * Get All.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllApiStorageGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiStorageGet(params?: {

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
  }): Observable<StorageGetResp> {

    return this.getAllApiStorageGet$Response(params).pipe(
      map((r: StrictHttpResponse<StorageGetResp>) => r.body as StorageGetResp)
    );
  }

  /**
   * Path part for operation updateApiStoragePut
   */
  static readonly UpdateApiStoragePutPath = '/api/storage/';

  /**
   * Update.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateApiStoragePut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiStoragePut$Response(params: {
    body: Storage
  }): Observable<StrictHttpResponse<Storage>> {

    const rb = new RequestBuilder(this.rootUrl, StorageService.UpdateApiStoragePutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Storage>;
      })
    );
  }

  /**
   * Update.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateApiStoragePut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiStoragePut(params: {
    body: Storage
  }): Observable<Storage> {

    return this.updateApiStoragePut$Response(params).pipe(
      map((r: StrictHttpResponse<Storage>) => r.body as Storage)
    );
  }

  /**
   * Path part for operation createApiStoragePost
   */
  static readonly CreateApiStoragePostPath = '/api/storage/';

  /**
   * Create.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createApiStoragePost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiStoragePost$Response(params: {
    body: StorageCreate
  }): Observable<StrictHttpResponse<Storage>> {

    const rb = new RequestBuilder(this.rootUrl, StorageService.CreateApiStoragePostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Storage>;
      })
    );
  }

  /**
   * Create.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createApiStoragePost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiStoragePost(params: {
    body: StorageCreate
  }): Observable<Storage> {

    return this.createApiStoragePost$Response(params).pipe(
      map((r: StrictHttpResponse<Storage>) => r.body as Storage)
    );
  }

  /**
   * Path part for operation getApiStorageIdGet
   */
  static readonly GetApiStorageIdGetPath = '/api/storage/{id}';

  /**
   * Get.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiStorageIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiStorageIdGet$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<Storage>> {

    const rb = new RequestBuilder(this.rootUrl, StorageService.GetApiStorageIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Storage>;
      })
    );
  }

  /**
   * Get.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiStorageIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiStorageIdGet(params: {
    id: string;
  }): Observable<Storage> {

    return this.getApiStorageIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<Storage>) => r.body as Storage)
    );
  }

  /**
   * Path part for operation deleteApiStorageIdDelete
   */
  static readonly DeleteApiStorageIdDeletePath = '/api/storage/{id}';

  /**
   * Delete.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteApiStorageIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiStorageIdDelete$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, StorageService.DeleteApiStorageIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `deleteApiStorageIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiStorageIdDelete(params: {
    id: string;
  }): Observable<any> {

    return this.deleteApiStorageIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
