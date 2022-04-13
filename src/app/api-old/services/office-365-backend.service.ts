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

import { Office365Backend } from '../models/office-365-backend';
import { Office365BackendCreate } from '../models/office-365-backend-create';
import { Office365BackendGetResp } from '../models/office-365-backend-get-resp';
import { Office365BackendgenerateRedirectTokenParams } from '../models/office-365-backendgenerate-redirect-token-params';
import { Office365BackendgetAdUsersParams } from '../models/office-365-backendget-ad-users-params';
import { Office365BackendvalidateO365TenantParams } from '../models/office-365-backendvalidate-o-365-tenant-params';

@Injectable({
  providedIn: 'root',
})
export class Office365BackendService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllApiOffice365BackendGet
   */
  static readonly GetAllApiOffice365BackendGetPath = '/api/office365backend/';

  /**
   * Get All.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllApiOffice365BackendGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiOffice365BackendGet$Response(params?: {

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
  }): Observable<StrictHttpResponse<Office365BackendGetResp>> {

    const rb = new RequestBuilder(this.rootUrl, Office365BackendService.GetAllApiOffice365BackendGetPath, 'get');
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
        return r as StrictHttpResponse<Office365BackendGetResp>;
      })
    );
  }

  /**
   * Get All.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllApiOffice365BackendGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiOffice365BackendGet(params?: {

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
  }): Observable<Office365BackendGetResp> {

    return this.getAllApiOffice365BackendGet$Response(params).pipe(
      map((r: StrictHttpResponse<Office365BackendGetResp>) => r.body as Office365BackendGetResp)
    );
  }

  /**
   * Path part for operation updateApiOffice365BackendPut
   */
  static readonly UpdateApiOffice365BackendPutPath = '/api/office365backend/';

  /**
   * Update.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateApiOffice365BackendPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiOffice365BackendPut$Response(params: {
    body: Office365Backend
  }): Observable<StrictHttpResponse<Office365Backend>> {

    const rb = new RequestBuilder(this.rootUrl, Office365BackendService.UpdateApiOffice365BackendPutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Office365Backend>;
      })
    );
  }

  /**
   * Update.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateApiOffice365BackendPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiOffice365BackendPut(params: {
    body: Office365Backend
  }): Observable<Office365Backend> {

    return this.updateApiOffice365BackendPut$Response(params).pipe(
      map((r: StrictHttpResponse<Office365Backend>) => r.body as Office365Backend)
    );
  }

  /**
   * Path part for operation createApiOffice365BackendPost
   */
  static readonly CreateApiOffice365BackendPostPath = '/api/office365backend/';

  /**
   * Create.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createApiOffice365BackendPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiOffice365BackendPost$Response(params: {
    body: Office365BackendCreate
  }): Observable<StrictHttpResponse<Office365Backend>> {

    const rb = new RequestBuilder(this.rootUrl, Office365BackendService.CreateApiOffice365BackendPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Office365Backend>;
      })
    );
  }

  /**
   * Create.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createApiOffice365BackendPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiOffice365BackendPost(params: {
    body: Office365BackendCreate
  }): Observable<Office365Backend> {

    return this.createApiOffice365BackendPost$Response(params).pipe(
      map((r: StrictHttpResponse<Office365Backend>) => r.body as Office365Backend)
    );
  }

  /**
   * Path part for operation getApiOffice365BackendIdGet
   */
  static readonly GetApiOffice365BackendIdGetPath = '/api/office365backend/{id}';

  /**
   * Get.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiOffice365BackendIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiOffice365BackendIdGet$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<Office365Backend>> {

    const rb = new RequestBuilder(this.rootUrl, Office365BackendService.GetApiOffice365BackendIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Office365Backend>;
      })
    );
  }

  /**
   * Get.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiOffice365BackendIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiOffice365BackendIdGet(params: {
    id: string;
  }): Observable<Office365Backend> {

    return this.getApiOffice365BackendIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<Office365Backend>) => r.body as Office365Backend)
    );
  }

  /**
   * Path part for operation deleteApiOffice365BackendIdDelete
   */
  static readonly DeleteApiOffice365BackendIdDeletePath = '/api/office365backend/{id}';

  /**
   * Delete.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteApiOffice365BackendIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiOffice365BackendIdDelete$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, Office365BackendService.DeleteApiOffice365BackendIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `deleteApiOffice365BackendIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiOffice365BackendIdDelete(params: {
    id: string;
  }): Observable<any> {

    return this.deleteApiOffice365BackendIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation office365BackendgenerateRedirectTokenApiOffice365BackendIdGenerateRedirectTokenPost
   */
  static readonly Office365BackendgenerateRedirectTokenApiOffice365BackendIdGenerateRedirectTokenPostPath = '/api/office365backend/{id}/generateRedirectToken';

  /**
   * Office365Backendgenerateredirecttoken.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `office365BackendgenerateRedirectTokenApiOffice365BackendIdGenerateRedirectTokenPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  office365BackendgenerateRedirectTokenApiOffice365BackendIdGenerateRedirectTokenPost$Response(params: {
    id: string;
    body: Office365BackendgenerateRedirectTokenParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, Office365BackendService.Office365BackendgenerateRedirectTokenApiOffice365BackendIdGenerateRedirectTokenPostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
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
   * Office365Backendgenerateredirecttoken.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `office365BackendgenerateRedirectTokenApiOffice365BackendIdGenerateRedirectTokenPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  office365BackendgenerateRedirectTokenApiOffice365BackendIdGenerateRedirectTokenPost(params: {
    id: string;
    body: Office365BackendgenerateRedirectTokenParams
  }): Observable<any> {

    return this.office365BackendgenerateRedirectTokenApiOffice365BackendIdGenerateRedirectTokenPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation office365BackendvalidateO365TenantApiOffice365BackendIdValidateO365TenantPost
   */
  static readonly Office365BackendvalidateO365TenantApiOffice365BackendIdValidateO365TenantPostPath = '/api/office365backend/{id}/validateO365Tenant';

  /**
   * Office365Backendvalidateo365Tenant.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `office365BackendvalidateO365TenantApiOffice365BackendIdValidateO365TenantPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  office365BackendvalidateO365TenantApiOffice365BackendIdValidateO365TenantPost$Response(params: {
    id: string;
    body: Office365BackendvalidateO365TenantParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, Office365BackendService.Office365BackendvalidateO365TenantApiOffice365BackendIdValidateO365TenantPostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
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
   * Office365Backendvalidateo365Tenant.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `office365BackendvalidateO365TenantApiOffice365BackendIdValidateO365TenantPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  office365BackendvalidateO365TenantApiOffice365BackendIdValidateO365TenantPost(params: {
    id: string;
    body: Office365BackendvalidateO365TenantParams
  }): Observable<any> {

    return this.office365BackendvalidateO365TenantApiOffice365BackendIdValidateO365TenantPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation office365BackendgetAdUsersApiOffice365BackendIdGetAdUsersPost
   */
  static readonly Office365BackendgetAdUsersApiOffice365BackendIdGetAdUsersPostPath = '/api/office365backend/{id}/getAdUsers';

  /**
   * Office365Backendgetadusers.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `office365BackendgetAdUsersApiOffice365BackendIdGetAdUsersPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  office365BackendgetAdUsersApiOffice365BackendIdGetAdUsersPost$Response(params: {
    id: string;
    body: Office365BackendgetAdUsersParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, Office365BackendService.Office365BackendgetAdUsersApiOffice365BackendIdGetAdUsersPostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
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
   * Office365Backendgetadusers.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `office365BackendgetAdUsersApiOffice365BackendIdGetAdUsersPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  office365BackendgetAdUsersApiOffice365BackendIdGetAdUsersPost(params: {
    id: string;
    body: Office365BackendgetAdUsersParams
  }): Observable<any> {

    return this.office365BackendgetAdUsersApiOffice365BackendIdGetAdUsersPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
