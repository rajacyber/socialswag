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

import { AdComputers } from '../models/ad-computers';
import { AdComputersCreate } from '../models/ad-computers-create';
import { AdComputersGetResp } from '../models/ad-computers-get-resp';
import { BodyUploadFileApiAdcomputersUploadFilePost } from '../models/body-upload-file-api-adcomputers-upload-file-post';

@Injectable({
  providedIn: 'root',
})
export class AdComputersService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllApiAdcomputersGet
   */
  static readonly GetAllApiAdcomputersGetPath = '/api/adcomputers/';

  /**
   * Get All.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllApiAdcomputersGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiAdcomputersGet$Response(params?: {

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
  }): Observable<StrictHttpResponse<AdComputersGetResp>> {

    const rb = new RequestBuilder(this.rootUrl, AdComputersService.GetAllApiAdcomputersGetPath, 'get');
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
        return r as StrictHttpResponse<AdComputersGetResp>;
      })
    );
  }

  /**
   * Get All.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllApiAdcomputersGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiAdcomputersGet(params?: {

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
  }): Observable<AdComputersGetResp> {

    return this.getAllApiAdcomputersGet$Response(params).pipe(
      map((r: StrictHttpResponse<AdComputersGetResp>) => r.body as AdComputersGetResp)
    );
  }

  /**
   * Path part for operation updateApiAdcomputersPut
   */
  static readonly UpdateApiAdcomputersPutPath = '/api/adcomputers/';

  /**
   * Update.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateApiAdcomputersPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiAdcomputersPut$Response(params: {
    body: AdComputers
  }): Observable<StrictHttpResponse<AdComputers>> {

    const rb = new RequestBuilder(this.rootUrl, AdComputersService.UpdateApiAdcomputersPutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AdComputers>;
      })
    );
  }

  /**
   * Update.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateApiAdcomputersPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiAdcomputersPut(params: {
    body: AdComputers
  }): Observable<AdComputers> {

    return this.updateApiAdcomputersPut$Response(params).pipe(
      map((r: StrictHttpResponse<AdComputers>) => r.body as AdComputers)
    );
  }

  /**
   * Path part for operation createApiAdcomputersPost
   */
  static readonly CreateApiAdcomputersPostPath = '/api/adcomputers/';

  /**
   * Create.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createApiAdcomputersPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiAdcomputersPost$Response(params: {
    body: AdComputersCreate
  }): Observable<StrictHttpResponse<AdComputers>> {

    const rb = new RequestBuilder(this.rootUrl, AdComputersService.CreateApiAdcomputersPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AdComputers>;
      })
    );
  }

  /**
   * Create.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createApiAdcomputersPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiAdcomputersPost(params: {
    body: AdComputersCreate
  }): Observable<AdComputers> {

    return this.createApiAdcomputersPost$Response(params).pipe(
      map((r: StrictHttpResponse<AdComputers>) => r.body as AdComputers)
    );
  }

  /**
   * Path part for operation uploadFileApiAdcomputersUploadFilePost
   */
  static readonly UploadFileApiAdcomputersUploadFilePostPath = '/api/adcomputers/upload_file';

  /**
   * Upload File.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uploadFileApiAdcomputersUploadFilePost()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadFileApiAdcomputersUploadFilePost$Response(params: {
    body: BodyUploadFileApiAdcomputersUploadFilePost
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, AdComputersService.UploadFileApiAdcomputersUploadFilePostPath, 'post');
    if (params) {
      rb.body(params.body, 'multipart/form-data');
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
   * Upload File.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `uploadFileApiAdcomputersUploadFilePost$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadFileApiAdcomputersUploadFilePost(params: {
    body: BodyUploadFileApiAdcomputersUploadFilePost
  }): Observable<any> {

    return this.uploadFileApiAdcomputersUploadFilePost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation getApiAdcomputersIdGet
   */
  static readonly GetApiAdcomputersIdGetPath = '/api/adcomputers/{id}';

  /**
   * Get.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiAdcomputersIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiAdcomputersIdGet$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<AdComputers>> {

    const rb = new RequestBuilder(this.rootUrl, AdComputersService.GetApiAdcomputersIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AdComputers>;
      })
    );
  }

  /**
   * Get.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiAdcomputersIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiAdcomputersIdGet(params: {
    id: string;
  }): Observable<AdComputers> {

    return this.getApiAdcomputersIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<AdComputers>) => r.body as AdComputers)
    );
  }

  /**
   * Path part for operation deleteApiAdcomputersIdDelete
   */
  static readonly DeleteApiAdcomputersIdDeletePath = '/api/adcomputers/{id}';

  /**
   * Delete.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteApiAdcomputersIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiAdcomputersIdDelete$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, AdComputersService.DeleteApiAdcomputersIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `deleteApiAdcomputersIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiAdcomputersIdDelete(params: {
    id: string;
  }): Observable<any> {

    return this.deleteApiAdcomputersIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
