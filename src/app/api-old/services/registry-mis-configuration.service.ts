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

import { RegistryMisConfiguration } from '../models/registry-mis-configuration';
import { RegistryMisConfigurationCreate } from '../models/registry-mis-configuration-create';
import { RegistryMisConfigurationGetResp } from '../models/registry-mis-configuration-get-resp';

@Injectable({
  providedIn: 'root',
})
export class RegistryMisConfigurationService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllApiRegistrymisconfigurationGet
   */
  static readonly GetAllApiRegistrymisconfigurationGetPath = '/api/registrymisconfiguration/';

  /**
   * Get All.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllApiRegistrymisconfigurationGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiRegistrymisconfigurationGet$Response(params?: {

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
  }): Observable<StrictHttpResponse<RegistryMisConfigurationGetResp>> {

    const rb = new RequestBuilder(this.rootUrl, RegistryMisConfigurationService.GetAllApiRegistrymisconfigurationGetPath, 'get');
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
        return r as StrictHttpResponse<RegistryMisConfigurationGetResp>;
      })
    );
  }

  /**
   * Get All.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllApiRegistrymisconfigurationGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiRegistrymisconfigurationGet(params?: {

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
  }): Observable<RegistryMisConfigurationGetResp> {

    return this.getAllApiRegistrymisconfigurationGet$Response(params).pipe(
      map((r: StrictHttpResponse<RegistryMisConfigurationGetResp>) => r.body as RegistryMisConfigurationGetResp)
    );
  }

  /**
   * Path part for operation updateApiRegistrymisconfigurationPut
   */
  static readonly UpdateApiRegistrymisconfigurationPutPath = '/api/registrymisconfiguration/';

  /**
   * Update.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateApiRegistrymisconfigurationPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiRegistrymisconfigurationPut$Response(params: {
    body: RegistryMisConfiguration
  }): Observable<StrictHttpResponse<RegistryMisConfiguration>> {

    const rb = new RequestBuilder(this.rootUrl, RegistryMisConfigurationService.UpdateApiRegistrymisconfigurationPutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<RegistryMisConfiguration>;
      })
    );
  }

  /**
   * Update.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateApiRegistrymisconfigurationPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiRegistrymisconfigurationPut(params: {
    body: RegistryMisConfiguration
  }): Observable<RegistryMisConfiguration> {

    return this.updateApiRegistrymisconfigurationPut$Response(params).pipe(
      map((r: StrictHttpResponse<RegistryMisConfiguration>) => r.body as RegistryMisConfiguration)
    );
  }

  /**
   * Path part for operation createApiRegistrymisconfigurationPost
   */
  static readonly CreateApiRegistrymisconfigurationPostPath = '/api/registrymisconfiguration/';

  /**
   * Create.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createApiRegistrymisconfigurationPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiRegistrymisconfigurationPost$Response(params: {
    body: RegistryMisConfigurationCreate
  }): Observable<StrictHttpResponse<RegistryMisConfiguration>> {

    const rb = new RequestBuilder(this.rootUrl, RegistryMisConfigurationService.CreateApiRegistrymisconfigurationPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<RegistryMisConfiguration>;
      })
    );
  }

  /**
   * Create.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createApiRegistrymisconfigurationPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiRegistrymisconfigurationPost(params: {
    body: RegistryMisConfigurationCreate
  }): Observable<RegistryMisConfiguration> {

    return this.createApiRegistrymisconfigurationPost$Response(params).pipe(
      map((r: StrictHttpResponse<RegistryMisConfiguration>) => r.body as RegistryMisConfiguration)
    );
  }

  /**
   * Path part for operation getApiRegistrymisconfigurationIdGet
   */
  static readonly GetApiRegistrymisconfigurationIdGetPath = '/api/registrymisconfiguration/{id}';

  /**
   * Get.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiRegistrymisconfigurationIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiRegistrymisconfigurationIdGet$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<RegistryMisConfiguration>> {

    const rb = new RequestBuilder(this.rootUrl, RegistryMisConfigurationService.GetApiRegistrymisconfigurationIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<RegistryMisConfiguration>;
      })
    );
  }

  /**
   * Get.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiRegistrymisconfigurationIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiRegistrymisconfigurationIdGet(params: {
    id: string;
  }): Observable<RegistryMisConfiguration> {

    return this.getApiRegistrymisconfigurationIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<RegistryMisConfiguration>) => r.body as RegistryMisConfiguration)
    );
  }

  /**
   * Path part for operation deleteApiRegistrymisconfigurationIdDelete
   */
  static readonly DeleteApiRegistrymisconfigurationIdDeletePath = '/api/registrymisconfiguration/{id}';

  /**
   * Delete.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteApiRegistrymisconfigurationIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiRegistrymisconfigurationIdDelete$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, RegistryMisConfigurationService.DeleteApiRegistrymisconfigurationIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `deleteApiRegistrymisconfigurationIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiRegistrymisconfigurationIdDelete(params: {
    id: string;
  }): Observable<any> {

    return this.deleteApiRegistrymisconfigurationIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
