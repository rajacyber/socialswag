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

import { Category } from '../models/category';
import { CategoryBulkDelete } from '../models/category-bulk-delete';
import { CategoryCreate } from '../models/category-create';
import { CategoryGetResp } from '../models/category-get-resp';
import { ContentDataGetResp } from '../models/content-data-get-resp';
import { CouponsGetResp } from '../models/coupons-get-resp';

@Injectable({
  providedIn: 'root',
})
export class CategoryService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllApiCategoryGet
   */
  static readonly GetAllApiCategoryGetPath = '/api/category';

  /**
   * Get All.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllApiCategoryGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiCategoryGet$Response(params?: {

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
  }): Observable<StrictHttpResponse<CategoryGetResp>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryService.GetAllApiCategoryGetPath, 'get');
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
        return r as StrictHttpResponse<CategoryGetResp>;
      })
    );
  }

  /**
   * Get All.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllApiCategoryGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiCategoryGet(params?: {

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
  }): Observable<CategoryGetResp> {

    return this.getAllApiCategoryGet$Response(params).pipe(
      map((r: StrictHttpResponse<CategoryGetResp>) => r.body as CategoryGetResp)
    );
  }

  /**
   * Path part for operation updateApiCategoryPut
   */
  static readonly UpdateApiCategoryPutPath = '/api/category';

  /**
   * Update.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateApiCategoryPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiCategoryPut$Response(params: {
    body: Category
  }): Observable<StrictHttpResponse<Category>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryService.UpdateApiCategoryPutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Category>;
      })
    );
  }

  /**
   * Update.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateApiCategoryPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiCategoryPut(params: {
    body: Category
  }): Observable<Category> {

    return this.updateApiCategoryPut$Response(params).pipe(
      map((r: StrictHttpResponse<Category>) => r.body as Category)
    );
  }

  /**
   * Path part for operation createApiCategoryPost
   */
  static readonly CreateApiCategoryPostPath = '/api/category';

  /**
   * Create.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createApiCategoryPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiCategoryPost$Response(params: {
    body: CategoryCreate
  }): Observable<StrictHttpResponse<Category>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryService.CreateApiCategoryPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Category>;
      })
    );
  }

  /**
   * Create.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createApiCategoryPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiCategoryPost(params: {
    body: CategoryCreate
  }): Observable<Category> {

    return this.createApiCategoryPost$Response(params).pipe(
      map((r: StrictHttpResponse<Category>) => r.body as Category)
    );
  }

  /**
   * Path part for operation getApiCategoryIdGet
   */
  static readonly GetApiCategoryIdGetPath = '/api/category/{id}';

  /**
   * Get.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiCategoryIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiCategoryIdGet$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<Category>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryService.GetApiCategoryIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Category>;
      })
    );
  }

  /**
   * Get.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiCategoryIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiCategoryIdGet(params: {
    id: string;
  }): Observable<Category> {

    return this.getApiCategoryIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<Category>) => r.body as Category)
    );
  }

  /**
   * Path part for operation deleteApiCategoryIdDelete
   */
  static readonly DeleteApiCategoryIdDeletePath = '/api/category/{id}';

  /**
   * Delete.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteApiCategoryIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiCategoryIdDelete$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryService.DeleteApiCategoryIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `deleteApiCategoryIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiCategoryIdDelete(params: {
    id: string;
  }): Observable<any> {

    return this.deleteApiCategoryIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation bulkdeleteApiCategoryIdBulkdeleteDelete
   */
  static readonly BulkdeleteApiCategoryIdBulkdeleteDeletePath = '/api/category/{id}/bulkdelete';

  /**
   * Bulkdelete.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `bulkdeleteApiCategoryIdBulkdeleteDelete()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  bulkdeleteApiCategoryIdBulkdeleteDelete$Response(params: {
    id: string;
    body: CategoryBulkDelete
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryService.BulkdeleteApiCategoryIdBulkdeleteDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `bulkdeleteApiCategoryIdBulkdeleteDelete$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  bulkdeleteApiCategoryIdBulkdeleteDelete(params: {
    id: string;
    body: CategoryBulkDelete
  }): Observable<any> {

    return this.bulkdeleteApiCategoryIdBulkdeleteDelete$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation getcontentdataApiCategoryIdContentdataGet
   */
  static readonly GetcontentdataApiCategoryIdContentdataGetPath = '/api/category/{id}/contentdata';

  /**
   * Get ContentData objects associated with Category.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getcontentdataApiCategoryIdContentdataGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getcontentdataApiCategoryIdContentdataGet$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<ContentDataGetResp>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryService.GetcontentdataApiCategoryIdContentdataGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ContentDataGetResp>;
      })
    );
  }

  /**
   * Get ContentData objects associated with Category.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getcontentdataApiCategoryIdContentdataGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getcontentdataApiCategoryIdContentdataGet(params: {
    id: string;
  }): Observable<ContentDataGetResp> {

    return this.getcontentdataApiCategoryIdContentdataGet$Response(params).pipe(
      map((r: StrictHttpResponse<ContentDataGetResp>) => r.body as ContentDataGetResp)
    );
  }

  /**
   * Path part for operation getcouponsApiCategoryIdCouponsGet
   */
  static readonly GetcouponsApiCategoryIdCouponsGetPath = '/api/category/{id}/coupons';

  /**
   * Get Coupons objects associated with Category.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getcouponsApiCategoryIdCouponsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getcouponsApiCategoryIdCouponsGet$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<CouponsGetResp>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryService.GetcouponsApiCategoryIdCouponsGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CouponsGetResp>;
      })
    );
  }

  /**
   * Get Coupons objects associated with Category.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getcouponsApiCategoryIdCouponsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getcouponsApiCategoryIdCouponsGet(params: {
    id: string;
  }): Observable<CouponsGetResp> {

    return this.getcouponsApiCategoryIdCouponsGet$Response(params).pipe(
      map((r: StrictHttpResponse<CouponsGetResp>) => r.body as CouponsGetResp)
    );
  }

}
