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

import { SshCredentials } from '../models/ssh-credentials';
import { SshCredentialsCreate } from '../models/ssh-credentials-create';

@Injectable({
  providedIn: 'root',
})
export class SshCredentialsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllApiSshcredentialsGet
   */
  static readonly GetAllApiSshcredentialsGetPath = '/api/sshcredentials/';

  /**
   * Get All.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllApiSshcredentialsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiSshcredentialsGet$Response(params?: {
    'q'?: string;
    skip?: number;
    limit?: number;
    sort?: string;
  }): Observable<StrictHttpResponse<Array<SshCredentials>>> {

    const rb = new RequestBuilder(this.rootUrl, SshCredentialsService.GetAllApiSshcredentialsGetPath, 'get');
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
        return r as StrictHttpResponse<Array<SshCredentials>>;
      })
    );
  }

  /**
   * Get All.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllApiSshcredentialsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiSshcredentialsGet(params?: {
    'q'?: string;
    skip?: number;
    limit?: number;
    sort?: string;
  }): Observable<Array<SshCredentials>> {

    return this.getAllApiSshcredentialsGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<SshCredentials>>) => r.body as Array<SshCredentials>)
    );
  }

  /**
   * Path part for operation updateApiSshcredentialsPut
   */
  static readonly UpdateApiSshcredentialsPutPath = '/api/sshcredentials/';

  /**
   * Update.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateApiSshcredentialsPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiSshcredentialsPut$Response(params: {
    body: SshCredentials
  }): Observable<StrictHttpResponse<SshCredentials>> {

    const rb = new RequestBuilder(this.rootUrl, SshCredentialsService.UpdateApiSshcredentialsPutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SshCredentials>;
      })
    );
  }

  /**
   * Update.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateApiSshcredentialsPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiSshcredentialsPut(params: {
    body: SshCredentials
  }): Observable<SshCredentials> {

    return this.updateApiSshcredentialsPut$Response(params).pipe(
      map((r: StrictHttpResponse<SshCredentials>) => r.body as SshCredentials)
    );
  }

  /**
   * Path part for operation createApiSshcredentialsPost
   */
  static readonly CreateApiSshcredentialsPostPath = '/api/sshcredentials/';

  /**
   * Create.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createApiSshcredentialsPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiSshcredentialsPost$Response(params: {
    body: SshCredentialsCreate
  }): Observable<StrictHttpResponse<SshCredentials>> {

    const rb = new RequestBuilder(this.rootUrl, SshCredentialsService.CreateApiSshcredentialsPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SshCredentials>;
      })
    );
  }

  /**
   * Create.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createApiSshcredentialsPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiSshcredentialsPost(params: {
    body: SshCredentialsCreate
  }): Observable<SshCredentials> {

    return this.createApiSshcredentialsPost$Response(params).pipe(
      map((r: StrictHttpResponse<SshCredentials>) => r.body as SshCredentials)
    );
  }

  /**
   * Path part for operation bulkcreateApiSshcredentialsBulkcreatePost
   */
  static readonly BulkcreateApiSshcredentialsBulkcreatePostPath = '/api/sshcredentials/bulkcreate';

  /**
   * Bulkcreate.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `bulkcreateApiSshcredentialsBulkcreatePost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  bulkcreateApiSshcredentialsBulkcreatePost$Response(params: {
    body: Array<SshCredentialsCreate>
  }): Observable<StrictHttpResponse<SshCredentials>> {

    const rb = new RequestBuilder(this.rootUrl, SshCredentialsService.BulkcreateApiSshcredentialsBulkcreatePostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SshCredentials>;
      })
    );
  }

  /**
   * Bulkcreate.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `bulkcreateApiSshcredentialsBulkcreatePost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  bulkcreateApiSshcredentialsBulkcreatePost(params: {
    body: Array<SshCredentialsCreate>
  }): Observable<SshCredentials> {

    return this.bulkcreateApiSshcredentialsBulkcreatePost$Response(params).pipe(
      map((r: StrictHttpResponse<SshCredentials>) => r.body as SshCredentials)
    );
  }

  /**
   * Path part for operation getApiSshcredentialsIdGet
   */
  static readonly GetApiSshcredentialsIdGetPath = '/api/sshcredentials/{id}';

  /**
   * Get.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiSshcredentialsIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiSshcredentialsIdGet$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<SshCredentials>> {

    const rb = new RequestBuilder(this.rootUrl, SshCredentialsService.GetApiSshcredentialsIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SshCredentials>;
      })
    );
  }

  /**
   * Get.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiSshcredentialsIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiSshcredentialsIdGet(params: {
    id: string;
  }): Observable<SshCredentials> {

    return this.getApiSshcredentialsIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<SshCredentials>) => r.body as SshCredentials)
    );
  }

  /**
   * Path part for operation deleteApiSshcredentialsIdDelete
   */
  static readonly DeleteApiSshcredentialsIdDeletePath = '/api/sshcredentials/{id}';

  /**
   * Delete.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteApiSshcredentialsIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiSshcredentialsIdDelete$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, SshCredentialsService.DeleteApiSshcredentialsIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `deleteApiSshcredentialsIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiSshcredentialsIdDelete(params: {
    id: string;
  }): Observable<any> {

    return this.deleteApiSshcredentialsIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
