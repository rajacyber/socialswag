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

import { GetMasterClass } from '../models/get-master-class';
import { GetMasterClassGetResp } from '../models/get-master-class-get-resp';
import { GetMasterClassesParams } from '../models/get-master-classes-params';

@Injectable({
  providedIn: 'root',
})
export class GetMasterClassService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getMasterClassgetMasterClassesApiGetmasterclassGetMasterClassesPost
   */
  static readonly GetMasterClassgetMasterClassesApiGetmasterclassGetMasterClassesPostPath = '/api/getmasterclass/getMasterClasses';

  /**
   * Getmasterclassgetmasterclasses.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getMasterClassgetMasterClassesApiGetmasterclassGetMasterClassesPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getMasterClassgetMasterClassesApiGetmasterclassGetMasterClassesPost$Response(params: {
    body: GetMasterClassesParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, GetMasterClassService.GetMasterClassgetMasterClassesApiGetmasterclassGetMasterClassesPostPath, 'post');
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
   * Getmasterclassgetmasterclasses.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getMasterClassgetMasterClassesApiGetmasterclassGetMasterClassesPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getMasterClassgetMasterClassesApiGetmasterclassGetMasterClassesPost(params: {
    body: GetMasterClassesParams
  }): Observable<any> {

    return this.getMasterClassgetMasterClassesApiGetmasterclassGetMasterClassesPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation getApiGetmasterclassIdGet
   */
  static readonly GetApiGetmasterclassIdGetPath = '/api/getmasterclass/{id}';

  /**
   * Get.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiGetmasterclassIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiGetmasterclassIdGet$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<GetMasterClass>> {

    const rb = new RequestBuilder(this.rootUrl, GetMasterClassService.GetApiGetmasterclassIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<GetMasterClass>;
      })
    );
  }

  /**
   * Get.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiGetmasterclassIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiGetmasterclassIdGet(params: {
    id: string;
  }): Observable<GetMasterClass> {

    return this.getApiGetmasterclassIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<GetMasterClass>) => r.body as GetMasterClass)
    );
  }

  /**
   * Path part for operation getAllApiGetmasterclassGet
   */
  static readonly GetAllApiGetmasterclassGetPath = '/api/getmasterclass';

  /**
   * Get All.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllApiGetmasterclassGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiGetmasterclassGet$Response(params?: {

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
  }): Observable<StrictHttpResponse<GetMasterClassGetResp>> {

    const rb = new RequestBuilder(this.rootUrl, GetMasterClassService.GetAllApiGetmasterclassGetPath, 'get');
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
        return r as StrictHttpResponse<GetMasterClassGetResp>;
      })
    );
  }

  /**
   * Get All.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllApiGetmasterclassGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiGetmasterclassGet(params?: {

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
  }): Observable<GetMasterClassGetResp> {

    return this.getAllApiGetmasterclassGet$Response(params).pipe(
      map((r: StrictHttpResponse<GetMasterClassGetResp>) => r.body as GetMasterClassGetResp)
    );
  }

}
