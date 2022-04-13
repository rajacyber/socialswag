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

import { ContentPricing } from '../models/content-pricing';
import { ContentPricingBulkDelete } from '../models/content-pricing-bulk-delete';
import { ContentPricingCreate } from '../models/content-pricing-create';
import { ContentPricingGetResp } from '../models/content-pricing-get-resp';

@Injectable({
  providedIn: 'root',
})
export class ContentPricingService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllApiContentpricingGet
   */
  static readonly GetAllApiContentpricingGetPath = '/api/contentpricing';

  /**
   * Get All.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllApiContentpricingGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiContentpricingGet$Response(params?: {

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
  }): Observable<StrictHttpResponse<ContentPricingGetResp>> {

    const rb = new RequestBuilder(this.rootUrl, ContentPricingService.GetAllApiContentpricingGetPath, 'get');
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
        return r as StrictHttpResponse<ContentPricingGetResp>;
      })
    );
  }

  /**
   * Get All.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllApiContentpricingGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiContentpricingGet(params?: {

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
  }): Observable<ContentPricingGetResp> {

    return this.getAllApiContentpricingGet$Response(params).pipe(
      map((r: StrictHttpResponse<ContentPricingGetResp>) => r.body as ContentPricingGetResp)
    );
  }

  /**
   * Path part for operation updateApiContentpricingPut
   */
  static readonly UpdateApiContentpricingPutPath = '/api/contentpricing';

  /**
   * Update.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateApiContentpricingPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiContentpricingPut$Response(params: {
    body: ContentPricing
  }): Observable<StrictHttpResponse<ContentPricing>> {

    const rb = new RequestBuilder(this.rootUrl, ContentPricingService.UpdateApiContentpricingPutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ContentPricing>;
      })
    );
  }

  /**
   * Update.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateApiContentpricingPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiContentpricingPut(params: {
    body: ContentPricing
  }): Observable<ContentPricing> {

    return this.updateApiContentpricingPut$Response(params).pipe(
      map((r: StrictHttpResponse<ContentPricing>) => r.body as ContentPricing)
    );
  }

  /**
   * Path part for operation createApiContentpricingPost
   */
  static readonly CreateApiContentpricingPostPath = '/api/contentpricing';

  /**
   * Create.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createApiContentpricingPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiContentpricingPost$Response(params: {
    body: ContentPricingCreate
  }): Observable<StrictHttpResponse<ContentPricing>> {

    const rb = new RequestBuilder(this.rootUrl, ContentPricingService.CreateApiContentpricingPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ContentPricing>;
      })
    );
  }

  /**
   * Create.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createApiContentpricingPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiContentpricingPost(params: {
    body: ContentPricingCreate
  }): Observable<ContentPricing> {

    return this.createApiContentpricingPost$Response(params).pipe(
      map((r: StrictHttpResponse<ContentPricing>) => r.body as ContentPricing)
    );
  }

  /**
   * Path part for operation getApiContentpricingIdGet
   */
  static readonly GetApiContentpricingIdGetPath = '/api/contentpricing/{id}';

  /**
   * Get.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiContentpricingIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiContentpricingIdGet$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<ContentPricing>> {

    const rb = new RequestBuilder(this.rootUrl, ContentPricingService.GetApiContentpricingIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ContentPricing>;
      })
    );
  }

  /**
   * Get.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiContentpricingIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiContentpricingIdGet(params: {
    id: string;
  }): Observable<ContentPricing> {

    return this.getApiContentpricingIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<ContentPricing>) => r.body as ContentPricing)
    );
  }

  /**
   * Path part for operation deleteApiContentpricingIdDelete
   */
  static readonly DeleteApiContentpricingIdDeletePath = '/api/contentpricing/{id}';

  /**
   * Delete.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteApiContentpricingIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiContentpricingIdDelete$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, ContentPricingService.DeleteApiContentpricingIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `deleteApiContentpricingIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiContentpricingIdDelete(params: {
    id: string;
  }): Observable<any> {

    return this.deleteApiContentpricingIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation bulkdeleteApiContentpricingIdBulkdeleteDelete
   */
  static readonly BulkdeleteApiContentpricingIdBulkdeleteDeletePath = '/api/contentpricing/{id}/bulkdelete';

  /**
   * Bulkdelete.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `bulkdeleteApiContentpricingIdBulkdeleteDelete()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  bulkdeleteApiContentpricingIdBulkdeleteDelete$Response(params: {
    id: string;
    body: ContentPricingBulkDelete
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, ContentPricingService.BulkdeleteApiContentpricingIdBulkdeleteDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
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
   * Bulkdelete.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `bulkdeleteApiContentpricingIdBulkdeleteDelete$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  bulkdeleteApiContentpricingIdBulkdeleteDelete(params: {
    id: string;
    body: ContentPricingBulkDelete
  }): Observable<any> {

    return this.bulkdeleteApiContentpricingIdBulkdeleteDelete$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
