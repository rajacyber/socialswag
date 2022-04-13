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

import { Trailer } from '../models/trailer';
import { TrailerGetResp } from '../models/trailer-get-resp';
import { AddTrailerParams } from '../models/add-trailer-params';

@Injectable({
  providedIn: 'root',
})
export class TrailerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getApiTrailerIdGet
   */
  static readonly GetApiTrailerIdGetPath = '/api/trailer/{id}';

  /**
   * Get.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiTrailerIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiTrailerIdGet$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<Trailer>> {

    const rb = new RequestBuilder(this.rootUrl, TrailerService.GetApiTrailerIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Trailer>;
      })
    );
  }

  /**
   * Get.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiTrailerIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiTrailerIdGet(params: {
    id: string;
  }): Observable<Trailer> {

    return this.getApiTrailerIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<Trailer>) => r.body as Trailer)
    );
  }

  /**
   * Path part for operation getAllApiTrailerGet
   */
  static readonly GetAllApiTrailerGetPath = '/api/trailer';

  /**
   * Get All.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllApiTrailerGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiTrailerGet$Response(params?: {

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
  }): Observable<StrictHttpResponse<TrailerGetResp>> {

    const rb = new RequestBuilder(this.rootUrl, TrailerService.GetAllApiTrailerGetPath, 'get');
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
        return r as StrictHttpResponse<TrailerGetResp>;
      })
    );
  }

  /**
   * Get All.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllApiTrailerGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiTrailerGet(params?: {

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
  }): Observable<TrailerGetResp> {

    return this.getAllApiTrailerGet$Response(params).pipe(
      map((r: StrictHttpResponse<TrailerGetResp>) => r.body as TrailerGetResp)
    );
  }

  /**
   * Path part for operation traileraddTrailerApiTrailerAddTrailerPost
   */
  static readonly TraileraddTrailerApiTrailerAddTrailerPostPath = '/api/trailer/addTrailer';

  /**
   * Traileraddtrailer.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `traileraddTrailerApiTrailerAddTrailerPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  traileraddTrailerApiTrailerAddTrailerPost$Response(params: {
    body: AddTrailerParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, TrailerService.TraileraddTrailerApiTrailerAddTrailerPostPath, 'post');
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
   * Traileraddtrailer.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `traileraddTrailerApiTrailerAddTrailerPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  traileraddTrailerApiTrailerAddTrailerPost(params: {
    body: AddTrailerParams
  }): Observable<any> {

    return this.traileraddTrailerApiTrailerAddTrailerPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
