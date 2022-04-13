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

import { UserSpec } from '../models/user-spec';
import { Users } from '../models/users';
import { UsersCreate } from '../models/users-create';
import { UsersGetResp } from '../models/users-get-resp';

@Injectable({
  providedIn: 'root',
})
export class UsersService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllApiUsersGet
   */
  static readonly GetAllApiUsersGetPath = '/api/users/';

  /**
   * Get All.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllApiUsersGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiUsersGet$Response(params?: {

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
  }): Observable<StrictHttpResponse<UsersGetResp>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.GetAllApiUsersGetPath, 'get');
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
        return r as StrictHttpResponse<UsersGetResp>;
      })
    );
  }

  /**
   * Get All.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllApiUsersGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiUsersGet(params?: {

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
  }): Observable<UsersGetResp> {

    return this.getAllApiUsersGet$Response(params).pipe(
      map((r: StrictHttpResponse<UsersGetResp>) => r.body as UsersGetResp)
    );
  }

  /**
   * Path part for operation updateApiUsersPut
   */
  static readonly UpdateApiUsersPutPath = '/api/users/';

  /**
   * Update.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateApiUsersPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiUsersPut$Response(params: {
    body: Users
  }): Observable<StrictHttpResponse<Users>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.UpdateApiUsersPutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Users>;
      })
    );
  }

  /**
   * Update.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateApiUsersPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiUsersPut(params: {
    body: Users
  }): Observable<Users> {

    return this.updateApiUsersPut$Response(params).pipe(
      map((r: StrictHttpResponse<Users>) => r.body as Users)
    );
  }

  /**
   * Path part for operation createApiUsersPost
   */
  static readonly CreateApiUsersPostPath = '/api/users/';

  /**
   * Create.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createApiUsersPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiUsersPost$Response(params: {
    body: UsersCreate
  }): Observable<StrictHttpResponse<Users>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.CreateApiUsersPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Users>;
      })
    );
  }

  /**
   * Create.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createApiUsersPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiUsersPost(params: {
    body: UsersCreate
  }): Observable<Users> {

    return this.createApiUsersPost$Response(params).pipe(
      map((r: StrictHttpResponse<Users>) => r.body as Users)
    );
  }

  /**
   * Path part for operation getApiUsersIdGet
   */
  static readonly GetApiUsersIdGetPath = '/api/users/{id}';

  /**
   * Get.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiUsersIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiUsersIdGet$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<Users>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.GetApiUsersIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Users>;
      })
    );
  }

  /**
   * Get.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiUsersIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiUsersIdGet(params: {
    id: string;
  }): Observable<Users> {

    return this.getApiUsersIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<Users>) => r.body as Users)
    );
  }

  /**
   * Path part for operation deleteApiUsersIdDelete
   */
  static readonly DeleteApiUsersIdDeletePath = '/api/users/{id}';

  /**
   * Delete.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteApiUsersIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiUsersIdDelete$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.DeleteApiUsersIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `deleteApiUsersIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiUsersIdDelete(params: {
    id: string;
  }): Observable<any> {

    return this.deleteApiUsersIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation getUsersApiKusersGet
   */
  static readonly GetUsersApiKusersGetPath = '/api/kusers';

  /**
   * Get Users.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUsersApiKusersGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUsersApiKusersGet$Response(params?: {
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.GetUsersApiKusersGetPath, 'get');
    if (params) {
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
   * Get Users.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUsersApiKusersGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUsersApiKusersGet(params?: {
  }): Observable<any> {

    return this.getUsersApiKusersGet$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation updateUserApiKusersPut
   */
  static readonly UpdateUserApiKusersPutPath = '/api/kusers';

  /**
   * Update User.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateUserApiKusersPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateUserApiKusersPut$Response(params: {
    body: UserSpec
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.UpdateUserApiKusersPutPath, 'put');
    if (params) {
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
   * Update User.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateUserApiKusersPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateUserApiKusersPut(params: {
    body: UserSpec
  }): Observable<any> {

    return this.updateUserApiKusersPut$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation createUserApiKusersPost
   */
  static readonly CreateUserApiKusersPostPath = '/api/kusers';

  /**
   * Create User.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createUserApiKusersPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createUserApiKusersPost$Response(params: {
    body: UserSpec
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.CreateUserApiKusersPostPath, 'post');
    if (params) {
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
   * Create User.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createUserApiKusersPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createUserApiKusersPost(params: {
    body: UserSpec
  }): Observable<any> {

    return this.createUserApiKusersPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation deleteUserApiKusersUseridDelete
   */
  static readonly DeleteUserApiKusersUseridDeletePath = '/api/kusers/{userid}';

  /**
   * Delete User.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteUserApiKusersUseridDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteUserApiKusersUseridDelete$Response(params: {
    userid: string;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.DeleteUserApiKusersUseridDeletePath, 'delete');
    if (params) {
      rb.path('userid', params.userid, {});
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
   * Delete User.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteUserApiKusersUseridDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteUserApiKusersUseridDelete(params: {
    userid: string;
  }): Observable<any> {

    return this.deleteUserApiKusersUseridDelete$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
