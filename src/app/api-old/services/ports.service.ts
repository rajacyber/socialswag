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

import { Ports } from '../models/ports';
import { PortsCreate } from '../models/ports-create';
import { PortsGetResp } from '../models/ports-get-resp';

@Injectable({
  providedIn: 'root',
})
export class PortsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllApiPortsGet
   */
  static readonly GetAllApiPortsGetPath = '/api/ports/';

  /**
   * Get All.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllApiPortsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiPortsGet$Response(params?: {

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
  }): Observable<StrictHttpResponse<PortsGetResp>> {

    const rb = new RequestBuilder(this.rootUrl, PortsService.GetAllApiPortsGetPath, 'get');
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
        return r as StrictHttpResponse<PortsGetResp>;
      })
    );
  }

  /**
   * Get All.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllApiPortsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiPortsGet(params?: {

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
  }): Observable<PortsGetResp> {

    return this.getAllApiPortsGet$Response(params).pipe(
      map((r: StrictHttpResponse<PortsGetResp>) => r.body as PortsGetResp)
    );
  }

  /**
   * Path part for operation updateApiPortsPut
   */
  static readonly UpdateApiPortsPutPath = '/api/ports/';

  /**
   * Update.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateApiPortsPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiPortsPut$Response(params: {
    body: Ports
  }): Observable<StrictHttpResponse<Ports>> {

    const rb = new RequestBuilder(this.rootUrl, PortsService.UpdateApiPortsPutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Ports>;
      })
    );
  }

  /**
   * Update.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateApiPortsPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiPortsPut(params: {
    body: Ports
  }): Observable<Ports> {

    return this.updateApiPortsPut$Response(params).pipe(
      map((r: StrictHttpResponse<Ports>) => r.body as Ports)
    );
  }

  /**
   * Path part for operation createApiPortsPost
   */
  static readonly CreateApiPortsPostPath = '/api/ports/';

  /**
   * Create.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createApiPortsPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiPortsPost$Response(params: {
    body: PortsCreate
  }): Observable<StrictHttpResponse<Ports>> {

    const rb = new RequestBuilder(this.rootUrl, PortsService.CreateApiPortsPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Ports>;
      })
    );
  }

  /**
   * Create.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createApiPortsPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiPortsPost(params: {
    body: PortsCreate
  }): Observable<Ports> {

    return this.createApiPortsPost$Response(params).pipe(
      map((r: StrictHttpResponse<Ports>) => r.body as Ports)
    );
  }

  /**
   * Path part for operation getApiPortsIdGet
   */
  static readonly GetApiPortsIdGetPath = '/api/ports/{id}';

  /**
   * Get.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiPortsIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiPortsIdGet$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<Ports>> {

    const rb = new RequestBuilder(this.rootUrl, PortsService.GetApiPortsIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Ports>;
      })
    );
  }

  /**
   * Get.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiPortsIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiPortsIdGet(params: {
    id: string;
  }): Observable<Ports> {

    return this.getApiPortsIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<Ports>) => r.body as Ports)
    );
  }

  /**
   * Path part for operation deleteApiPortsIdDelete
   */
  static readonly DeleteApiPortsIdDeletePath = '/api/ports/{id}';

  /**
   * Delete.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteApiPortsIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiPortsIdDelete$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, PortsService.DeleteApiPortsIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `deleteApiPortsIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiPortsIdDelete(params: {
    id: string;
  }): Observable<any> {

    return this.deleteApiPortsIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
