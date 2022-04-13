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

import { AdUsers } from '../models/ad-users';
import { AdUsersCreate } from '../models/ad-users-create';
import { AdUsersGetResp } from '../models/ad-users-get-resp';
import { BodyUploadFileApiAdusersUploadFilePost } from '../models/body-upload-file-api-adusers-upload-file-post';

@Injectable({
  providedIn: 'root',
})
export class AdUsersService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllApiAdusersGet
   */
  static readonly GetAllApiAdusersGetPath = '/api/adusers/';

  /**
   * Get All.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllApiAdusersGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiAdusersGet$Response(params?: {

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
  }): Observable<StrictHttpResponse<AdUsersGetResp>> {

    const rb = new RequestBuilder(this.rootUrl, AdUsersService.GetAllApiAdusersGetPath, 'get');
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
        return r as StrictHttpResponse<AdUsersGetResp>;
      })
    );
  }

  /**
   * Get All.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllApiAdusersGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiAdusersGet(params?: {

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
  }): Observable<AdUsersGetResp> {

    return this.getAllApiAdusersGet$Response(params).pipe(
      map((r: StrictHttpResponse<AdUsersGetResp>) => r.body as AdUsersGetResp)
    );
  }

  /**
   * Path part for operation updateApiAdusersPut
   */
  static readonly UpdateApiAdusersPutPath = '/api/adusers/';

  /**
   * Update.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateApiAdusersPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiAdusersPut$Response(params: {
    body: AdUsers
  }): Observable<StrictHttpResponse<AdUsers>> {

    const rb = new RequestBuilder(this.rootUrl, AdUsersService.UpdateApiAdusersPutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AdUsers>;
      })
    );
  }

  /**
   * Update.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateApiAdusersPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiAdusersPut(params: {
    body: AdUsers
  }): Observable<AdUsers> {

    return this.updateApiAdusersPut$Response(params).pipe(
      map((r: StrictHttpResponse<AdUsers>) => r.body as AdUsers)
    );
  }

  /**
   * Path part for operation createApiAdusersPost
   */
  static readonly CreateApiAdusersPostPath = '/api/adusers/';

  /**
   * Create.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createApiAdusersPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiAdusersPost$Response(params: {
    body: AdUsersCreate
  }): Observable<StrictHttpResponse<AdUsers>> {

    const rb = new RequestBuilder(this.rootUrl, AdUsersService.CreateApiAdusersPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AdUsers>;
      })
    );
  }

  /**
   * Create.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createApiAdusersPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiAdusersPost(params: {
    body: AdUsersCreate
  }): Observable<AdUsers> {

    return this.createApiAdusersPost$Response(params).pipe(
      map((r: StrictHttpResponse<AdUsers>) => r.body as AdUsers)
    );
  }

  /**
   * Path part for operation uploadFileApiAdusersUploadFilePost
   */
  static readonly UploadFileApiAdusersUploadFilePostPath = '/api/adusers/upload_file';

  /**
   * Upload File.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uploadFileApiAdusersUploadFilePost()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadFileApiAdusersUploadFilePost$Response(params: {
    body: BodyUploadFileApiAdusersUploadFilePost
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, AdUsersService.UploadFileApiAdusersUploadFilePostPath, 'post');
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
   * To access the full response (for headers, for example), `uploadFileApiAdusersUploadFilePost$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadFileApiAdusersUploadFilePost(params: {
    body: BodyUploadFileApiAdusersUploadFilePost
  }): Observable<any> {

    return this.uploadFileApiAdusersUploadFilePost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation getApiAdusersIdGet
   */
  static readonly GetApiAdusersIdGetPath = '/api/adusers/{id}';

  /**
   * Get.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiAdusersIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiAdusersIdGet$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<AdUsers>> {

    const rb = new RequestBuilder(this.rootUrl, AdUsersService.GetApiAdusersIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AdUsers>;
      })
    );
  }

  /**
   * Get.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiAdusersIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiAdusersIdGet(params: {
    id: string;
  }): Observable<AdUsers> {

    return this.getApiAdusersIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<AdUsers>) => r.body as AdUsers)
    );
  }

  /**
   * Path part for operation deleteApiAdusersIdDelete
   */
  static readonly DeleteApiAdusersIdDeletePath = '/api/adusers/{id}';

  /**
   * Delete.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteApiAdusersIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiAdusersIdDelete$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, AdUsersService.DeleteApiAdusersIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `deleteApiAdusersIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiAdusersIdDelete(params: {
    id: string;
  }): Observable<any> {

    return this.deleteApiAdusersIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
