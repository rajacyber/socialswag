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
