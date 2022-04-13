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

import { FsmoRoles } from '../models/fsmo-roles';
import { FsmoRolesCreate } from '../models/fsmo-roles-create';
import { FsmoRolesGetResp } from '../models/fsmo-roles-get-resp';

@Injectable({
  providedIn: 'root',
})
export class FsmoRolesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllApiFsmorolesGet
   */
  static readonly GetAllApiFsmorolesGetPath = '/api/fsmoroles/';

  /**
   * Get All.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllApiFsmorolesGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiFsmorolesGet$Response(params?: {

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
  }): Observable<StrictHttpResponse<FsmoRolesGetResp>> {

    const rb = new RequestBuilder(this.rootUrl, FsmoRolesService.GetAllApiFsmorolesGetPath, 'get');
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
        return r as StrictHttpResponse<FsmoRolesGetResp>;
      })
    );
  }

  /**
   * Get All.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllApiFsmorolesGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiFsmorolesGet(params?: {

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
  }): Observable<FsmoRolesGetResp> {

    return this.getAllApiFsmorolesGet$Response(params).pipe(
      map((r: StrictHttpResponse<FsmoRolesGetResp>) => r.body as FsmoRolesGetResp)
    );
  }

  /**
   * Path part for operation updateApiFsmorolesPut
   */
  static readonly UpdateApiFsmorolesPutPath = '/api/fsmoroles/';

  /**
   * Update.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateApiFsmorolesPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiFsmorolesPut$Response(params: {
    body: FsmoRoles
  }): Observable<StrictHttpResponse<FsmoRoles>> {

    const rb = new RequestBuilder(this.rootUrl, FsmoRolesService.UpdateApiFsmorolesPutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<FsmoRoles>;
      })
    );
  }

  /**
   * Update.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateApiFsmorolesPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiFsmorolesPut(params: {
    body: FsmoRoles
  }): Observable<FsmoRoles> {

    return this.updateApiFsmorolesPut$Response(params).pipe(
      map((r: StrictHttpResponse<FsmoRoles>) => r.body as FsmoRoles)
    );
  }

  /**
   * Path part for operation createApiFsmorolesPost
   */
  static readonly CreateApiFsmorolesPostPath = '/api/fsmoroles/';

  /**
   * Create.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createApiFsmorolesPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiFsmorolesPost$Response(params: {
    body: FsmoRolesCreate
  }): Observable<StrictHttpResponse<FsmoRoles>> {

    const rb = new RequestBuilder(this.rootUrl, FsmoRolesService.CreateApiFsmorolesPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<FsmoRoles>;
      })
    );
  }

  /**
   * Create.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createApiFsmorolesPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiFsmorolesPost(params: {
    body: FsmoRolesCreate
  }): Observable<FsmoRoles> {

    return this.createApiFsmorolesPost$Response(params).pipe(
      map((r: StrictHttpResponse<FsmoRoles>) => r.body as FsmoRoles)
    );
  }

  /**
   * Path part for operation getApiFsmorolesIdGet
   */
  static readonly GetApiFsmorolesIdGetPath = '/api/fsmoroles/{id}';

  /**
   * Get.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiFsmorolesIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiFsmorolesIdGet$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<FsmoRoles>> {

    const rb = new RequestBuilder(this.rootUrl, FsmoRolesService.GetApiFsmorolesIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<FsmoRoles>;
      })
    );
  }

  /**
   * Get.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiFsmorolesIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiFsmorolesIdGet(params: {
    id: string;
  }): Observable<FsmoRoles> {

    return this.getApiFsmorolesIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<FsmoRoles>) => r.body as FsmoRoles)
    );
  }

  /**
   * Path part for operation deleteApiFsmorolesIdDelete
   */
  static readonly DeleteApiFsmorolesIdDeletePath = '/api/fsmoroles/{id}';

  /**
   * Delete.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteApiFsmorolesIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiFsmorolesIdDelete$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, FsmoRolesService.DeleteApiFsmorolesIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `deleteApiFsmorolesIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiFsmorolesIdDelete(params: {
    id: string;
  }): Observable<any> {

    return this.deleteApiFsmorolesIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
