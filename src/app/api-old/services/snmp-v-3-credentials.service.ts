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

import { SnmpV3Credentials } from '../models/snmp-v-3-credentials';
import { SnmpV3CredentialsCreate } from '../models/snmp-v-3-credentials-create';
import { SnmpV3CredentialsGetResp } from '../models/snmp-v-3-credentials-get-resp';

@Injectable({
  providedIn: 'root',
})
export class SnmpV3CredentialsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllApiSnmpv3CredentialsGet
   */
  static readonly GetAllApiSnmpv3CredentialsGetPath = '/api/snmpv3credentials/';

  /**
   * Get All.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllApiSnmpv3CredentialsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiSnmpv3CredentialsGet$Response(params?: {

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
  }): Observable<StrictHttpResponse<SnmpV3CredentialsGetResp>> {

    const rb = new RequestBuilder(this.rootUrl, SnmpV3CredentialsService.GetAllApiSnmpv3CredentialsGetPath, 'get');
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
        return r as StrictHttpResponse<SnmpV3CredentialsGetResp>;
      })
    );
  }

  /**
   * Get All.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllApiSnmpv3CredentialsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiSnmpv3CredentialsGet(params?: {

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
  }): Observable<SnmpV3CredentialsGetResp> {

    return this.getAllApiSnmpv3CredentialsGet$Response(params).pipe(
      map((r: StrictHttpResponse<SnmpV3CredentialsGetResp>) => r.body as SnmpV3CredentialsGetResp)
    );
  }

  /**
   * Path part for operation updateApiSnmpv3CredentialsPut
   */
  static readonly UpdateApiSnmpv3CredentialsPutPath = '/api/snmpv3credentials/';

  /**
   * Update.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateApiSnmpv3CredentialsPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiSnmpv3CredentialsPut$Response(params: {
    body: SnmpV3Credentials
  }): Observable<StrictHttpResponse<SnmpV3Credentials>> {

    const rb = new RequestBuilder(this.rootUrl, SnmpV3CredentialsService.UpdateApiSnmpv3CredentialsPutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SnmpV3Credentials>;
      })
    );
  }

  /**
   * Update.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateApiSnmpv3CredentialsPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiSnmpv3CredentialsPut(params: {
    body: SnmpV3Credentials
  }): Observable<SnmpV3Credentials> {

    return this.updateApiSnmpv3CredentialsPut$Response(params).pipe(
      map((r: StrictHttpResponse<SnmpV3Credentials>) => r.body as SnmpV3Credentials)
    );
  }

  /**
   * Path part for operation createApiSnmpv3CredentialsPost
   */
  static readonly CreateApiSnmpv3CredentialsPostPath = '/api/snmpv3credentials/';

  /**
   * Create.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createApiSnmpv3CredentialsPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiSnmpv3CredentialsPost$Response(params: {
    body: SnmpV3CredentialsCreate
  }): Observable<StrictHttpResponse<SnmpV3Credentials>> {

    const rb = new RequestBuilder(this.rootUrl, SnmpV3CredentialsService.CreateApiSnmpv3CredentialsPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SnmpV3Credentials>;
      })
    );
  }

  /**
   * Create.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createApiSnmpv3CredentialsPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiSnmpv3CredentialsPost(params: {
    body: SnmpV3CredentialsCreate
  }): Observable<SnmpV3Credentials> {

    return this.createApiSnmpv3CredentialsPost$Response(params).pipe(
      map((r: StrictHttpResponse<SnmpV3Credentials>) => r.body as SnmpV3Credentials)
    );
  }

  /**
   * Path part for operation getApiSnmpv3CredentialsIdGet
   */
  static readonly GetApiSnmpv3CredentialsIdGetPath = '/api/snmpv3credentials/{id}';

  /**
   * Get.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiSnmpv3CredentialsIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiSnmpv3CredentialsIdGet$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<SnmpV3Credentials>> {

    const rb = new RequestBuilder(this.rootUrl, SnmpV3CredentialsService.GetApiSnmpv3CredentialsIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SnmpV3Credentials>;
      })
    );
  }

  /**
   * Get.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiSnmpv3CredentialsIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiSnmpv3CredentialsIdGet(params: {
    id: string;
  }): Observable<SnmpV3Credentials> {

    return this.getApiSnmpv3CredentialsIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<SnmpV3Credentials>) => r.body as SnmpV3Credentials)
    );
  }

  /**
   * Path part for operation deleteApiSnmpv3CredentialsIdDelete
   */
  static readonly DeleteApiSnmpv3CredentialsIdDeletePath = '/api/snmpv3credentials/{id}';

  /**
   * Delete.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteApiSnmpv3CredentialsIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiSnmpv3CredentialsIdDelete$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, SnmpV3CredentialsService.DeleteApiSnmpv3CredentialsIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `deleteApiSnmpv3CredentialsIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiSnmpv3CredentialsIdDelete(params: {
    id: string;
  }): Observable<any> {

    return this.deleteApiSnmpv3CredentialsIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
