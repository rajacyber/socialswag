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

import { Interfaces } from '../models/interfaces';
import { InterfacesCreate } from '../models/interfaces-create';
import { InterfacesGetResp } from '../models/interfaces-get-resp';

@Injectable({
  providedIn: 'root',
})
export class InterfacesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllApiInterfacesGet
   */
  static readonly GetAllApiInterfacesGetPath = '/api/interfaces/';

  /**
   * Get All.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllApiInterfacesGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiInterfacesGet$Response(params?: {

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
  }): Observable<StrictHttpResponse<InterfacesGetResp>> {

    const rb = new RequestBuilder(this.rootUrl, InterfacesService.GetAllApiInterfacesGetPath, 'get');
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
        return r as StrictHttpResponse<InterfacesGetResp>;
      })
    );
  }

  /**
   * Get All.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllApiInterfacesGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiInterfacesGet(params?: {

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
  }): Observable<InterfacesGetResp> {

    return this.getAllApiInterfacesGet$Response(params).pipe(
      map((r: StrictHttpResponse<InterfacesGetResp>) => r.body as InterfacesGetResp)
    );
  }

  /**
   * Path part for operation updateApiInterfacesPut
   */
  static readonly UpdateApiInterfacesPutPath = '/api/interfaces/';

  /**
   * Update.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateApiInterfacesPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiInterfacesPut$Response(params: {
    body: Interfaces
  }): Observable<StrictHttpResponse<Interfaces>> {

    const rb = new RequestBuilder(this.rootUrl, InterfacesService.UpdateApiInterfacesPutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Interfaces>;
      })
    );
  }

  /**
   * Update.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateApiInterfacesPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiInterfacesPut(params: {
    body: Interfaces
  }): Observable<Interfaces> {

    return this.updateApiInterfacesPut$Response(params).pipe(
      map((r: StrictHttpResponse<Interfaces>) => r.body as Interfaces)
    );
  }

  /**
   * Path part for operation createApiInterfacesPost
   */
  static readonly CreateApiInterfacesPostPath = '/api/interfaces/';

  /**
   * Create.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createApiInterfacesPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiInterfacesPost$Response(params: {
    body: InterfacesCreate
  }): Observable<StrictHttpResponse<Interfaces>> {

    const rb = new RequestBuilder(this.rootUrl, InterfacesService.CreateApiInterfacesPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Interfaces>;
      })
    );
  }

  /**
   * Create.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createApiInterfacesPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiInterfacesPost(params: {
    body: InterfacesCreate
  }): Observable<Interfaces> {

    return this.createApiInterfacesPost$Response(params).pipe(
      map((r: StrictHttpResponse<Interfaces>) => r.body as Interfaces)
    );
  }

  /**
   * Path part for operation getApiInterfacesIdGet
   */
  static readonly GetApiInterfacesIdGetPath = '/api/interfaces/{id}';

  /**
   * Get.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiInterfacesIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiInterfacesIdGet$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<Interfaces>> {

    const rb = new RequestBuilder(this.rootUrl, InterfacesService.GetApiInterfacesIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Interfaces>;
      })
    );
  }

  /**
   * Get.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiInterfacesIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiInterfacesIdGet(params: {
    id: string;
  }): Observable<Interfaces> {

    return this.getApiInterfacesIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<Interfaces>) => r.body as Interfaces)
    );
  }

  /**
   * Path part for operation deleteApiInterfacesIdDelete
   */
  static readonly DeleteApiInterfacesIdDeletePath = '/api/interfaces/{id}';

  /**
   * Delete.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteApiInterfacesIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiInterfacesIdDelete$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, InterfacesService.DeleteApiInterfacesIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `deleteApiInterfacesIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiInterfacesIdDelete(params: {
    id: string;
  }): Observable<any> {

    return this.deleteApiInterfacesIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
