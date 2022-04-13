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


@Injectable({
  providedIn: 'root',
})
export class ApiService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation loginApiLoginGet
   */
  static readonly LoginApiLoginGetPath = '/api/login';

  /**
   * Login.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `loginApiLoginGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  loginApiLoginGet$Response(params?: {
    code?: string;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.LoginApiLoginGetPath, 'get');
    if (params) {
      rb.query('code', params.code, {});
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
   * Login.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `loginApiLoginGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  loginApiLoginGet(params?: {
    code?: string;
  }): Observable<any> {

    return this.loginApiLoginGet$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation logoutApiLogoutGet
   */
  static readonly LogoutApiLogoutGetPath = '/api/logout';

  /**
   * Logout.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `logoutApiLogoutGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  logoutApiLogoutGet$Response(params?: {
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.LogoutApiLogoutGetPath, 'get');
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
   * Logout.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `logoutApiLogoutGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  logoutApiLogoutGet(params?: {
  }): Observable<any> {

    return this.logoutApiLogoutGet$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation meApiMeGet
   */
  static readonly MeApiMeGetPath = '/api/me';

  /**
   * Me.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `meApiMeGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  meApiMeGet$Response(params?: {
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.MeApiMeGetPath, 'get');
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
   * Me.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `meApiMeGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  meApiMeGet(params?: {
  }): Observable<any> {

    return this.meApiMeGet$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation pongPingGet
   */
  static readonly PongPingGetPath = '/ping';

  /**
   * Pong.
   *
   * Sanity check.
   * This will let the user know that the service is operational.
   * And this path operation will:
   * * show a lifesign
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `pongPingGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  pongPingGet$Response(params?: {
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.PongPingGetPath, 'get');
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
   * Pong.
   *
   * Sanity check.
   * This will let the user know that the service is operational.
   * And this path operation will:
   * * show a lifesign
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `pongPingGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  pongPingGet(params?: {
  }): Observable<any> {

    return this.pongPingGet$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
