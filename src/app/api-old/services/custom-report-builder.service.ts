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

import { BodyCustomReportBuilderuploadCustomImagesApiCustomreportbuilderIdUploadCustomImagesPost } from '../models/body-custom-report-builderupload-custom-images-api-customreportbuilder-id-upload-custom-images-post';
import { CustomReportBuilder } from '../models/custom-report-builder';
import { CustomReportBuilderCreate } from '../models/custom-report-builder-create';
import { CustomReportBuilderGetResp } from '../models/custom-report-builder-get-resp';
import { CustomReportBuildercloneReportParams } from '../models/custom-report-builderclone-report-params';
import { CustomReportBuilderdeleteCustomImageParams } from '../models/custom-report-builderdelete-custom-image-params';
import { CustomReportBuilderdownloadReportParams } from '../models/custom-report-builderdownload-report-params';
import { CustomReportBuildergetBlockDetailsParams } from '../models/custom-report-builderget-block-details-params';
import { CustomReportBuildergetFilterTypesParams } from '../models/custom-report-builderget-filter-types-params';
import { CustomReportBuildergetUploadedImagesParams } from '../models/custom-report-builderget-uploaded-images-params';
import { CustomReportBuildergetsupportedBlocksParams } from '../models/custom-report-buildergetsupported-blocks-params';
import { CustomReportBuilderloadReportParams } from '../models/custom-report-builderload-report-params';

