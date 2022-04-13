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

import { ApiClient } from '../models/api-client';
import { ApiClientCreate } from '../models/api-client-create';

@Injectable({
  providedIn: 'root',
})
export class ApiClientsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getApiClientsApiKapiclientsGet
   */
  static readonly GetApiClientsApiKapiclientsGetPath = '/api/kapiclients';

  /**
   * Get Api Clients.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiClientsApiKapiclientsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiClientsApiKapiclientsGet$Response(params?: {
    realm?: any;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, ApiClientsService.GetApiClientsApiKapiclientsGetPath, 'get');
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
   * Get Api Clients.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiClientsApiKapiclientsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiClientsApiKapiclientsGet(params?: {
    realm?: any;
  }): Observable<any> {

    return this.getApiClientsApiKapiclientsGet$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation updateApiClientApiKapiclientsPut
   */
  static readonly UpdateApiClientApiKapiclientsPutPath = '/api/kapiclients';

  /**
   * Update Api Client.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateApiClientApiKapiclientsPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiClientApiKapiclientsPut$Response(params: {
    realm?: any;
    body: ApiClient
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, ApiClientsService.UpdateApiClientApiKapiclientsPutPath, 'put');
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
   * Update Api Client.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateApiClientApiKapiclientsPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiClientApiKapiclientsPut(params: {
    realm?: any;
    body: ApiClient
  }): Observable<any> {

    return this.updateApiClientApiKapiclientsPut$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation createApiClientApiKapiclientsPost
   */
  static readonly CreateApiClientApiKapiclientsPostPath = '/api/kapiclients';

  /**
   * Create Api Client.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createApiClientApiKapiclientsPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiClientApiKapiclientsPost$Response(params: {
    realm?: any;
    body: ApiClientCreate
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, ApiClientsService.CreateApiClientApiKapiclientsPostPath, 'post');
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
   * Create Api Client.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createApiClientApiKapiclientsPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiClientApiKapiclientsPost(params: {
    realm?: any;
    body: ApiClientCreate
  }): Observable<any> {

    return this.createApiClientApiKapiclientsPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation getApiClientSecretApiKapiclientsClientIdGet
   */
  static readonly GetApiClientSecretApiKapiclientsClientIdGetPath = '/api/kapiclients/{clientId}';

  /**
   * Get Api Client Secret.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiClientSecretApiKapiclientsClientIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiClientSecretApiKapiclientsClientIdGet$Response(params: {
    clientId: string;
    realm?: any;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, ApiClientsService.GetApiClientSecretApiKapiclientsClientIdGetPath, 'get');
    if (params) {
      rb.path('clientId', params.clientId, {});
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
   * Get Api Client Secret.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiClientSecretApiKapiclientsClientIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiClientSecretApiKapiclientsClientIdGet(params: {
    clientId: string;
    realm?: any;
  }): Observable<any> {

    return this.getApiClientSecretApiKapiclientsClientIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation deleteApiClientApiKapiclientsClientIdDelete
   */
  static readonly DeleteApiClientApiKapiclientsClientIdDeletePath = '/api/kapiclients/{clientId}';

  /**
   * Delete Api Client.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteApiClientApiKapiclientsClientIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiClientApiKapiclientsClientIdDelete$Response(params: {
    clientId: string;
    realm?: any;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, ApiClientsService.DeleteApiClientApiKapiclientsClientIdDeletePath, 'delete');
    if (params) {
      rb.path('clientId', params.clientId, {});
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
   * Delete Api Client.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteApiClientApiKapiclientsClientIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiClientApiKapiclientsClientIdDelete(params: {
    clientId: string;
    realm?: any;
  }): Observable<any> {

    return this.deleteApiClientApiKapiclientsClientIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation generateApiKeyApiKapiclientsIdGetApiKeyPost
   */
  static readonly GenerateApiKeyApiKapiclientsIdGetApiKeyPostPath = '/api/kapiclients/{id}/getApiKey';

  /**
   * Generate Apikey.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `generateApiKeyApiKapiclientsIdGetApiKeyPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  generateApiKeyApiKapiclientsIdGetApiKeyPost$Response(params: {
    realm?: any;
    body: ApiClientCreate
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, ApiClientsService.GenerateApiKeyApiKapiclientsIdGetApiKeyPostPath, 'post');
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
   * Generate Apikey.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `generateApiKeyApiKapiclientsIdGetApiKeyPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  generateApiKeyApiKapiclientsIdGetApiKeyPost(params: {
    realm?: any;
    body: ApiClientCreate
  }): Observable<any> {

    return this.generateApiKeyApiKapiclientsIdGetApiKeyPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation getApiClientRoleApiKapiclientsClientIdGetclientrolePost
   */
  static readonly GetApiClientRoleApiKapiclientsClientIdGetclientrolePostPath = '/api/kapiclients/{clientId}/getclientrole';

  /**
   * Get Api Client Role.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiClientRoleApiKapiclientsClientIdGetclientrolePost()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiClientRoleApiKapiclientsClientIdGetclientrolePost$Response(params: {
    clientId: string;
    realm?: any;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, ApiClientsService.GetApiClientRoleApiKapiclientsClientIdGetclientrolePostPath, 'post');
    if (params) {
      rb.path('clientId', params.clientId, {});
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
   * Get Api Client Role.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiClientRoleApiKapiclientsClientIdGetclientrolePost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiClientRoleApiKapiclientsClientIdGetclientrolePost(params: {
    clientId: string;
    realm?: any;
  }): Observable<any> {

    return this.getApiClientRoleApiKapiclientsClientIdGetclientrolePost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
