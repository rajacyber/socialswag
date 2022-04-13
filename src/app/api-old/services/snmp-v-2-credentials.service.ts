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

import { SnmpV2Credentials } from '../models/snmp-v-2-credentials';
import { SnmpV2CredentialsCreate } from '../models/snmp-v-2-credentials-create';
import { SnmpV2CredentialsGetResp } from '../models/snmp-v-2-credentials-get-resp';

@Injectable({
  providedIn: 'root',
})
export class SnmpV2CredentialsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllApiSnmpv2CredentialsGet
   */
  static readonly GetAllApiSnmpv2CredentialsGetPath = '/api/snmpv2credentials/';

  /**
   * Get All.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllApiSnmpv2CredentialsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiSnmpv2CredentialsGet$Response(params?: {

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
  }): Observable<StrictHttpResponse<SnmpV2CredentialsGetResp>> {

    const rb = new RequestBuilder(this.rootUrl, SnmpV2CredentialsService.GetAllApiSnmpv2CredentialsGetPath, 'get');
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
        return r as StrictHttpResponse<SnmpV2CredentialsGetResp>;
      })
    );
  }

  /**
   * Get All.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllApiSnmpv2CredentialsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiSnmpv2CredentialsGet(params?: {

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
  }): Observable<SnmpV2CredentialsGetResp> {

    return this.getAllApiSnmpv2CredentialsGet$Response(params).pipe(
      map((r: StrictHttpResponse<SnmpV2CredentialsGetResp>) => r.body as SnmpV2CredentialsGetResp)
    );
  }

  /**
   * Path part for operation updateApiSnmpv2CredentialsPut
   */
  static readonly UpdateApiSnmpv2CredentialsPutPath = '/api/snmpv2credentials/';

  /**
   * Update.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateApiSnmpv2CredentialsPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiSnmpv2CredentialsPut$Response(params: {
    body: SnmpV2Credentials
  }): Observable<StrictHttpResponse<SnmpV2Credentials>> {

    const rb = new RequestBuilder(this.rootUrl, SnmpV2CredentialsService.UpdateApiSnmpv2CredentialsPutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SnmpV2Credentials>;
      })
    );
  }

  /**
   * Update.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateApiSnmpv2CredentialsPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiSnmpv2CredentialsPut(params: {
    body: SnmpV2Credentials
  }): Observable<SnmpV2Credentials> {

    return this.updateApiSnmpv2CredentialsPut$Response(params).pipe(
      map((r: StrictHttpResponse<SnmpV2Credentials>) => r.body as SnmpV2Credentials)
    );
  }

  /**
   * Path part for operation createApiSnmpv2CredentialsPost
   */
  static readonly CreateApiSnmpv2CredentialsPostPath = '/api/snmpv2credentials/';

  /**
   * Create.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createApiSnmpv2CredentialsPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiSnmpv2CredentialsPost$Response(params: {
    body: SnmpV2CredentialsCreate
  }): Observable<StrictHttpResponse<SnmpV2Credentials>> {

    const rb = new RequestBuilder(this.rootUrl, SnmpV2CredentialsService.CreateApiSnmpv2CredentialsPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SnmpV2Credentials>;
      })
    );
  }

  /**
   * Create.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createApiSnmpv2CredentialsPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiSnmpv2CredentialsPost(params: {
    body: SnmpV2CredentialsCreate
  }): Observable<SnmpV2Credentials> {

    return this.createApiSnmpv2CredentialsPost$Response(params).pipe(
      map((r: StrictHttpResponse<SnmpV2Credentials>) => r.body as SnmpV2Credentials)
    );
  }

  /**
   * Path part for operation getApiSnmpv2CredentialsIdGet
   */
  static readonly GetApiSnmpv2CredentialsIdGetPath = '/api/snmpv2credentials/{id}';

  /**
   * Get.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiSnmpv2CredentialsIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiSnmpv2CredentialsIdGet$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<SnmpV2Credentials>> {

    const rb = new RequestBuilder(this.rootUrl, SnmpV2CredentialsService.GetApiSnmpv2CredentialsIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SnmpV2Credentials>;
      })
    );
  }

  /**
   * Get.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiSnmpv2CredentialsIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiSnmpv2CredentialsIdGet(params: {
    id: string;
  }): Observable<SnmpV2Credentials> {

    return this.getApiSnmpv2CredentialsIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<SnmpV2Credentials>) => r.body as SnmpV2Credentials)
    );
  }

  /**
   * Path part for operation deleteApiSnmpv2CredentialsIdDelete
   */
  static readonly DeleteApiSnmpv2CredentialsIdDeletePath = '/api/snmpv2credentials/{id}';

  /**
   * Delete.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteApiSnmpv2CredentialsIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiSnmpv2CredentialsIdDelete$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, SnmpV2CredentialsService.DeleteApiSnmpv2CredentialsIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `deleteApiSnmpv2CredentialsIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiSnmpv2CredentialsIdDelete(params: {
    id: string;
  }): Observable<any> {

    return this.deleteApiSnmpv2CredentialsIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
