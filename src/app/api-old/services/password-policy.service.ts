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

import { BodyUploadFileApiPasswordpolicyUploadFilePost } from '../models/body-upload-file-api-passwordpolicy-upload-file-post';
import { PasswordPolicy } from '../models/password-policy';
import { PasswordPolicyCreate } from '../models/password-policy-create';
import { PasswordPolicyGetResp } from '../models/password-policy-get-resp';

@Injectable({
  providedIn: 'root',
})
export class PasswordPolicyService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllApiPasswordpolicyGet
   */
  static readonly GetAllApiPasswordpolicyGetPath = '/api/passwordpolicy/';

  /**
   * Get All.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllApiPasswordpolicyGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiPasswordpolicyGet$Response(params?: {

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
  }): Observable<StrictHttpResponse<PasswordPolicyGetResp>> {

    const rb = new RequestBuilder(this.rootUrl, PasswordPolicyService.GetAllApiPasswordpolicyGetPath, 'get');
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
        return r as StrictHttpResponse<PasswordPolicyGetResp>;
      })
    );
  }

  /**
   * Get All.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllApiPasswordpolicyGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiPasswordpolicyGet(params?: {

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
  }): Observable<PasswordPolicyGetResp> {

    return this.getAllApiPasswordpolicyGet$Response(params).pipe(
      map((r: StrictHttpResponse<PasswordPolicyGetResp>) => r.body as PasswordPolicyGetResp)
    );
  }

  /**
   * Path part for operation updateApiPasswordpolicyPut
   */
  static readonly UpdateApiPasswordpolicyPutPath = '/api/passwordpolicy/';

  /**
   * Update.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateApiPasswordpolicyPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiPasswordpolicyPut$Response(params: {
    body: PasswordPolicy
  }): Observable<StrictHttpResponse<PasswordPolicy>> {

    const rb = new RequestBuilder(this.rootUrl, PasswordPolicyService.UpdateApiPasswordpolicyPutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PasswordPolicy>;
      })
    );
  }

  /**
   * Update.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateApiPasswordpolicyPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiPasswordpolicyPut(params: {
    body: PasswordPolicy
  }): Observable<PasswordPolicy> {

    return this.updateApiPasswordpolicyPut$Response(params).pipe(
      map((r: StrictHttpResponse<PasswordPolicy>) => r.body as PasswordPolicy)
    );
  }

  /**
   * Path part for operation createApiPasswordpolicyPost
   */
  static readonly CreateApiPasswordpolicyPostPath = '/api/passwordpolicy/';

  /**
   * Create.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createApiPasswordpolicyPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiPasswordpolicyPost$Response(params: {
    body: PasswordPolicyCreate
  }): Observable<StrictHttpResponse<PasswordPolicy>> {

    const rb = new RequestBuilder(this.rootUrl, PasswordPolicyService.CreateApiPasswordpolicyPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PasswordPolicy>;
      })
    );
  }

  /**
   * Create.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createApiPasswordpolicyPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiPasswordpolicyPost(params: {
    body: PasswordPolicyCreate
  }): Observable<PasswordPolicy> {

    return this.createApiPasswordpolicyPost$Response(params).pipe(
      map((r: StrictHttpResponse<PasswordPolicy>) => r.body as PasswordPolicy)
    );
  }

  /**
   * Path part for operation uploadFileApiPasswordpolicyUploadFilePost
   */
  static readonly UploadFileApiPasswordpolicyUploadFilePostPath = '/api/passwordpolicy/upload_file';

  /**
   * Upload File.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uploadFileApiPasswordpolicyUploadFilePost()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadFileApiPasswordpolicyUploadFilePost$Response(params: {
    body: BodyUploadFileApiPasswordpolicyUploadFilePost
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, PasswordPolicyService.UploadFileApiPasswordpolicyUploadFilePostPath, 'post');
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
   * To access the full response (for headers, for example), `uploadFileApiPasswordpolicyUploadFilePost$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadFileApiPasswordpolicyUploadFilePost(params: {
    body: BodyUploadFileApiPasswordpolicyUploadFilePost
  }): Observable<any> {

    return this.uploadFileApiPasswordpolicyUploadFilePost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation getApiPasswordpolicyIdGet
   */
  static readonly GetApiPasswordpolicyIdGetPath = '/api/passwordpolicy/{id}';

  /**
   * Get.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiPasswordpolicyIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiPasswordpolicyIdGet$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<PasswordPolicy>> {

    const rb = new RequestBuilder(this.rootUrl, PasswordPolicyService.GetApiPasswordpolicyIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PasswordPolicy>;
      })
    );
  }

  /**
   * Get.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiPasswordpolicyIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiPasswordpolicyIdGet(params: {
    id: string;
  }): Observable<PasswordPolicy> {

    return this.getApiPasswordpolicyIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<PasswordPolicy>) => r.body as PasswordPolicy)
    );
  }

  /**
   * Path part for operation deleteApiPasswordpolicyIdDelete
   */
  static readonly DeleteApiPasswordpolicyIdDeletePath = '/api/passwordpolicy/{id}';

  /**
   * Delete.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteApiPasswordpolicyIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiPasswordpolicyIdDelete$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, PasswordPolicyService.DeleteApiPasswordpolicyIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `deleteApiPasswordpolicyIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiPasswordpolicyIdDelete(params: {
    id: string;
  }): Observable<any> {

    return this.deleteApiPasswordpolicyIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
