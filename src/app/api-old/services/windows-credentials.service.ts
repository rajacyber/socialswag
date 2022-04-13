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

import { WindowsCredentials } from '../models/windows-credentials';
import { WindowsCredentialsCreate } from '../models/windows-credentials-create';

@Injectable({
  providedIn: 'root',
})
export class WindowsCredentialsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllApiWindowscredentialsGet
   */
  static readonly GetAllApiWindowscredentialsGetPath = '/api/windowscredentials/';

  /**
   * Get All.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllApiWindowscredentialsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiWindowscredentialsGet$Response(params?: {
    'q'?: string;
    skip?: number;
    limit?: number;
    sort?: string;
  }): Observable<StrictHttpResponse<Array<WindowsCredentials>>> {

    const rb = new RequestBuilder(this.rootUrl, WindowsCredentialsService.GetAllApiWindowscredentialsGetPath, 'get');
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
        return r as StrictHttpResponse<Array<WindowsCredentials>>;
      })
    );
  }

  /**
   * Get All.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllApiWindowscredentialsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiWindowscredentialsGet(params?: {
    'q'?: string;
    skip?: number;
    limit?: number;
    sort?: string;
  }): Observable<Array<WindowsCredentials>> {

    return this.getAllApiWindowscredentialsGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<WindowsCredentials>>) => r.body as Array<WindowsCredentials>)
    );
  }

  /**
   * Path part for operation updateApiWindowscredentialsPut
   */
  static readonly UpdateApiWindowscredentialsPutPath = '/api/windowscredentials/';

  /**
   * Update.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateApiWindowscredentialsPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiWindowscredentialsPut$Response(params: {
    body: WindowsCredentials
  }): Observable<StrictHttpResponse<WindowsCredentials>> {

    const rb = new RequestBuilder(this.rootUrl, WindowsCredentialsService.UpdateApiWindowscredentialsPutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<WindowsCredentials>;
      })
    );
  }

  /**
   * Update.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateApiWindowscredentialsPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiWindowscredentialsPut(params: {
    body: WindowsCredentials
  }): Observable<WindowsCredentials> {

    return this.updateApiWindowscredentialsPut$Response(params).pipe(
      map((r: StrictHttpResponse<WindowsCredentials>) => r.body as WindowsCredentials)
    );
  }

  /**
   * Path part for operation createApiWindowscredentialsPost
   */
  static readonly CreateApiWindowscredentialsPostPath = '/api/windowscredentials/';

  /**
   * Create.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createApiWindowscredentialsPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiWindowscredentialsPost$Response(params: {
    body: WindowsCredentialsCreate
  }): Observable<StrictHttpResponse<WindowsCredentials>> {

    const rb = new RequestBuilder(this.rootUrl, WindowsCredentialsService.CreateApiWindowscredentialsPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<WindowsCredentials>;
      })
    );
  }

  /**
   * Create.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createApiWindowscredentialsPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiWindowscredentialsPost(params: {
    body: WindowsCredentialsCreate
  }): Observable<WindowsCredentials> {

    return this.createApiWindowscredentialsPost$Response(params).pipe(
      map((r: StrictHttpResponse<WindowsCredentials>) => r.body as WindowsCredentials)
    );
  }

  /**
   * Path part for operation bulkcreateApiWindowscredentialsBulkcreatePost
   */
  static readonly BulkcreateApiWindowscredentialsBulkcreatePostPath = '/api/windowscredentials/bulkcreate';

  /**
   * Bulkcreate.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `bulkcreateApiWindowscredentialsBulkcreatePost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  bulkcreateApiWindowscredentialsBulkcreatePost$Response(params: {
    body: Array<WindowsCredentialsCreate>
  }): Observable<StrictHttpResponse<WindowsCredentials>> {

    const rb = new RequestBuilder(this.rootUrl, WindowsCredentialsService.BulkcreateApiWindowscredentialsBulkcreatePostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<WindowsCredentials>;
      })
    );
  }

  /**
   * Bulkcreate.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `bulkcreateApiWindowscredentialsBulkcreatePost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  bulkcreateApiWindowscredentialsBulkcreatePost(params: {
    body: Array<WindowsCredentialsCreate>
  }): Observable<WindowsCredentials> {

    return this.bulkcreateApiWindowscredentialsBulkcreatePost$Response(params).pipe(
      map((r: StrictHttpResponse<WindowsCredentials>) => r.body as WindowsCredentials)
    );
  }

  /**
   * Path part for operation getApiWindowscredentialsIdGet
   */
  static readonly GetApiWindowscredentialsIdGetPath = '/api/windowscredentials/{id}';

  /**
   * Get.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiWindowscredentialsIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiWindowscredentialsIdGet$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<WindowsCredentials>> {

    const rb = new RequestBuilder(this.rootUrl, WindowsCredentialsService.GetApiWindowscredentialsIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<WindowsCredentials>;
      })
    );
  }

  /**
   * Get.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiWindowscredentialsIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiWindowscredentialsIdGet(params: {
    id: string;
  }): Observable<WindowsCredentials> {

    return this.getApiWindowscredentialsIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<WindowsCredentials>) => r.body as WindowsCredentials)
    );
  }

  /**
   * Path part for operation deleteApiWindowscredentialsIdDelete
   */
  static readonly DeleteApiWindowscredentialsIdDeletePath = '/api/windowscredentials/{id}';

  /**
   * Delete.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteApiWindowscredentialsIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiWindowscredentialsIdDelete$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, WindowsCredentialsService.DeleteApiWindowscredentialsIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `deleteApiWindowscredentialsIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiWindowscredentialsIdDelete(params: {
    id: string;
  }): Observable<any> {

    return this.deleteApiWindowscredentialsIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
