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

import { SmbSharePaths } from '../models/smb-share-paths';
import { SmbSharePathsCreate } from '../models/smb-share-paths-create';
import { SmbSharePathsGetResp } from '../models/smb-share-paths-get-resp';

@Injectable({
  providedIn: 'root',
})
export class SmbSharePathsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllApiSmbsharepathsGet
   */
  static readonly GetAllApiSmbsharepathsGetPath = '/api/smbsharepaths/';

  /**
   * Get All.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllApiSmbsharepathsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiSmbsharepathsGet$Response(params?: {

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
  }): Observable<StrictHttpResponse<SmbSharePathsGetResp>> {

    const rb = new RequestBuilder(this.rootUrl, SmbSharePathsService.GetAllApiSmbsharepathsGetPath, 'get');
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
        return r as StrictHttpResponse<SmbSharePathsGetResp>;
      })
    );
  }

  /**
   * Get All.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllApiSmbsharepathsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiSmbsharepathsGet(params?: {

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
  }): Observable<SmbSharePathsGetResp> {

    return this.getAllApiSmbsharepathsGet$Response(params).pipe(
      map((r: StrictHttpResponse<SmbSharePathsGetResp>) => r.body as SmbSharePathsGetResp)
    );
  }

  /**
   * Path part for operation updateApiSmbsharepathsPut
   */
  static readonly UpdateApiSmbsharepathsPutPath = '/api/smbsharepaths/';

  /**
   * Update.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateApiSmbsharepathsPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiSmbsharepathsPut$Response(params: {
    body: SmbSharePaths
  }): Observable<StrictHttpResponse<SmbSharePaths>> {

    const rb = new RequestBuilder(this.rootUrl, SmbSharePathsService.UpdateApiSmbsharepathsPutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SmbSharePaths>;
      })
    );
  }

  /**
   * Update.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateApiSmbsharepathsPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiSmbsharepathsPut(params: {
    body: SmbSharePaths
  }): Observable<SmbSharePaths> {

    return this.updateApiSmbsharepathsPut$Response(params).pipe(
      map((r: StrictHttpResponse<SmbSharePaths>) => r.body as SmbSharePaths)
    );
  }

  /**
   * Path part for operation createApiSmbsharepathsPost
   */
  static readonly CreateApiSmbsharepathsPostPath = '/api/smbsharepaths/';

  /**
   * Create.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createApiSmbsharepathsPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiSmbsharepathsPost$Response(params: {
    body: SmbSharePathsCreate
  }): Observable<StrictHttpResponse<SmbSharePaths>> {

    const rb = new RequestBuilder(this.rootUrl, SmbSharePathsService.CreateApiSmbsharepathsPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SmbSharePaths>;
      })
    );
  }

  /**
   * Create.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createApiSmbsharepathsPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiSmbsharepathsPost(params: {
    body: SmbSharePathsCreate
  }): Observable<SmbSharePaths> {

    return this.createApiSmbsharepathsPost$Response(params).pipe(
      map((r: StrictHttpResponse<SmbSharePaths>) => r.body as SmbSharePaths)
    );
  }

  /**
   * Path part for operation getApiSmbsharepathsIdGet
   */
  static readonly GetApiSmbsharepathsIdGetPath = '/api/smbsharepaths/{id}';

  /**
   * Get.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiSmbsharepathsIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiSmbsharepathsIdGet$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<SmbSharePaths>> {

    const rb = new RequestBuilder(this.rootUrl, SmbSharePathsService.GetApiSmbsharepathsIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SmbSharePaths>;
      })
    );
  }

  /**
   * Get.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiSmbsharepathsIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiSmbsharepathsIdGet(params: {
    id: string;
  }): Observable<SmbSharePaths> {

    return this.getApiSmbsharepathsIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<SmbSharePaths>) => r.body as SmbSharePaths)
    );
  }

  /**
   * Path part for operation deleteApiSmbsharepathsIdDelete
   */
  static readonly DeleteApiSmbsharepathsIdDeletePath = '/api/smbsharepaths/{id}';

  /**
   * Delete.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteApiSmbsharepathsIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiSmbsharepathsIdDelete$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, SmbSharePathsService.DeleteApiSmbsharepathsIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `deleteApiSmbsharepathsIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiSmbsharepathsIdDelete(params: {
    id: string;
  }): Observable<any> {

    return this.deleteApiSmbsharepathsIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
