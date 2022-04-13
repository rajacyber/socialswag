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

import { InstalledProgram } from '../models/installed-program';
import { InstalledProgramCreate } from '../models/installed-program-create';
import { InstalledProgramGetResp } from '../models/installed-program-get-resp';

@Injectable({
  providedIn: 'root',
})
export class InstalledProgramService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllApiInstalledprogramGet
   */
  static readonly GetAllApiInstalledprogramGetPath = '/api/installedprogram/';

  /**
   * Get All.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllApiInstalledprogramGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiInstalledprogramGet$Response(params?: {

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
  }): Observable<StrictHttpResponse<InstalledProgramGetResp>> {

    const rb = new RequestBuilder(this.rootUrl, InstalledProgramService.GetAllApiInstalledprogramGetPath, 'get');
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
        return r as StrictHttpResponse<InstalledProgramGetResp>;
      })
    );
  }

  /**
   * Get All.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllApiInstalledprogramGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiInstalledprogramGet(params?: {

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
  }): Observable<InstalledProgramGetResp> {

    return this.getAllApiInstalledprogramGet$Response(params).pipe(
      map((r: StrictHttpResponse<InstalledProgramGetResp>) => r.body as InstalledProgramGetResp)
    );
  }

  /**
   * Path part for operation updateApiInstalledprogramPut
   */
  static readonly UpdateApiInstalledprogramPutPath = '/api/installedprogram/';

  /**
   * Update.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateApiInstalledprogramPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiInstalledprogramPut$Response(params: {
    body: InstalledProgram
  }): Observable<StrictHttpResponse<InstalledProgram>> {

    const rb = new RequestBuilder(this.rootUrl, InstalledProgramService.UpdateApiInstalledprogramPutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<InstalledProgram>;
      })
    );
  }

  /**
   * Update.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateApiInstalledprogramPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiInstalledprogramPut(params: {
    body: InstalledProgram
  }): Observable<InstalledProgram> {

    return this.updateApiInstalledprogramPut$Response(params).pipe(
      map((r: StrictHttpResponse<InstalledProgram>) => r.body as InstalledProgram)
    );
  }

  /**
   * Path part for operation createApiInstalledprogramPost
   */
  static readonly CreateApiInstalledprogramPostPath = '/api/installedprogram/';

  /**
   * Create.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createApiInstalledprogramPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiInstalledprogramPost$Response(params: {
    body: InstalledProgramCreate
  }): Observable<StrictHttpResponse<InstalledProgram>> {

    const rb = new RequestBuilder(this.rootUrl, InstalledProgramService.CreateApiInstalledprogramPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<InstalledProgram>;
      })
    );
  }

  /**
   * Create.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createApiInstalledprogramPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiInstalledprogramPost(params: {
    body: InstalledProgramCreate
  }): Observable<InstalledProgram> {

    return this.createApiInstalledprogramPost$Response(params).pipe(
      map((r: StrictHttpResponse<InstalledProgram>) => r.body as InstalledProgram)
    );
  }

  /**
   * Path part for operation getApiInstalledprogramIdGet
   */
  static readonly GetApiInstalledprogramIdGetPath = '/api/installedprogram/{id}';

  /**
   * Get.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiInstalledprogramIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiInstalledprogramIdGet$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<InstalledProgram>> {

    const rb = new RequestBuilder(this.rootUrl, InstalledProgramService.GetApiInstalledprogramIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<InstalledProgram>;
      })
    );
  }

  /**
   * Get.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiInstalledprogramIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiInstalledprogramIdGet(params: {
    id: string;
  }): Observable<InstalledProgram> {

    return this.getApiInstalledprogramIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<InstalledProgram>) => r.body as InstalledProgram)
    );
  }

  /**
   * Path part for operation deleteApiInstalledprogramIdDelete
   */
  static readonly DeleteApiInstalledprogramIdDeletePath = '/api/installedprogram/{id}';

  /**
   * Delete.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteApiInstalledprogramIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiInstalledprogramIdDelete$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, InstalledProgramService.DeleteApiInstalledprogramIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `deleteApiInstalledprogramIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiInstalledprogramIdDelete(params: {
    id: string;
  }): Observable<any> {

    return this.deleteApiInstalledprogramIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