@Injectable({
  providedIn: 'root',
})
export class CustomReportBuilderService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllApiCustomreportbuilderGet
   */
  static readonly GetAllApiCustomreportbuilderGetPath = '/api/customreportbuilder/';

  /**
   * Get All.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllApiCustomreportbuilderGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiCustomreportbuilderGet$Response(params?: {

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
  }): Observable<StrictHttpResponse<CustomReportBuilderGetResp>> {

    const rb = new RequestBuilder(this.rootUrl, CustomReportBuilderService.GetAllApiCustomreportbuilderGetPath, 'get');
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
        return r as StrictHttpResponse<CustomReportBuilderGetResp>;
      })
    );
  }

  /**
   * Get All.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllApiCustomreportbuilderGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiCustomreportbuilderGet(params?: {

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
  }): Observable<CustomReportBuilderGetResp> {

    return this.getAllApiCustomreportbuilderGet$Response(params).pipe(
      map((r: StrictHttpResponse<CustomReportBuilderGetResp>) => r.body as CustomReportBuilderGetResp)
    );
  }

  /**
   * Path part for operation updateApiCustomreportbuilderPut
   */
  static readonly UpdateApiCustomreportbuilderPutPath = '/api/customreportbuilder/';

  /**
   * Update.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateApiCustomreportbuilderPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiCustomreportbuilderPut$Response(params: {
    body: CustomReportBuilder
  }): Observable<StrictHttpResponse<CustomReportBuilder>> {

    const rb = new RequestBuilder(this.rootUrl, CustomReportBuilderService.UpdateApiCustomreportbuilderPutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CustomReportBuilder>;
      })
    );
  }

  /**
   * Update.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateApiCustomreportbuilderPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiCustomreportbuilderPut(params: {
    body: CustomReportBuilder
  }): Observable<CustomReportBuilder> {

    return this.updateApiCustomreportbuilderPut$Response(params).pipe(
      map((r: StrictHttpResponse<CustomReportBuilder>) => r.body as CustomReportBuilder)
    );
  }

  /**
   * Path part for operation createApiCustomreportbuilderPost
   */
  static readonly CreateApiCustomreportbuilderPostPath = '/api/customreportbuilder/';

  /**
   * Create.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createApiCustomreportbuilderPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiCustomreportbuilderPost$Response(params: {
    body: CustomReportBuilderCreate
  }): Observable<StrictHttpResponse<CustomReportBuilder>> {

    const rb = new RequestBuilder(this.rootUrl, CustomReportBuilderService.CreateApiCustomreportbuilderPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CustomReportBuilder>;
      })
    );
  }

  /**
   * Create.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createApiCustomreportbuilderPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiCustomreportbuilderPost(params: {
    body: CustomReportBuilderCreate
  }): Observable<CustomReportBuilder> {

    return this.createApiCustomreportbuilderPost$Response(params).pipe(
      map((r: StrictHttpResponse<CustomReportBuilder>) => r.body as CustomReportBuilder)
    );
  }

  /**
   * Path part for operation getApiCustomreportbuilderIdGet
   */
  static readonly GetApiCustomreportbuilderIdGetPath = '/api/customreportbuilder/{id}';

  /**
   * Get.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiCustomreportbuilderIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiCustomreportbuilderIdGet$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<CustomReportBuilder>> {

    const rb = new RequestBuilder(this.rootUrl, CustomReportBuilderService.GetApiCustomreportbuilderIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CustomReportBuilder>;
      })
    );
  }

  /**
   * Get.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiCustomreportbuilderIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiCustomreportbuilderIdGet(params: {
    id: string;
  }): Observable<CustomReportBuilder> {

    return this.getApiCustomreportbuilderIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<CustomReportBuilder>) => r.body as CustomReportBuilder)
    );
  }

  /**
   * Path part for operation deleteApiCustomreportbuilderIdDelete
   */
  static readonly DeleteApiCustomreportbuilderIdDeletePath = '/api/customreportbuilder/{id}';

  /**
   * Delete.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteApiCustomreportbuilderIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiCustomreportbuilderIdDelete$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CustomReportBuilderService.DeleteApiCustomreportbuilderIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `deleteApiCustomreportbuilderIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiCustomreportbuilderIdDelete(params: {
    id: string;
  }): Observable<any> {

    return this.deleteApiCustomreportbuilderIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation customReportBuildergetsupportedBlocksApiCustomreportbuilderGetsupportedBlocksPost
   */
  static readonly CustomReportBuildergetsupportedBlocksApiCustomreportbuilderGetsupportedBlocksPostPath = '/api/customreportbuilder/getsupportedBlocks';

  /**
   * Customreportbuildergetsupportedblocks.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `customReportBuildergetsupportedBlocksApiCustomreportbuilderGetsupportedBlocksPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  customReportBuildergetsupportedBlocksApiCustomreportbuilderGetsupportedBlocksPost$Response(params: {
    body: CustomReportBuildergetsupportedBlocksParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CustomReportBuilderService.CustomReportBuildergetsupportedBlocksApiCustomreportbuilderGetsupportedBlocksPostPath, 'post');
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
   * Customreportbuildergetsupportedblocks.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `customReportBuildergetsupportedBlocksApiCustomreportbuilderGetsupportedBlocksPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  customReportBuildergetsupportedBlocksApiCustomreportbuilderGetsupportedBlocksPost(params: {
    body: CustomReportBuildergetsupportedBlocksParams
  }): Observable<any> {

    return this.customReportBuildergetsupportedBlocksApiCustomreportbuilderGetsupportedBlocksPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation customReportBuildergetBlockDetailsApiCustomreportbuilderGetBlockDetailsPost
   */
  static readonly CustomReportBuildergetBlockDetailsApiCustomreportbuilderGetBlockDetailsPostPath = '/api/customreportbuilder/getBlockDetails';

  /**
   * Customreportbuildergetblockdetails.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `customReportBuildergetBlockDetailsApiCustomreportbuilderGetBlockDetailsPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  customReportBuildergetBlockDetailsApiCustomreportbuilderGetBlockDetailsPost$Response(params: {
    body: CustomReportBuildergetBlockDetailsParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CustomReportBuilderService.CustomReportBuildergetBlockDetailsApiCustomreportbuilderGetBlockDetailsPostPath, 'post');
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
   * Customreportbuildergetblockdetails.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `customReportBuildergetBlockDetailsApiCustomreportbuilderGetBlockDetailsPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  customReportBuildergetBlockDetailsApiCustomreportbuilderGetBlockDetailsPost(params: {
    body: CustomReportBuildergetBlockDetailsParams
  }): Observable<any> {

    return this.customReportBuildergetBlockDetailsApiCustomreportbuilderGetBlockDetailsPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation customReportBuildergetFilterTypesApiCustomreportbuilderGetFilterTypesPost
   */
  static readonly CustomReportBuildergetFilterTypesApiCustomreportbuilderGetFilterTypesPostPath = '/api/customreportbuilder/getFilterTypes';

  /**
   * Customreportbuildergetfiltertypes.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `customReportBuildergetFilterTypesApiCustomreportbuilderGetFilterTypesPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  customReportBuildergetFilterTypesApiCustomreportbuilderGetFilterTypesPost$Response(params: {
    body: CustomReportBuildergetFilterTypesParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CustomReportBuilderService.CustomReportBuildergetFilterTypesApiCustomreportbuilderGetFilterTypesPostPath, 'post');
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
   * Customreportbuildergetfiltertypes.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `customReportBuildergetFilterTypesApiCustomreportbuilderGetFilterTypesPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  customReportBuildergetFilterTypesApiCustomreportbuilderGetFilterTypesPost(params: {
    body: CustomReportBuildergetFilterTypesParams
  }): Observable<any> {

    return this.customReportBuildergetFilterTypesApiCustomreportbuilderGetFilterTypesPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation customReportBuilderuploadCustomImagesApiCustomreportbuilderIdUploadCustomImagesPost
   */
  static readonly CustomReportBuilderuploadCustomImagesApiCustomreportbuilderIdUploadCustomImagesPostPath = '/api/customreportbuilder/{id}/uploadCustomImages';

  /**
   * Customreportbuilderuploadcustomimages.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `customReportBuilderuploadCustomImagesApiCustomreportbuilderIdUploadCustomImagesPost()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  customReportBuilderuploadCustomImagesApiCustomreportbuilderIdUploadCustomImagesPost$Response(params: {
    id: string;
    body: BodyCustomReportBuilderuploadCustomImagesApiCustomreportbuilderIdUploadCustomImagesPost
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CustomReportBuilderService.CustomReportBuilderuploadCustomImagesApiCustomreportbuilderIdUploadCustomImagesPostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
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
   * Customreportbuilderuploadcustomimages.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `customReportBuilderuploadCustomImagesApiCustomreportbuilderIdUploadCustomImagesPost$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  customReportBuilderuploadCustomImagesApiCustomreportbuilderIdUploadCustomImagesPost(params: {
    id: string;
    body: BodyCustomReportBuilderuploadCustomImagesApiCustomreportbuilderIdUploadCustomImagesPost
  }): Observable<any> {

    return this.customReportBuilderuploadCustomImagesApiCustomreportbuilderIdUploadCustomImagesPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation customReportBuildergetUploadedImagesApiCustomreportbuilderGetUploadedImagesPost
   */
  static readonly CustomReportBuildergetUploadedImagesApiCustomreportbuilderGetUploadedImagesPostPath = '/api/customreportbuilder/getUploadedImages';

  /**
   * Customreportbuildergetuploadedimages.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `customReportBuildergetUploadedImagesApiCustomreportbuilderGetUploadedImagesPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  customReportBuildergetUploadedImagesApiCustomreportbuilderGetUploadedImagesPost$Response(params: {
    body: CustomReportBuildergetUploadedImagesParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CustomReportBuilderService.CustomReportBuildergetUploadedImagesApiCustomreportbuilderGetUploadedImagesPostPath, 'post');
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
   * Customreportbuildergetuploadedimages.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `customReportBuildergetUploadedImagesApiCustomreportbuilderGetUploadedImagesPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  customReportBuildergetUploadedImagesApiCustomreportbuilderGetUploadedImagesPost(params: {
    body: CustomReportBuildergetUploadedImagesParams
  }): Observable<any> {

    return this.customReportBuildergetUploadedImagesApiCustomreportbuilderGetUploadedImagesPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation customReportBuilderdeleteCustomImageApiCustomreportbuilderIdDeleteCustomImagePost
   */
  static readonly CustomReportBuilderdeleteCustomImageApiCustomreportbuilderIdDeleteCustomImagePostPath = '/api/customreportbuilder/{id}/deleteCustomImage';

  /**
   * Customreportbuilderdeletecustomimage.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `customReportBuilderdeleteCustomImageApiCustomreportbuilderIdDeleteCustomImagePost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  customReportBuilderdeleteCustomImageApiCustomreportbuilderIdDeleteCustomImagePost$Response(params: {
    id: string;
    body: CustomReportBuilderdeleteCustomImageParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CustomReportBuilderService.CustomReportBuilderdeleteCustomImageApiCustomreportbuilderIdDeleteCustomImagePostPath, 'post');
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
   * Customreportbuilderdeletecustomimage.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `customReportBuilderdeleteCustomImageApiCustomreportbuilderIdDeleteCustomImagePost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  customReportBuilderdeleteCustomImageApiCustomreportbuilderIdDeleteCustomImagePost(params: {
    id: string;
    body: CustomReportBuilderdeleteCustomImageParams
  }): Observable<any> {

    return this.customReportBuilderdeleteCustomImageApiCustomreportbuilderIdDeleteCustomImagePost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation customReportBuilderloadReportApiCustomreportbuilderIdLoadReportPost
   */
  static readonly CustomReportBuilderloadReportApiCustomreportbuilderIdLoadReportPostPath = '/api/customreportbuilder/{id}/loadReport';

  /**
   * Customreportbuilderloadreport.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `customReportBuilderloadReportApiCustomreportbuilderIdLoadReportPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  customReportBuilderloadReportApiCustomreportbuilderIdLoadReportPost$Response(params: {
    id: string;
    body: CustomReportBuilderloadReportParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CustomReportBuilderService.CustomReportBuilderloadReportApiCustomreportbuilderIdLoadReportPostPath, 'post');
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
   * Customreportbuilderloadreport.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `customReportBuilderloadReportApiCustomreportbuilderIdLoadReportPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  customReportBuilderloadReportApiCustomreportbuilderIdLoadReportPost(params: {
    id: string;
    body: CustomReportBuilderloadReportParams
  }): Observable<any> {

    return this.customReportBuilderloadReportApiCustomreportbuilderIdLoadReportPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation customReportBuilderdownloadReportApiCustomreportbuilderDownloadReportPost
   */
  static readonly CustomReportBuilderdownloadReportApiCustomreportbuilderDownloadReportPostPath = '/api/customreportbuilder/downloadReport';

  /**
   * Customreportbuilderdownloadreport.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `customReportBuilderdownloadReportApiCustomreportbuilderDownloadReportPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  customReportBuilderdownloadReportApiCustomreportbuilderDownloadReportPost$Response(params: {
    body: CustomReportBuilderdownloadReportParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CustomReportBuilderService.CustomReportBuilderdownloadReportApiCustomreportbuilderDownloadReportPostPath, 'post');
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
   * Customreportbuilderdownloadreport.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `customReportBuilderdownloadReportApiCustomreportbuilderDownloadReportPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  customReportBuilderdownloadReportApiCustomreportbuilderDownloadReportPost(params: {
    body: CustomReportBuilderdownloadReportParams
  }): Observable<any> {

    return this.customReportBuilderdownloadReportApiCustomreportbuilderDownloadReportPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation customReportBuildercloneReportApiCustomreportbuilderIdCloneReportPost
   */
  static readonly CustomReportBuildercloneReportApiCustomreportbuilderIdCloneReportPostPath = '/api/customreportbuilder/{id}/cloneReport';

  /**
   * Customreportbuilderclonereport.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `customReportBuildercloneReportApiCustomreportbuilderIdCloneReportPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  customReportBuildercloneReportApiCustomreportbuilderIdCloneReportPost$Response(params: {
    id: string;
    body: CustomReportBuildercloneReportParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CustomReportBuilderService.CustomReportBuildercloneReportApiCustomreportbuilderIdCloneReportPostPath, 'post');
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
   * Customreportbuilderclonereport.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `customReportBuildercloneReportApiCustomreportbuilderIdCloneReportPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  customReportBuildercloneReportApiCustomreportbuilderIdCloneReportPost(params: {
    id: string;
    body: CustomReportBuildercloneReportParams
  }): Observable<any> {

    return this.customReportBuildercloneReportApiCustomreportbuilderIdCloneReportPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
