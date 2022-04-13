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

import { AdGroups } from '../models/ad-groups';
import { AdGroupsCreate } from '../models/ad-groups-create';
import { AdGroupsGetResp } from '../models/ad-groups-get-resp';
import { BodyUploadFileApiAdgroupsUploadFilePost } from '../models/body-upload-file-api-adgroups-upload-file-post';

@Injectable({
  providedIn: 'root',
})
export class AdGroupsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllApiAdgroupsGet
   */
  static readonly GetAllApiAdgroupsGetPath = '/api/adgroups/';

  /**
   * Get All.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllApiAdgroupsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiAdgroupsGet$Response(params?: {

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
  }): Observable<StrictHttpResponse<AdGroupsGetResp>> {

    const rb = new RequestBuilder(this.rootUrl, AdGroupsService.GetAllApiAdgroupsGetPath, 'get');
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
        return r as StrictHttpResponse<AdGroupsGetResp>;
      })
    );
  }

  /**
   * Get All.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllApiAdgroupsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiAdgroupsGet(params?: {

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
  }): Observable<AdGroupsGetResp> {

    return this.getAllApiAdgroupsGet$Response(params).pipe(
      map((r: StrictHttpResponse<AdGroupsGetResp>) => r.body as AdGroupsGetResp)
    );
  }

  /**
   * Path part for operation updateApiAdgroupsPut
   */
  static readonly UpdateApiAdgroupsPutPath = '/api/adgroups/';

  /**
   * Update.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateApiAdgroupsPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiAdgroupsPut$Response(params: {
    body: AdGroups
  }): Observable<StrictHttpResponse<AdGroups>> {

    const rb = new RequestBuilder(this.rootUrl, AdGroupsService.UpdateApiAdgroupsPutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AdGroups>;
      })
    );
  }

  /**
   * Update.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateApiAdgroupsPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiAdgroupsPut(params: {
    body: AdGroups
  }): Observable<AdGroups> {

    return this.updateApiAdgroupsPut$Response(params).pipe(
      map((r: StrictHttpResponse<AdGroups>) => r.body as AdGroups)
    );
  }

  /**
   * Path part for operation createApiAdgroupsPost
   */
  static readonly CreateApiAdgroupsPostPath = '/api/adgroups/';

  /**
   * Create.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createApiAdgroupsPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiAdgroupsPost$Response(params: {
    body: AdGroupsCreate
  }): Observable<StrictHttpResponse<AdGroups>> {

    const rb = new RequestBuilder(this.rootUrl, AdGroupsService.CreateApiAdgroupsPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AdGroups>;
      })
    );
  }

  /**
   * Create.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createApiAdgroupsPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiAdgroupsPost(params: {
    body: AdGroupsCreate
  }): Observable<AdGroups> {

    return this.createApiAdgroupsPost$Response(params).pipe(
      map((r: StrictHttpResponse<AdGroups>) => r.body as AdGroups)
    );
  }

  /**
   * Path part for operation uploadFileApiAdgroupsUploadFilePost
   */
  static readonly UploadFileApiAdgroupsUploadFilePostPath = '/api/adgroups/upload_file';

  /**
   * Upload File.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uploadFileApiAdgroupsUploadFilePost()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadFileApiAdgroupsUploadFilePost$Response(params: {
    body: BodyUploadFileApiAdgroupsUploadFilePost
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, AdGroupsService.UploadFileApiAdgroupsUploadFilePostPath, 'post');
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
   * To access the full response (for headers, for example), `uploadFileApiAdgroupsUploadFilePost$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadFileApiAdgroupsUploadFilePost(params: {
    body: BodyUploadFileApiAdgroupsUploadFilePost
  }): Observable<any> {

    return this.uploadFileApiAdgroupsUploadFilePost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation getApiAdgroupsIdGet
   */
  static readonly GetApiAdgroupsIdGetPath = '/api/adgroups/{id}';

  /**
   * Get.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiAdgroupsIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiAdgroupsIdGet$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<AdGroups>> {

    const rb = new RequestBuilder(this.rootUrl, AdGroupsService.GetApiAdgroupsIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AdGroups>;
      })
    );
  }

  /**
   * Get.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiAdgroupsIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiAdgroupsIdGet(params: {
    id: string;
  }): Observable<AdGroups> {

    return this.getApiAdgroupsIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<AdGroups>) => r.body as AdGroups)
    );
  }

  /**
   * Path part for operation deleteApiAdgroupsIdDelete
   */
  static readonly DeleteApiAdgroupsIdDeletePath = '/api/adgroups/{id}';

  /**
   * Delete.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteApiAdgroupsIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiAdgroupsIdDelete$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, AdGroupsService.DeleteApiAdgroupsIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `deleteApiAdgroupsIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiAdgroupsIdDelete(params: {
    id: string;
  }): Observable<any> {

    return this.deleteApiAdgroupsIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
