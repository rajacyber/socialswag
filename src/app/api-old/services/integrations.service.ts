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

import { ActionMap } from '../models/action-map';
import { CompanyMapCreate } from '../models/company-map-create';

@Injectable({
  providedIn: 'root',
})
export class IntegrationsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getIntegrationsApiIntegrationsGet
   */
  static readonly GetIntegrationsApiIntegrationsGetPath = '/api/integrations/';

  /**
   * Get Integrations.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getIntegrationsApiIntegrationsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getIntegrationsApiIntegrationsGet$Response(params?: {
  }): Observable<StrictHttpResponse<Array<{  }>>> {

    const rb = new RequestBuilder(this.rootUrl, IntegrationsService.GetIntegrationsApiIntegrationsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<{  }>>;
      })
    );
  }

  /**
   * Get Integrations.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getIntegrationsApiIntegrationsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getIntegrationsApiIntegrationsGet(params?: {
  }): Observable<Array<{  }>> {

    return this.getIntegrationsApiIntegrationsGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<{  }>>) => r.body as Array<{  }>)
    );
  }

  /**
   * Path part for operation getIntegrationsParamsApiIntegrationsParamsGet
   */
  static readonly GetIntegrationsParamsApiIntegrationsParamsGetPath = '/api/integrations/params';

  /**
   * Get Integrations Params.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getIntegrationsParamsApiIntegrationsParamsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getIntegrationsParamsApiIntegrationsParamsGet$Response(params: {
    integrationName: string;
  }): Observable<StrictHttpResponse<{  }>> {

    const rb = new RequestBuilder(this.rootUrl, IntegrationsService.GetIntegrationsParamsApiIntegrationsParamsGetPath, 'get');
    if (params) {
      rb.query('integrationName', params.integrationName, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{  }>;
      })
    );
  }

  /**
   * Get Integrations Params.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getIntegrationsParamsApiIntegrationsParamsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getIntegrationsParamsApiIntegrationsParamsGet(params: {
    integrationName: string;
  }): Observable<{  }> {

    return this.getIntegrationsParamsApiIntegrationsParamsGet$Response(params).pipe(
      map((r: StrictHttpResponse<{  }>) => r.body as {  })
    );
  }

  /**
   * Path part for operation getIntegrationsParamsApiIntegrationsActionsGet
   */
  static readonly GetIntegrationsParamsApiIntegrationsActionsGetPath = '/api/integrations/actions';

  /**
   * Get Integrations Params.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getIntegrationsParamsApiIntegrationsActionsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getIntegrationsParamsApiIntegrationsActionsGet$Response(params: {
    integrationName: string;
  }): Observable<StrictHttpResponse<Array<string>>> {

    const rb = new RequestBuilder(this.rootUrl, IntegrationsService.GetIntegrationsParamsApiIntegrationsActionsGetPath, 'get');
    if (params) {
      rb.query('integrationName', params.integrationName, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<string>>;
      })
    );
  }

  /**
   * Get Integrations Params.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getIntegrationsParamsApiIntegrationsActionsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getIntegrationsParamsApiIntegrationsActionsGet(params: {
    integrationName: string;
  }): Observable<Array<string>> {

    return this.getIntegrationsParamsApiIntegrationsActionsGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<string>>) => r.body as Array<string>)
    );
  }

  /**
   * Path part for operation getIntegrationsParamsApiIntegrationsActionParamsGet
   */
  static readonly GetIntegrationsParamsApiIntegrationsActionParamsGetPath = '/api/integrations/action_params';

  /**
   * Get Integrations Params.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getIntegrationsParamsApiIntegrationsActionParamsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getIntegrationsParamsApiIntegrationsActionParamsGet$Response(params: {
    integrationName: string;
    actionName: string;
  }): Observable<StrictHttpResponse<{  }>> {

    const rb = new RequestBuilder(this.rootUrl, IntegrationsService.GetIntegrationsParamsApiIntegrationsActionParamsGetPath, 'get');
    if (params) {
      rb.query('integrationName', params.integrationName, {});
      rb.query('actionName', params.actionName, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{  }>;
      })
    );
  }

  /**
   * Get Integrations Params.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getIntegrationsParamsApiIntegrationsActionParamsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getIntegrationsParamsApiIntegrationsActionParamsGet(params: {
    integrationName: string;
    actionName: string;
  }): Observable<{  }> {

    return this.getIntegrationsParamsApiIntegrationsActionParamsGet$Response(params).pipe(
      map((r: StrictHttpResponse<{  }>) => r.body as {  })
    );
  }

  /**
   * Path part for operation getIntegrationsParamsApiIntegrationsStorecredentialsPost
   */
  static readonly GetIntegrationsParamsApiIntegrationsStorecredentialsPostPath = '/api/integrations/storecredentials';

  /**
   * Get Integrations Params.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getIntegrationsParamsApiIntegrationsStorecredentialsPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getIntegrationsParamsApiIntegrationsStorecredentialsPost$Response(params: {
    integrationName: string;
    body: {  }
  }): Observable<StrictHttpResponse<{  }>> {

    const rb = new RequestBuilder(this.rootUrl, IntegrationsService.GetIntegrationsParamsApiIntegrationsStorecredentialsPostPath, 'post');
    if (params) {
      rb.query('integrationName', params.integrationName, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{  }>;
      })
    );
  }

  /**
   * Get Integrations Params.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getIntegrationsParamsApiIntegrationsStorecredentialsPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getIntegrationsParamsApiIntegrationsStorecredentialsPost(params: {
    integrationName: string;
    body: {  }
  }): Observable<{  }> {

    return this.getIntegrationsParamsApiIntegrationsStorecredentialsPost$Response(params).pipe(
      map((r: StrictHttpResponse<{  }>) => r.body as {  })
    );
  }

  /**
   * Path part for operation getIntegrationsParamsApiIntegrationsGetcredentialsGet
   */
  static readonly GetIntegrationsParamsApiIntegrationsGetcredentialsGetPath = '/api/integrations/getcredentials';

  /**
   * Get Integrations Params.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getIntegrationsParamsApiIntegrationsGetcredentialsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getIntegrationsParamsApiIntegrationsGetcredentialsGet$Response(params: {
    integrationName: string;
  }): Observable<StrictHttpResponse<{  }>> {

    const rb = new RequestBuilder(this.rootUrl, IntegrationsService.GetIntegrationsParamsApiIntegrationsGetcredentialsGetPath, 'get');
    if (params) {
      rb.query('integrationName', params.integrationName, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{  }>;
      })
    );
  }

  /**
   * Get Integrations Params.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getIntegrationsParamsApiIntegrationsGetcredentialsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getIntegrationsParamsApiIntegrationsGetcredentialsGet(params: {
    integrationName: string;
  }): Observable<{  }> {

    return this.getIntegrationsParamsApiIntegrationsGetcredentialsGet$Response(params).pipe(
      map((r: StrictHttpResponse<{  }>) => r.body as {  })
    );
  }

  /**
   * Path part for operation getAllApiIntegrationsCompanyMappingGet
   */
  static readonly GetAllApiIntegrationsCompanyMappingGetPath = '/api/integrations/companyMapping';

  /**
   * Get All.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllApiIntegrationsCompanyMappingGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiIntegrationsCompanyMappingGet$Response(params?: {

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
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, IntegrationsService.GetAllApiIntegrationsCompanyMappingGetPath, 'get');
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
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Get All.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllApiIntegrationsCompanyMappingGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiIntegrationsCompanyMappingGet(params?: {

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
  }): Observable<any> {

    return this.getAllApiIntegrationsCompanyMappingGet$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation saveCompanyMappingApiIntegrationsCompanyMappingPost
   */
  static readonly SaveCompanyMappingApiIntegrationsCompanyMappingPostPath = '/api/integrations/companyMapping';

  /**
   * Save Company Mapping.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveCompanyMappingApiIntegrationsCompanyMappingPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveCompanyMappingApiIntegrationsCompanyMappingPost$Response(params: {
    body: CompanyMapCreate
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, IntegrationsService.SaveCompanyMappingApiIntegrationsCompanyMappingPostPath, 'post');
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
   * Save Company Mapping.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `saveCompanyMappingApiIntegrationsCompanyMappingPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveCompanyMappingApiIntegrationsCompanyMappingPost(params: {
    body: CompanyMapCreate
  }): Observable<any> {

    return this.saveCompanyMappingApiIntegrationsCompanyMappingPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation executeActionApiIntegrationsExecuteActionPost
   */
  static readonly ExecuteActionApiIntegrationsExecuteActionPostPath = '/api/integrations/executeAction';

  /**
   * Execute Action.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `executeActionApiIntegrationsExecuteActionPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  executeActionApiIntegrationsExecuteActionPost$Response(params: {
    body: ActionMap
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, IntegrationsService.ExecuteActionApiIntegrationsExecuteActionPostPath, 'post');
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
   * Execute Action.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `executeActionApiIntegrationsExecuteActionPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  executeActionApiIntegrationsExecuteActionPost(params: {
    body: ActionMap
  }): Observable<any> {

    return this.executeActionApiIntegrationsExecuteActionPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
