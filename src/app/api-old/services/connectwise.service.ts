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

import { Connectwise } from '../models/connectwise';
import { ConnectwiseCreate } from '../models/connectwise-create';
import { ConnectwiseGetResp } from '../models/connectwise-get-resp';
import { ConnectwisecreateTicketParams } from '../models/connectwisecreate-ticket-params';
import { ConnectwisegetCompaniesParams } from '../models/connectwiseget-companies-params';
import { ConnectwisegetServiceItemParams } from '../models/connectwiseget-service-item-params';
import { ConnectwisegetServiceStatusParams } from '../models/connectwiseget-service-status-params';
import { ConnectwisegetServiceSubTypesParams } from '../models/connectwiseget-service-sub-types-params';
import { ConnectwisegetServiceTypesParams } from '../models/connectwiseget-service-types-params';
import { ConnectwisegetTicketMappingParams } from '../models/connectwiseget-ticket-mapping-params';
import { ConnectwisegetgetServiceBoardsParams } from '../models/connectwisegetget-service-boards-params';
import { ConnectwisevalidateCredentialsParams } from '../models/connectwisevalidate-credentials-params';

@Injectable({
  providedIn: 'root',
})
export class ConnectwiseService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllApiConnectwiseGet
   */
  static readonly GetAllApiConnectwiseGetPath = '/api/connectwise/';

  /**
   * Get All.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllApiConnectwiseGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiConnectwiseGet$Response(params?: {

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
  }): Observable<StrictHttpResponse<ConnectwiseGetResp>> {

    const rb = new RequestBuilder(this.rootUrl, ConnectwiseService.GetAllApiConnectwiseGetPath, 'get');
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
        return r as StrictHttpResponse<ConnectwiseGetResp>;
      })
    );
  }

  /**
   * Get All.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllApiConnectwiseGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiConnectwiseGet(params?: {

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
  }): Observable<ConnectwiseGetResp> {

    return this.getAllApiConnectwiseGet$Response(params).pipe(
      map((r: StrictHttpResponse<ConnectwiseGetResp>) => r.body as ConnectwiseGetResp)
    );
  }

  /**
   * Path part for operation updateApiConnectwisePut
   */
  static readonly UpdateApiConnectwisePutPath = '/api/connectwise/';

  /**
   * Update.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateApiConnectwisePut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiConnectwisePut$Response(params: {
    body: Connectwise
  }): Observable<StrictHttpResponse<Connectwise>> {

    const rb = new RequestBuilder(this.rootUrl, ConnectwiseService.UpdateApiConnectwisePutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Connectwise>;
      })
    );
  }

  /**
   * Update.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateApiConnectwisePut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiConnectwisePut(params: {
    body: Connectwise
  }): Observable<Connectwise> {

    return this.updateApiConnectwisePut$Response(params).pipe(
      map((r: StrictHttpResponse<Connectwise>) => r.body as Connectwise)
    );
  }

  /**
   * Path part for operation createApiConnectwisePost
   */
  static readonly CreateApiConnectwisePostPath = '/api/connectwise/';

  /**
   * Create.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createApiConnectwisePost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiConnectwisePost$Response(params: {
    body: ConnectwiseCreate
  }): Observable<StrictHttpResponse<Connectwise>> {

    const rb = new RequestBuilder(this.rootUrl, ConnectwiseService.CreateApiConnectwisePostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Connectwise>;
      })
    );
  }

  /**
   * Create.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createApiConnectwisePost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiConnectwisePost(params: {
    body: ConnectwiseCreate
  }): Observable<Connectwise> {

    return this.createApiConnectwisePost$Response(params).pipe(
      map((r: StrictHttpResponse<Connectwise>) => r.body as Connectwise)
    );
  }

  /**
   * Path part for operation getApiConnectwiseIdGet
   */
  static readonly GetApiConnectwiseIdGetPath = '/api/connectwise/{id}';

  /**
   * Get.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiConnectwiseIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiConnectwiseIdGet$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<Connectwise>> {

    const rb = new RequestBuilder(this.rootUrl, ConnectwiseService.GetApiConnectwiseIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Connectwise>;
      })
    );
  }

  /**
   * Get.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiConnectwiseIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiConnectwiseIdGet(params: {
    id: string;
  }): Observable<Connectwise> {

    return this.getApiConnectwiseIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<Connectwise>) => r.body as Connectwise)
    );
  }

  /**
   * Path part for operation deleteApiConnectwiseIdDelete
   */
  static readonly DeleteApiConnectwiseIdDeletePath = '/api/connectwise/{id}';

  /**
   * Delete.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteApiConnectwiseIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiConnectwiseIdDelete$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, ConnectwiseService.DeleteApiConnectwiseIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `deleteApiConnectwiseIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiConnectwiseIdDelete(params: {
    id: string;
  }): Observable<any> {

    return this.deleteApiConnectwiseIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation connectwisevalidateCredentialsApiConnectwiseIdValidateCredentialsPost
   */
  static readonly ConnectwisevalidateCredentialsApiConnectwiseIdValidateCredentialsPostPath = '/api/connectwise/{id}/validateCredentials';

  /**
   * Connectwisevalidatecredentials.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `connectwisevalidateCredentialsApiConnectwiseIdValidateCredentialsPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  connectwisevalidateCredentialsApiConnectwiseIdValidateCredentialsPost$Response(params: {
    id: string;
    body: ConnectwisevalidateCredentialsParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, ConnectwiseService.ConnectwisevalidateCredentialsApiConnectwiseIdValidateCredentialsPostPath, 'post');
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
   * Connectwisevalidatecredentials.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `connectwisevalidateCredentialsApiConnectwiseIdValidateCredentialsPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  connectwisevalidateCredentialsApiConnectwiseIdValidateCredentialsPost(params: {
    id: string;
    body: ConnectwisevalidateCredentialsParams
  }): Observable<any> {

    return this.connectwisevalidateCredentialsApiConnectwiseIdValidateCredentialsPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation connectwisegetCompaniesApiConnectwiseIdGetCompaniesPost
   */
  static readonly ConnectwisegetCompaniesApiConnectwiseIdGetCompaniesPostPath = '/api/connectwise/{id}/getCompanies';

  /**
   * Connectwisegetcompanies.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `connectwisegetCompaniesApiConnectwiseIdGetCompaniesPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  connectwisegetCompaniesApiConnectwiseIdGetCompaniesPost$Response(params: {
    id: string;
    body: ConnectwisegetCompaniesParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, ConnectwiseService.ConnectwisegetCompaniesApiConnectwiseIdGetCompaniesPostPath, 'post');
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
   * Connectwisegetcompanies.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `connectwisegetCompaniesApiConnectwiseIdGetCompaniesPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  connectwisegetCompaniesApiConnectwiseIdGetCompaniesPost(params: {
    id: string;
    body: ConnectwisegetCompaniesParams
  }): Observable<any> {

    return this.connectwisegetCompaniesApiConnectwiseIdGetCompaniesPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation connectwisegetgetServiceBoardsApiConnectwiseIdGetgetServiceBoardsPost
   */
  static readonly ConnectwisegetgetServiceBoardsApiConnectwiseIdGetgetServiceBoardsPostPath = '/api/connectwise/{id}/getgetServiceBoards';

  /**
   * Connectwisegetgetserviceboards.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `connectwisegetgetServiceBoardsApiConnectwiseIdGetgetServiceBoardsPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  connectwisegetgetServiceBoardsApiConnectwiseIdGetgetServiceBoardsPost$Response(params: {
    id: string;
    body: ConnectwisegetgetServiceBoardsParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, ConnectwiseService.ConnectwisegetgetServiceBoardsApiConnectwiseIdGetgetServiceBoardsPostPath, 'post');
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
   * Connectwisegetgetserviceboards.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `connectwisegetgetServiceBoardsApiConnectwiseIdGetgetServiceBoardsPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  connectwisegetgetServiceBoardsApiConnectwiseIdGetgetServiceBoardsPost(params: {
    id: string;
    body: ConnectwisegetgetServiceBoardsParams
  }): Observable<any> {

    return this.connectwisegetgetServiceBoardsApiConnectwiseIdGetgetServiceBoardsPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation connectwisegetServiceStatusApiConnectwiseIdGetServiceStatusPost
   */
  static readonly ConnectwisegetServiceStatusApiConnectwiseIdGetServiceStatusPostPath = '/api/connectwise/{id}/getServiceStatus';

  /**
   * Connectwisegetservicestatus.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `connectwisegetServiceStatusApiConnectwiseIdGetServiceStatusPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  connectwisegetServiceStatusApiConnectwiseIdGetServiceStatusPost$Response(params: {
    id: string;
    body: ConnectwisegetServiceStatusParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, ConnectwiseService.ConnectwisegetServiceStatusApiConnectwiseIdGetServiceStatusPostPath, 'post');
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
   * Connectwisegetservicestatus.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `connectwisegetServiceStatusApiConnectwiseIdGetServiceStatusPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  connectwisegetServiceStatusApiConnectwiseIdGetServiceStatusPost(params: {
    id: string;
    body: ConnectwisegetServiceStatusParams
  }): Observable<any> {

    return this.connectwisegetServiceStatusApiConnectwiseIdGetServiceStatusPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation connectwisegetServiceTypesApiConnectwiseIdGetServiceTypesPost
   */
  static readonly ConnectwisegetServiceTypesApiConnectwiseIdGetServiceTypesPostPath = '/api/connectwise/{id}/getServiceTypes';

  /**
   * Connectwisegetservicetypes.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `connectwisegetServiceTypesApiConnectwiseIdGetServiceTypesPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  connectwisegetServiceTypesApiConnectwiseIdGetServiceTypesPost$Response(params: {
    id: string;
    body: ConnectwisegetServiceTypesParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, ConnectwiseService.ConnectwisegetServiceTypesApiConnectwiseIdGetServiceTypesPostPath, 'post');
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
   * Connectwisegetservicetypes.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `connectwisegetServiceTypesApiConnectwiseIdGetServiceTypesPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  connectwisegetServiceTypesApiConnectwiseIdGetServiceTypesPost(params: {
    id: string;
    body: ConnectwisegetServiceTypesParams
  }): Observable<any> {

    return this.connectwisegetServiceTypesApiConnectwiseIdGetServiceTypesPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation connectwisegetServiceSubTypesApiConnectwiseIdGetServiceSubTypesPost
   */
  static readonly ConnectwisegetServiceSubTypesApiConnectwiseIdGetServiceSubTypesPostPath = '/api/connectwise/{id}/getServiceSubTypes';

  /**
   * Connectwisegetservicesubtypes.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `connectwisegetServiceSubTypesApiConnectwiseIdGetServiceSubTypesPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  connectwisegetServiceSubTypesApiConnectwiseIdGetServiceSubTypesPost$Response(params: {
    id: string;
    body: ConnectwisegetServiceSubTypesParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, ConnectwiseService.ConnectwisegetServiceSubTypesApiConnectwiseIdGetServiceSubTypesPostPath, 'post');
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
   * Connectwisegetservicesubtypes.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `connectwisegetServiceSubTypesApiConnectwiseIdGetServiceSubTypesPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  connectwisegetServiceSubTypesApiConnectwiseIdGetServiceSubTypesPost(params: {
    id: string;
    body: ConnectwisegetServiceSubTypesParams
  }): Observable<any> {

    return this.connectwisegetServiceSubTypesApiConnectwiseIdGetServiceSubTypesPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation connectwisegetServiceItemApiConnectwiseIdGetServiceItemPost
   */
  static readonly ConnectwisegetServiceItemApiConnectwiseIdGetServiceItemPostPath = '/api/connectwise/{id}/getServiceItem';

  /**
   * Connectwisegetserviceitem.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `connectwisegetServiceItemApiConnectwiseIdGetServiceItemPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  connectwisegetServiceItemApiConnectwiseIdGetServiceItemPost$Response(params: {
    id: string;
    body: ConnectwisegetServiceItemParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, ConnectwiseService.ConnectwisegetServiceItemApiConnectwiseIdGetServiceItemPostPath, 'post');
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
   * Connectwisegetserviceitem.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `connectwisegetServiceItemApiConnectwiseIdGetServiceItemPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  connectwisegetServiceItemApiConnectwiseIdGetServiceItemPost(params: {
    id: string;
    body: ConnectwisegetServiceItemParams
  }): Observable<any> {

    return this.connectwisegetServiceItemApiConnectwiseIdGetServiceItemPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation connectwisegetTicketMappingApiConnectwiseIdGetTicketMappingPost
   */
  static readonly ConnectwisegetTicketMappingApiConnectwiseIdGetTicketMappingPostPath = '/api/connectwise/{id}/getTicketMapping';

  /**
   * Connectwisegetticketmapping.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `connectwisegetTicketMappingApiConnectwiseIdGetTicketMappingPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  connectwisegetTicketMappingApiConnectwiseIdGetTicketMappingPost$Response(params: {
    id: string;
    body: ConnectwisegetTicketMappingParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, ConnectwiseService.ConnectwisegetTicketMappingApiConnectwiseIdGetTicketMappingPostPath, 'post');
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
   * Connectwisegetticketmapping.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `connectwisegetTicketMappingApiConnectwiseIdGetTicketMappingPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  connectwisegetTicketMappingApiConnectwiseIdGetTicketMappingPost(params: {
    id: string;
    body: ConnectwisegetTicketMappingParams
  }): Observable<any> {

    return this.connectwisegetTicketMappingApiConnectwiseIdGetTicketMappingPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation connectwisecreateTicketApiConnectwiseIdCreateTicketPost
   */
  static readonly ConnectwisecreateTicketApiConnectwiseIdCreateTicketPostPath = '/api/connectwise/{id}/createTicket';

  /**
   * Connectwisecreateticket.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `connectwisecreateTicketApiConnectwiseIdCreateTicketPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  connectwisecreateTicketApiConnectwiseIdCreateTicketPost$Response(params: {
    id: string;
    body: ConnectwisecreateTicketParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, ConnectwiseService.ConnectwisecreateTicketApiConnectwiseIdCreateTicketPostPath, 'post');
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
   * Connectwisecreateticket.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `connectwisecreateTicketApiConnectwiseIdCreateTicketPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  connectwisecreateTicketApiConnectwiseIdCreateTicketPost(params: {
    id: string;
    body: ConnectwisecreateTicketParams
  }): Observable<any> {

    return this.connectwisecreateTicketApiConnectwiseIdCreateTicketPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
