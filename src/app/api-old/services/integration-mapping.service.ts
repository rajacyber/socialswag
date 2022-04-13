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

import { IntegrationMapping } from '../models/integration-mapping';
import { IntegrationMappingCreate } from '../models/integration-mapping-create';
import { IntegrationMappingGetResp } from '../models/integration-mapping-get-resp';

@Injectable({
  providedIn: 'root',
})
export class IntegrationMappingService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllApiIntegrationmappingGet
   */
  static readonly GetAllApiIntegrationmappingGetPath = '/api/integrationmapping/';

  /**
   * Get All.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllApiIntegrationmappingGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiIntegrationmappingGet$Response(params?: {

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
  }): Observable<StrictHttpResponse<IntegrationMappingGetResp>> {

    const rb = new RequestBuilder(this.rootUrl, IntegrationMappingService.GetAllApiIntegrationmappingGetPath, 'get');
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
        return r as StrictHttpResponse<IntegrationMappingGetResp>;
      })
    );
  }

  /**
   * Get All.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllApiIntegrationmappingGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiIntegrationmappingGet(params?: {

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
  }): Observable<IntegrationMappingGetResp> {

    return this.getAllApiIntegrationmappingGet$Response(params).pipe(
      map((r: StrictHttpResponse<IntegrationMappingGetResp>) => r.body as IntegrationMappingGetResp)
    );
  }

  /**
   * Path part for operation updateApiIntegrationmappingPut
   */
  static readonly UpdateApiIntegrationmappingPutPath = '/api/integrationmapping/';

  /**
   * Update.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateApiIntegrationmappingPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiIntegrationmappingPut$Response(params: {
    body: IntegrationMapping
  }): Observable<StrictHttpResponse<IntegrationMapping>> {

    const rb = new RequestBuilder(this.rootUrl, IntegrationMappingService.UpdateApiIntegrationmappingPutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<IntegrationMapping>;
      })
    );
  }

  /**
   * Update.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateApiIntegrationmappingPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiIntegrationmappingPut(params: {
    body: IntegrationMapping
  }): Observable<IntegrationMapping> {

    return this.updateApiIntegrationmappingPut$Response(params).pipe(
      map((r: StrictHttpResponse<IntegrationMapping>) => r.body as IntegrationMapping)
    );
  }

  /**
   * Path part for operation createApiIntegrationmappingPost
   */
  static readonly CreateApiIntegrationmappingPostPath = '/api/integrationmapping/';

  /**
   * Create.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createApiIntegrationmappingPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiIntegrationmappingPost$Response(params: {
    body: IntegrationMappingCreate
  }): Observable<StrictHttpResponse<IntegrationMapping>> {

    const rb = new RequestBuilder(this.rootUrl, IntegrationMappingService.CreateApiIntegrationmappingPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<IntegrationMapping>;
      })
    );
  }

  /**
   * Create.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createApiIntegrationmappingPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiIntegrationmappingPost(params: {
    body: IntegrationMappingCreate
  }): Observable<IntegrationMapping> {

    return this.createApiIntegrationmappingPost$Response(params).pipe(
      map((r: StrictHttpResponse<IntegrationMapping>) => r.body as IntegrationMapping)
    );
  }

  /**
   * Path part for operation getApiIntegrationmappingIdGet
   */
  static readonly GetApiIntegrationmappingIdGetPath = '/api/integrationmapping/{id}';

  /**
   * Get.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiIntegrationmappingIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiIntegrationmappingIdGet$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<IntegrationMapping>> {

    const rb = new RequestBuilder(this.rootUrl, IntegrationMappingService.GetApiIntegrationmappingIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<IntegrationMapping>;
      })
    );
  }

  /**
   * Get.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiIntegrationmappingIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiIntegrationmappingIdGet(params: {
    id: string;
  }): Observable<IntegrationMapping> {

    return this.getApiIntegrationmappingIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<IntegrationMapping>) => r.body as IntegrationMapping)
    );
  }

  /**
   * Path part for operation deleteApiIntegrationmappingIdDelete
   */
  static readonly DeleteApiIntegrationmappingIdDeletePath = '/api/integrationmapping/{id}';

  /**
   * Delete.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteApiIntegrationmappingIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiIntegrationmappingIdDelete$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, IntegrationMappingService.DeleteApiIntegrationmappingIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `deleteApiIntegrationmappingIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiIntegrationmappingIdDelete(params: {
    id: string;
  }): Observable<any> {

    return this.deleteApiIntegrationmappingIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
