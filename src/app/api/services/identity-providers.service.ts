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

import { KeycloakIdentity } from '../models/keycloak-identity';

@Injectable({
  providedIn: 'root',
})
export class IdentityProvidersService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAvailableProvidersApiKidentityprovidersAvailableGet
   */
  static readonly GetAvailableProvidersApiKidentityprovidersAvailableGetPath = '/api/kidentityproviders/available';

  /**
   * Get Available Providers.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAvailableProvidersApiKidentityprovidersAvailableGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAvailableProvidersApiKidentityprovidersAvailableGet$Response(params?: {
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, IdentityProvidersService.GetAvailableProvidersApiKidentityprovidersAvailableGetPath, 'get');
    if (params) {
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
   * Get Available Providers.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAvailableProvidersApiKidentityprovidersAvailableGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAvailableProvidersApiKidentityprovidersAvailableGet(params?: {
  }): Observable<any> {

    return this.getAvailableProvidersApiKidentityprovidersAvailableGet$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation getIdentitiesApiKidentityprovidersGet
   */
  static readonly GetIdentitiesApiKidentityprovidersGetPath = '/api/kidentityproviders';

  /**
   * Get Identities.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getIdentitiesApiKidentityprovidersGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getIdentitiesApiKidentityprovidersGet$Response(params?: {
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, IdentityProvidersService.GetIdentitiesApiKidentityprovidersGetPath, 'get');
    if (params) {
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
   * Get Identities.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getIdentitiesApiKidentityprovidersGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getIdentitiesApiKidentityprovidersGet(params?: {
  }): Observable<any> {

    return this.getIdentitiesApiKidentityprovidersGet$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation updateIdentityApiKidentityprovidersPut
   */
  static readonly UpdateIdentityApiKidentityprovidersPutPath = '/api/kidentityproviders';

  /**
   * Update Identity.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateIdentityApiKidentityprovidersPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateIdentityApiKidentityprovidersPut$Response(params: {
    body: KeycloakIdentity
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, IdentityProvidersService.UpdateIdentityApiKidentityprovidersPutPath, 'put');
    if (params) {
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
   * Update Identity.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateIdentityApiKidentityprovidersPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateIdentityApiKidentityprovidersPut(params: {
    body: KeycloakIdentity
  }): Observable<any> {

    return this.updateIdentityApiKidentityprovidersPut$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation createIdentityApiKidentityprovidersPost
   */
  static readonly CreateIdentityApiKidentityprovidersPostPath = '/api/kidentityproviders';

  /**
   * Create Identity.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createIdentityApiKidentityprovidersPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createIdentityApiKidentityprovidersPost$Response(params: {
    body: KeycloakIdentity
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, IdentityProvidersService.CreateIdentityApiKidentityprovidersPostPath, 'post');
    if (params) {
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
   * Create Identity.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createIdentityApiKidentityprovidersPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createIdentityApiKidentityprovidersPost(params: {
    body: KeycloakIdentity
  }): Observable<any> {

    return this.createIdentityApiKidentityprovidersPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation getIdentityApiKidentityprovidersAliasGet
   */
  static readonly GetIdentityApiKidentityprovidersAliasGetPath = '/api/kidentityproviders/{alias}';

  /**
   * Get Identity.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getIdentityApiKidentityprovidersAliasGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getIdentityApiKidentityprovidersAliasGet$Response(params: {
    alias: string;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, IdentityProvidersService.GetIdentityApiKidentityprovidersAliasGetPath, 'get');
    if (params) {
      rb.path('alias', params.alias, {});
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
   * Get Identity.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getIdentityApiKidentityprovidersAliasGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getIdentityApiKidentityprovidersAliasGet(params: {
    alias: string;
  }): Observable<any> {

    return this.getIdentityApiKidentityprovidersAliasGet$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation deleteIdentityApiKidentityprovidersAliasDelete
   */
  static readonly DeleteIdentityApiKidentityprovidersAliasDeletePath = '/api/kidentityproviders/{alias}';

  /**
   * Delete Identity.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteIdentityApiKidentityprovidersAliasDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteIdentityApiKidentityprovidersAliasDelete$Response(params: {
    alias: string;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, IdentityProvidersService.DeleteIdentityApiKidentityprovidersAliasDeletePath, 'delete');
    if (params) {
      rb.path('alias', params.alias, {});
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
   * Delete Identity.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteIdentityApiKidentityprovidersAliasDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteIdentityApiKidentityprovidersAliasDelete(params: {
    alias: string;
  }): Observable<any> {

    return this.deleteIdentityApiKidentityprovidersAliasDelete$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
