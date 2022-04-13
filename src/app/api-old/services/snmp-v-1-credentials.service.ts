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

import { SnmpV1Credentials } from '../models/snmp-v-1-credentials';
import { SnmpV1CredentialsCreate } from '../models/snmp-v-1-credentials-create';

@Injectable({
  providedIn: 'root',
})
export class SnmpV1CredentialsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllApiSnmpv1CredentialsGet
   */
  static readonly GetAllApiSnmpv1CredentialsGetPath = '/api/snmpv1credentials/';

  /**
   * Get All.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllApiSnmpv1CredentialsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiSnmpv1CredentialsGet$Response(params?: {
    'q'?: string;
    skip?: number;
    limit?: number;
    sort?: string;
  }): Observable<StrictHttpResponse<Array<SnmpV1Credentials>>> {

    const rb = new RequestBuilder(this.rootUrl, SnmpV1CredentialsService.GetAllApiSnmpv1CredentialsGetPath, 'get');
    if (params) {
      rb.query('q', params['q'], {});
      rb.query('skip', params.skip, {});
      rb.query('limit', params.limit, {});
      rb.query('sort', params.sort, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SnmpV1Credentials>>;
      })
    );
  }

  /**
   * Get All.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllApiSnmpv1CredentialsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiSnmpv1CredentialsGet(params?: {
    'q'?: string;
    skip?: number;
    limit?: number;
    sort?: string;
  }): Observable<Array<SnmpV1Credentials>> {

    return this.getAllApiSnmpv1CredentialsGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<SnmpV1Credentials>>) => r.body as Array<SnmpV1Credentials>)
    );
  }

  /**
   * Path part for operation updateApiSnmpv1CredentialsPut
   */
  static readonly UpdateApiSnmpv1CredentialsPutPath = '/api/snmpv1credentials/';

  /**
   * Update.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateApiSnmpv1CredentialsPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiSnmpv1CredentialsPut$Response(params: {
    body: SnmpV1Credentials
  }): Observable<StrictHttpResponse<SnmpV1Credentials>> {

    const rb = new RequestBuilder(this.rootUrl, SnmpV1CredentialsService.UpdateApiSnmpv1CredentialsPutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SnmpV1Credentials>;
      })
    );
  }

  /**
   * Update.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateApiSnmpv1CredentialsPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiSnmpv1CredentialsPut(params: {
    body: SnmpV1Credentials
  }): Observable<SnmpV1Credentials> {

    return this.updateApiSnmpv1CredentialsPut$Response(params).pipe(
      map((r: StrictHttpResponse<SnmpV1Credentials>) => r.body as SnmpV1Credentials)
    );
  }

  /**
   * Path part for operation createApiSnmpv1CredentialsPost
   */
  static readonly CreateApiSnmpv1CredentialsPostPath = '/api/snmpv1credentials/';

  /**
   * Create.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createApiSnmpv1CredentialsPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiSnmpv1CredentialsPost$Response(params: {
    body: SnmpV1CredentialsCreate
  }): Observable<StrictHttpResponse<SnmpV1Credentials>> {

    const rb = new RequestBuilder(this.rootUrl, SnmpV1CredentialsService.CreateApiSnmpv1CredentialsPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SnmpV1Credentials>;
      })
    );
  }

  /**
   * Create.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createApiSnmpv1CredentialsPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiSnmpv1CredentialsPost(params: {
    body: SnmpV1CredentialsCreate
  }): Observable<SnmpV1Credentials> {

    return this.createApiSnmpv1CredentialsPost$Response(params).pipe(
      map((r: StrictHttpResponse<SnmpV1Credentials>) => r.body as SnmpV1Credentials)
    );
  }

  /**
   * Path part for operation bulkcreateApiSnmpv1CredentialsBulkcreatePost
   */
  static readonly BulkcreateApiSnmpv1CredentialsBulkcreatePostPath = '/api/snmpv1credentials/bulkcreate';

  /**
   * Bulkcreate.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `bulkcreateApiSnmpv1CredentialsBulkcreatePost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  bulkcreateApiSnmpv1CredentialsBulkcreatePost$Response(params: {
    body: Array<SnmpV1CredentialsCreate>
  }): Observable<StrictHttpResponse<SnmpV1Credentials>> {

    const rb = new RequestBuilder(this.rootUrl, SnmpV1CredentialsService.BulkcreateApiSnmpv1CredentialsBulkcreatePostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SnmpV1Credentials>;
      })
    );
  }

  /**
   * Bulkcreate.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `bulkcreateApiSnmpv1CredentialsBulkcreatePost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  bulkcreateApiSnmpv1CredentialsBulkcreatePost(params: {
    body: Array<SnmpV1CredentialsCreate>
  }): Observable<SnmpV1Credentials> {

    return this.bulkcreateApiSnmpv1CredentialsBulkcreatePost$Response(params).pipe(
      map((r: StrictHttpResponse<SnmpV1Credentials>) => r.body as SnmpV1Credentials)
    );
  }

  /**
   * Path part for operation getApiSnmpv1CredentialsIdGet
   */
  static readonly GetApiSnmpv1CredentialsIdGetPath = '/api/snmpv1credentials/{id}';

  /**
   * Get.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiSnmpv1CredentialsIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiSnmpv1CredentialsIdGet$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<SnmpV1Credentials>> {

    const rb = new RequestBuilder(this.rootUrl, SnmpV1CredentialsService.GetApiSnmpv1CredentialsIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SnmpV1Credentials>;
      })
    );
  }

  /**
   * Get.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiSnmpv1CredentialsIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiSnmpv1CredentialsIdGet(params: {
    id: string;
  }): Observable<SnmpV1Credentials> {

    return this.getApiSnmpv1CredentialsIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<SnmpV1Credentials>) => r.body as SnmpV1Credentials)
    );
  }

  /**
   * Path part for operation deleteApiSnmpv1CredentialsIdDelete
   */
  static readonly DeleteApiSnmpv1CredentialsIdDeletePath = '/api/snmpv1credentials/{id}';

  /**
   * Delete.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteApiSnmpv1CredentialsIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiSnmpv1CredentialsIdDelete$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, SnmpV1CredentialsService.DeleteApiSnmpv1CredentialsIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `deleteApiSnmpv1CredentialsIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiSnmpv1CredentialsIdDelete(params: {
    id: string;
  }): Observable<any> {

    return this.deleteApiSnmpv1CredentialsIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
