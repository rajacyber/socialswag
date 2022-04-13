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

import { RoleCreate } from '../models/role-create';

@Injectable({
  providedIn: 'root',
})
export class RolesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getRolesApiKrolesGet
   */
  static readonly GetRolesApiKrolesGetPath = '/api/kroles';

  /**
   * Get Roles.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getRolesApiKrolesGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRolesApiKrolesGet$Response(params?: {
    realm?: any;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, RolesService.GetRolesApiKrolesGetPath, 'get');
    if (params) {
      rb.query('realm', params.realm, {});
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
   * Get Roles.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getRolesApiKrolesGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRolesApiKrolesGet(params?: {
    realm?: any;
  }): Observable<any> {

    return this.getRolesApiKrolesGet$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation updateRoleApiKrolesPut
   */
  static readonly UpdateRoleApiKrolesPutPath = '/api/kroles';

  /**
   * Update Role.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateRoleApiKrolesPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateRoleApiKrolesPut$Response(params: {
    realm?: any;
    body: RoleCreate
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, RolesService.UpdateRoleApiKrolesPutPath, 'put');
    if (params) {
      rb.query('realm', params.realm, {});
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
   * Update Role.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateRoleApiKrolesPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateRoleApiKrolesPut(params: {
    realm?: any;
    body: RoleCreate
  }): Observable<any> {

    return this.updateRoleApiKrolesPut$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation createRoleApiKrolesPost
   */
  static readonly CreateRoleApiKrolesPostPath = '/api/kroles';

  /**
   * Create Role.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createRoleApiKrolesPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createRoleApiKrolesPost$Response(params: {
    realm?: any;
    body: RoleCreate
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, RolesService.CreateRoleApiKrolesPostPath, 'post');
    if (params) {
      rb.query('realm', params.realm, {});
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
   * Create Role.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createRoleApiKrolesPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createRoleApiKrolesPost(params: {
    realm?: any;
    body: RoleCreate
  }): Observable<any> {

    return this.createRoleApiKrolesPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation getRoleDetailsApiKrolesRoleGet
   */
  static readonly GetRoleDetailsApiKrolesRoleGetPath = '/api/kroles/{role}';

  /**
   * Get Role Details.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getRoleDetailsApiKrolesRoleGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRoleDetailsApiKrolesRoleGet$Response(params: {
    role: string;
    realm?: any;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, RolesService.GetRoleDetailsApiKrolesRoleGetPath, 'get');
    if (params) {
      rb.path('role', params.role, {});
      rb.query('realm', params.realm, {});
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
   * Get Role Details.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getRoleDetailsApiKrolesRoleGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRoleDetailsApiKrolesRoleGet(params: {
    role: string;
    realm?: any;
  }): Observable<any> {

    return this.getRoleDetailsApiKrolesRoleGet$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation deleteRoleApiKrolesRoleDelete
   */
  static readonly DeleteRoleApiKrolesRoleDeletePath = '/api/kroles/{role}';

  /**
   * Delete Role.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteRoleApiKrolesRoleDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteRoleApiKrolesRoleDelete$Response(params: {
    role: string;
    realm?: any;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, RolesService.DeleteRoleApiKrolesRoleDeletePath, 'delete');
    if (params) {
      rb.path('role', params.role, {});
      rb.query('realm', params.realm, {});
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
   * Delete Role.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteRoleApiKrolesRoleDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteRoleApiKrolesRoleDelete(params: {
    role: string;
    realm?: any;
  }): Observable<any> {

    return this.deleteRoleApiKrolesRoleDelete$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
