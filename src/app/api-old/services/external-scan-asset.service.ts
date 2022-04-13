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

import { BodyUploadFileApiExternalscanassetUploadFilePost } from '../models/body-upload-file-api-externalscanasset-upload-file-post';
import { ExternalScanAsset } from '../models/external-scan-asset';
import { ExternalScanAssetCreate } from '../models/external-scan-asset-create';
import { ExternalScanAssetGetResp } from '../models/external-scan-asset-get-resp';
import { ExternalScanAssetstartScanParams } from '../models/external-scan-assetstart-scan-params';

@Injectable({
  providedIn: 'root',
})
export class ExternalScanAssetService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllApiExternalscanassetGet
   */
  static readonly GetAllApiExternalscanassetGetPath = '/api/externalscanasset/';

  /**
   * Get All.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllApiExternalscanassetGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiExternalscanassetGet$Response(params?: {
    'q'?: string;
    skip?: number;
    limit?: number;
    sort?: string;
    fields?: string;
  }): Observable<StrictHttpResponse<ExternalScanAssetGetResp>> {

    const rb = new RequestBuilder(this.rootUrl, ExternalScanAssetService.GetAllApiExternalscanassetGetPath, 'get');
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
        return r as StrictHttpResponse<ExternalScanAssetGetResp>;
      })
    );
  }

  /**
   * Get All.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllApiExternalscanassetGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiExternalscanassetGet(params?: {
    'q'?: string;
    skip?: number;
    limit?: number;
    sort?: string;
    fields?: string;
  }): Observable<ExternalScanAssetGetResp> {

    return this.getAllApiExternalscanassetGet$Response(params).pipe(
      map((r: StrictHttpResponse<ExternalScanAssetGetResp>) => r.body as ExternalScanAssetGetResp)
    );
  }

  /**
   * Path part for operation updateApiExternalscanassetPut
   */
  static readonly UpdateApiExternalscanassetPutPath = '/api/externalscanasset/';

  /**
   * Update.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateApiExternalscanassetPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiExternalscanassetPut$Response(params: {
    body: ExternalScanAsset
  }): Observable<StrictHttpResponse<ExternalScanAsset>> {

    const rb = new RequestBuilder(this.rootUrl, ExternalScanAssetService.UpdateApiExternalscanassetPutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ExternalScanAsset>;
      })
    );
  }

  /**
   * Update.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateApiExternalscanassetPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiExternalscanassetPut(params: {
    body: ExternalScanAsset
  }): Observable<ExternalScanAsset> {

    return this.updateApiExternalscanassetPut$Response(params).pipe(
      map((r: StrictHttpResponse<ExternalScanAsset>) => r.body as ExternalScanAsset)
    );
  }

  /**
   * Path part for operation createApiExternalscanassetPost
   */
  static readonly CreateApiExternalscanassetPostPath = '/api/externalscanasset/';

  /**
   * Create.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createApiExternalscanassetPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiExternalscanassetPost$Response(params: {
    body: ExternalScanAssetCreate
  }): Observable<StrictHttpResponse<ExternalScanAsset>> {

    const rb = new RequestBuilder(this.rootUrl, ExternalScanAssetService.CreateApiExternalscanassetPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ExternalScanAsset>;
      })
    );
  }

  /**
   * Create.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createApiExternalscanassetPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiExternalscanassetPost(params: {
    body: ExternalScanAssetCreate
  }): Observable<ExternalScanAsset> {

    return this.createApiExternalscanassetPost$Response(params).pipe(
      map((r: StrictHttpResponse<ExternalScanAsset>) => r.body as ExternalScanAsset)
    );
  }

  /**
   * Path part for operation bulkcreateApiExternalscanassetBulkcreatePost
   */
  static readonly BulkcreateApiExternalscanassetBulkcreatePostPath = '/api/externalscanasset/bulkcreate';

  /**
   * Bulkcreate.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `bulkcreateApiExternalscanassetBulkcreatePost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  bulkcreateApiExternalscanassetBulkcreatePost$Response(params: {
    body: Array<ExternalScanAssetCreate>
  }): Observable<StrictHttpResponse<ExternalScanAsset>> {

    const rb = new RequestBuilder(this.rootUrl, ExternalScanAssetService.BulkcreateApiExternalscanassetBulkcreatePostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ExternalScanAsset>;
      })
    );
  }

  /**
   * Bulkcreate.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `bulkcreateApiExternalscanassetBulkcreatePost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  bulkcreateApiExternalscanassetBulkcreatePost(params: {
    body: Array<ExternalScanAssetCreate>
  }): Observable<ExternalScanAsset> {

    return this.bulkcreateApiExternalscanassetBulkcreatePost$Response(params).pipe(
      map((r: StrictHttpResponse<ExternalScanAsset>) => r.body as ExternalScanAsset)
    );
  }

  /**
   * Path part for operation uploadFileApiExternalscanassetUploadFilePost
   */
  static readonly UploadFileApiExternalscanassetUploadFilePostPath = '/api/externalscanasset/upload_file';

  /**
   * Upload File.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uploadFileApiExternalscanassetUploadFilePost()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadFileApiExternalscanassetUploadFilePost$Response(params: {
    body: BodyUploadFileApiExternalscanassetUploadFilePost
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, ExternalScanAssetService.UploadFileApiExternalscanassetUploadFilePostPath, 'post');
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
   * To access the full response (for headers, for example), `uploadFileApiExternalscanassetUploadFilePost$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadFileApiExternalscanassetUploadFilePost(params: {
    body: BodyUploadFileApiExternalscanassetUploadFilePost
  }): Observable<any> {

    return this.uploadFileApiExternalscanassetUploadFilePost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation getApiExternalscanassetIdGet
   */
  static readonly GetApiExternalscanassetIdGetPath = '/api/externalscanasset/{id}';

  /**
   * Get.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiExternalscanassetIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiExternalscanassetIdGet$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<ExternalScanAsset>> {

    const rb = new RequestBuilder(this.rootUrl, ExternalScanAssetService.GetApiExternalscanassetIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ExternalScanAsset>;
      })
    );
  }

  /**
   * Get.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiExternalscanassetIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiExternalscanassetIdGet(params: {
    id: string;
  }): Observable<ExternalScanAsset> {

    return this.getApiExternalscanassetIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<ExternalScanAsset>) => r.body as ExternalScanAsset)
    );
  }

  /**
   * Path part for operation deleteApiExternalscanassetIdDelete
   */
  static readonly DeleteApiExternalscanassetIdDeletePath = '/api/externalscanasset/{id}';

  /**
   * Delete.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteApiExternalscanassetIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiExternalscanassetIdDelete$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, ExternalScanAssetService.DeleteApiExternalscanassetIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `deleteApiExternalscanassetIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiExternalscanassetIdDelete(params: {
    id: string;
  }): Observable<any> {

    return this.deleteApiExternalscanassetIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation externalScanAssetstartScanApiExternalscanassetIdStartScanPost
   */
  static readonly ExternalScanAssetstartScanApiExternalscanassetIdStartScanPostPath = '/api/externalscanasset/{id}/start_scan';

  /**
   * Externalscanassetstart Scan.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `externalScanAssetstartScanApiExternalscanassetIdStartScanPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  externalScanAssetstartScanApiExternalscanassetIdStartScanPost$Response(params: {
    id: string;
    body: ExternalScanAssetstartScanParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, ExternalScanAssetService.ExternalScanAssetstartScanApiExternalscanassetIdStartScanPostPath, 'post');
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
   * Externalscanassetstart Scan.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `externalScanAssetstartScanApiExternalscanassetIdStartScanPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  externalScanAssetstartScanApiExternalscanassetIdStartScanPost(params: {
    id: string;
    body: ExternalScanAssetstartScanParams
  }): Observable<any> {

    return this.externalScanAssetstartScanApiExternalscanassetIdStartScanPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
