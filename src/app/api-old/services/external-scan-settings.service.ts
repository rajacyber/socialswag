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

import { BodyUploadFileApiExternalscansettingsUploadFilePost } from '../models/body-upload-file-api-externalscansettings-upload-file-post';
import { ExternalScanSettings } from '../models/external-scan-settings';
import { ExternalScanSettingsCreate } from '../models/external-scan-settings-create';
import { ExternalScanSettingsGetResp } from '../models/external-scan-settings-get-resp';
import { ExternalScanSettingsstartScanParams } from '../models/external-scan-settingsstart-scan-params';

@Injectable({
  providedIn: 'root',
})
export class ExternalScanSettingsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllApiExternalscansettingsGet
   */
  static readonly GetAllApiExternalscansettingsGetPath = '/api/externalscansettings/';

  /**
   * Get All.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllApiExternalscansettingsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiExternalscansettingsGet$Response(params?: {
    'q'?: string;
    skip?: number;
    limit?: number;
    sort?: string;
    fields?: string;
  }): Observable<StrictHttpResponse<ExternalScanSettingsGetResp>> {

    const rb = new RequestBuilder(this.rootUrl, ExternalScanSettingsService.GetAllApiExternalscansettingsGetPath, 'get');
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
        return r as StrictHttpResponse<ExternalScanSettingsGetResp>;
      })
    );
  }

  /**
   * Get All.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllApiExternalscansettingsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiExternalscansettingsGet(params?: {
    'q'?: string;
    skip?: number;
    limit?: number;
    sort?: string;
    fields?: string;
  }): Observable<ExternalScanSettingsGetResp> {

    return this.getAllApiExternalscansettingsGet$Response(params).pipe(
      map((r: StrictHttpResponse<ExternalScanSettingsGetResp>) => r.body as ExternalScanSettingsGetResp)
    );
  }

  /**
   * Path part for operation updateApiExternalscansettingsPut
   */
  static readonly UpdateApiExternalscansettingsPutPath = '/api/externalscansettings/';

  /**
   * Update.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateApiExternalscansettingsPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiExternalscansettingsPut$Response(params: {
    body: ExternalScanSettings
  }): Observable<StrictHttpResponse<ExternalScanSettings>> {

    const rb = new RequestBuilder(this.rootUrl, ExternalScanSettingsService.UpdateApiExternalscansettingsPutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ExternalScanSettings>;
      })
    );
  }

  /**
   * Update.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateApiExternalscansettingsPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiExternalscansettingsPut(params: {
    body: ExternalScanSettings
  }): Observable<ExternalScanSettings> {

    return this.updateApiExternalscansettingsPut$Response(params).pipe(
      map((r: StrictHttpResponse<ExternalScanSettings>) => r.body as ExternalScanSettings)
    );
  }

  /**
   * Path part for operation createApiExternalscansettingsPost
   */
  static readonly CreateApiExternalscansettingsPostPath = '/api/externalscansettings/';

  /**
   * Create.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createApiExternalscansettingsPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiExternalscansettingsPost$Response(params: {
    body: ExternalScanSettingsCreate
  }): Observable<StrictHttpResponse<ExternalScanSettings>> {

    const rb = new RequestBuilder(this.rootUrl, ExternalScanSettingsService.CreateApiExternalscansettingsPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ExternalScanSettings>;
      })
    );
  }

  /**
   * Create.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createApiExternalscansettingsPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiExternalscansettingsPost(params: {
    body: ExternalScanSettingsCreate
  }): Observable<ExternalScanSettings> {

    return this.createApiExternalscansettingsPost$Response(params).pipe(
      map((r: StrictHttpResponse<ExternalScanSettings>) => r.body as ExternalScanSettings)
    );
  }

  /**
   * Path part for operation bulkcreateApiExternalscansettingsBulkcreatePost
   */
  static readonly BulkcreateApiExternalscansettingsBulkcreatePostPath = '/api/externalscansettings/bulkcreate';

  /**
   * Bulkcreate.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `bulkcreateApiExternalscansettingsBulkcreatePost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  bulkcreateApiExternalscansettingsBulkcreatePost$Response(params: {
    body: Array<ExternalScanSettingsCreate>
  }): Observable<StrictHttpResponse<ExternalScanSettings>> {

    const rb = new RequestBuilder(this.rootUrl, ExternalScanSettingsService.BulkcreateApiExternalscansettingsBulkcreatePostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ExternalScanSettings>;
      })
    );
  }

  /**
   * Bulkcreate.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `bulkcreateApiExternalscansettingsBulkcreatePost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  bulkcreateApiExternalscansettingsBulkcreatePost(params: {
    body: Array<ExternalScanSettingsCreate>
  }): Observable<ExternalScanSettings> {

    return this.bulkcreateApiExternalscansettingsBulkcreatePost$Response(params).pipe(
      map((r: StrictHttpResponse<ExternalScanSettings>) => r.body as ExternalScanSettings)
    );
  }

  /**
   * Path part for operation uploadFileApiExternalscansettingsUploadFilePost
   */
  static readonly UploadFileApiExternalscansettingsUploadFilePostPath = '/api/externalscansettings/upload_file';

  /**
   * Upload File.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uploadFileApiExternalscansettingsUploadFilePost()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadFileApiExternalscansettingsUploadFilePost$Response(params: {
    body: BodyUploadFileApiExternalscansettingsUploadFilePost
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, ExternalScanSettingsService.UploadFileApiExternalscansettingsUploadFilePostPath, 'post');
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
   * To access the full response (for headers, for example), `uploadFileApiExternalscansettingsUploadFilePost$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadFileApiExternalscansettingsUploadFilePost(params: {
    body: BodyUploadFileApiExternalscansettingsUploadFilePost
  }): Observable<any> {

    return this.uploadFileApiExternalscansettingsUploadFilePost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation getApiExternalscansettingsIdGet
   */
  static readonly GetApiExternalscansettingsIdGetPath = '/api/externalscansettings/{id}';

  /**
   * Get.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiExternalscansettingsIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiExternalscansettingsIdGet$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<ExternalScanSettings>> {

    const rb = new RequestBuilder(this.rootUrl, ExternalScanSettingsService.GetApiExternalscansettingsIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ExternalScanSettings>;
      })
    );
  }

  /**
   * Get.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiExternalscansettingsIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiExternalscansettingsIdGet(params: {
    id: string;
  }): Observable<ExternalScanSettings> {

    return this.getApiExternalscansettingsIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<ExternalScanSettings>) => r.body as ExternalScanSettings)
    );
  }

  /**
   * Path part for operation deleteApiExternalscansettingsIdDelete
   */
  static readonly DeleteApiExternalscansettingsIdDeletePath = '/api/externalscansettings/{id}';

  /**
   * Delete.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteApiExternalscansettingsIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiExternalscansettingsIdDelete$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, ExternalScanSettingsService.DeleteApiExternalscansettingsIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `deleteApiExternalscansettingsIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiExternalscansettingsIdDelete(params: {
    id: string;
  }): Observable<any> {

    return this.deleteApiExternalscansettingsIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation externalScanSettingsstartScanApiExternalscansettingsIdStartScanPost
   */
  static readonly ExternalScanSettingsstartScanApiExternalscansettingsIdStartScanPostPath = '/api/externalscansettings/{id}/start_scan';

  /**
   * Externalscansettingsstart Scan.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `externalScanSettingsstartScanApiExternalscansettingsIdStartScanPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  externalScanSettingsstartScanApiExternalscansettingsIdStartScanPost$Response(params: {
    id: string;
    body: ExternalScanSettingsstartScanParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, ExternalScanSettingsService.ExternalScanSettingsstartScanApiExternalscansettingsIdStartScanPostPath, 'post');
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
   * Externalscansettingsstart Scan.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `externalScanSettingsstartScanApiExternalscansettingsIdStartScanPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  externalScanSettingsstartScanApiExternalscansettingsIdStartScanPost(params: {
    id: string;
    body: ExternalScanSettingsstartScanParams
  }): Observable<any> {

    return this.externalScanSettingsstartScanApiExternalscansettingsIdStartScanPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
