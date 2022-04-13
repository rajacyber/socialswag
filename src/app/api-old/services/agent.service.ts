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

import { Agent } from '../models/agent';
import { AgentCreate } from '../models/agent-create';
import { AgentGetResp } from '../models/agent-get-resp';
import { AgentgetAgentLinkParams } from '../models/agentget-agent-link-params';
import { AgentgetAgentStatusParams } from '../models/agentget-agent-status-params';
import { AgentgetScheduledActionsParams } from '../models/agentget-scheduled-actions-params';
import { AgentgetSubscriptionDetailsParams } from '../models/agentget-subscription-details-params';
import { AgentgetscanTemplatesParams } from '../models/agentgetscan-templates-params';
import { AgentgetworkParams } from '../models/agentgetwork-params';
import { AgentscanParams } from '../models/agentscan-params';
import { AgentuninstallAgentParams } from '../models/agentuninstall-agent-params';
import { AgentupdateAgentVersionParams } from '../models/agentupdate-agent-version-params';
import { BodyUploadFileApiAgentUploadFilePost } from '../models/body-upload-file-api-agent-upload-file-post';

@Injectable({
  providedIn: 'root',
})
export class AgentService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllApiAgentGet
   */
  static readonly GetAllApiAgentGetPath = '/api/agent/';

  /**
   * Get All.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllApiAgentGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiAgentGet$Response(params?: {

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
  }): Observable<StrictHttpResponse<AgentGetResp>> {

    const rb = new RequestBuilder(this.rootUrl, AgentService.GetAllApiAgentGetPath, 'get');
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
        return r as StrictHttpResponse<AgentGetResp>;
      })
    );
  }

  /**
   * Get All.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllApiAgentGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiAgentGet(params?: {

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
  }): Observable<AgentGetResp> {

    return this.getAllApiAgentGet$Response(params).pipe(
      map((r: StrictHttpResponse<AgentGetResp>) => r.body as AgentGetResp)
    );
  }

  /**
   * Path part for operation updateApiAgentPut
   */
  static readonly UpdateApiAgentPutPath = '/api/agent/';

  /**
   * Update.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateApiAgentPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiAgentPut$Response(params: {
    body: Agent
  }): Observable<StrictHttpResponse<Agent>> {

    const rb = new RequestBuilder(this.rootUrl, AgentService.UpdateApiAgentPutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Agent>;
      })
    );
  }

  /**
   * Update.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateApiAgentPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateApiAgentPut(params: {
    body: Agent
  }): Observable<Agent> {

    return this.updateApiAgentPut$Response(params).pipe(
      map((r: StrictHttpResponse<Agent>) => r.body as Agent)
    );
  }

  /**
   * Path part for operation createApiAgentPost
   */
  static readonly CreateApiAgentPostPath = '/api/agent/';

  /**
   * Create.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createApiAgentPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiAgentPost$Response(params: {
    body: AgentCreate
  }): Observable<StrictHttpResponse<Agent>> {

    const rb = new RequestBuilder(this.rootUrl, AgentService.CreateApiAgentPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Agent>;
      })
    );
  }

  /**
   * Create.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createApiAgentPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createApiAgentPost(params: {
    body: AgentCreate
  }): Observable<Agent> {

    return this.createApiAgentPost$Response(params).pipe(
      map((r: StrictHttpResponse<Agent>) => r.body as Agent)
    );
  }

  /**
   * Path part for operation getApiAgentIdGet
   */
  static readonly GetApiAgentIdGetPath = '/api/agent/{id}';

  /**
   * Get.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiAgentIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiAgentIdGet$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<Agent>> {

    const rb = new RequestBuilder(this.rootUrl, AgentService.GetApiAgentIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Agent>;
      })
    );
  }

  /**
   * Get.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiAgentIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiAgentIdGet(params: {
    id: string;
  }): Observable<Agent> {

    return this.getApiAgentIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<Agent>) => r.body as Agent)
    );
  }

  /**
   * Path part for operation deleteApiAgentIdDelete
   */
  static readonly DeleteApiAgentIdDeletePath = '/api/agent/{id}';

  /**
   * Delete.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteApiAgentIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiAgentIdDelete$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, AgentService.DeleteApiAgentIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `deleteApiAgentIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiAgentIdDelete(params: {
    id: string;
  }): Observable<any> {

    return this.deleteApiAgentIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation agentscanApiAgentIdScanPost
   */
  static readonly AgentscanApiAgentIdScanPostPath = '/api/agent/{id}/scan';

  /**
   * Agentscan.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `agentscanApiAgentIdScanPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  agentscanApiAgentIdScanPost$Response(params: {
    id: string;
    body: AgentscanParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, AgentService.AgentscanApiAgentIdScanPostPath, 'post');
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
   * Agentscan.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `agentscanApiAgentIdScanPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  agentscanApiAgentIdScanPost(params: {
    id: string;
    body: AgentscanParams
  }): Observable<any> {

    return this.agentscanApiAgentIdScanPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation agentgetworkApiAgentIdGetworkPost
   */
  static readonly AgentgetworkApiAgentIdGetworkPostPath = '/api/agent/{id}/getwork';

  /**
   * Agentgetwork.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `agentgetworkApiAgentIdGetworkPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  agentgetworkApiAgentIdGetworkPost$Response(params: {
    id: string;
    body: AgentgetworkParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, AgentService.AgentgetworkApiAgentIdGetworkPostPath, 'post');
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
   * Agentgetwork.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `agentgetworkApiAgentIdGetworkPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  agentgetworkApiAgentIdGetworkPost(params: {
    id: string;
    body: AgentgetworkParams
  }): Observable<any> {

    return this.agentgetworkApiAgentIdGetworkPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation agentStatusApiAgentIdGetAgentStatusPost
   */
  static readonly AgentStatusApiAgentIdGetAgentStatusPostPath = '/api/agent/{id}/getAgentStatus';

  /**
   * Agentstatus.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `agentStatusApiAgentIdGetAgentStatusPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  agentStatusApiAgentIdGetAgentStatusPost$Response(params: {
    id: string;
    body: AgentgetAgentStatusParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, AgentService.AgentStatusApiAgentIdGetAgentStatusPostPath, 'post');
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
   * Agentstatus.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `agentStatusApiAgentIdGetAgentStatusPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  agentStatusApiAgentIdGetAgentStatusPost(params: {
    id: string;
    body: AgentgetAgentStatusParams
  }): Observable<any> {

    return this.agentStatusApiAgentIdGetAgentStatusPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation agentgetAgentLinkApiAgentIdGetAgentLinkPost
   */
  static readonly AgentgetAgentLinkApiAgentIdGetAgentLinkPostPath = '/api/agent/{id}/getAgentLink';

  /**
   * Agentgetagentlink.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `agentgetAgentLinkApiAgentIdGetAgentLinkPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  agentgetAgentLinkApiAgentIdGetAgentLinkPost$Response(params: {
    id: string;
    body: AgentgetAgentLinkParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, AgentService.AgentgetAgentLinkApiAgentIdGetAgentLinkPostPath, 'post');
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
   * Agentgetagentlink.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `agentgetAgentLinkApiAgentIdGetAgentLinkPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  agentgetAgentLinkApiAgentIdGetAgentLinkPost(params: {
    id: string;
    body: AgentgetAgentLinkParams
  }): Observable<any> {

    return this.agentgetAgentLinkApiAgentIdGetAgentLinkPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation agentgetscanTemplatesApiAgentIdGetscanTemplatesPost
   */
  static readonly AgentgetscanTemplatesApiAgentIdGetscanTemplatesPostPath = '/api/agent/{id}/getscanTemplates';

  /**
   * Agentgetscantemplates.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `agentgetscanTemplatesApiAgentIdGetscanTemplatesPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  agentgetscanTemplatesApiAgentIdGetscanTemplatesPost$Response(params: {
    id: string;
    body: AgentgetscanTemplatesParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, AgentService.AgentgetscanTemplatesApiAgentIdGetscanTemplatesPostPath, 'post');
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
   * Agentgetscantemplates.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `agentgetscanTemplatesApiAgentIdGetscanTemplatesPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  agentgetscanTemplatesApiAgentIdGetscanTemplatesPost(params: {
    id: string;
    body: AgentgetscanTemplatesParams
  }): Observable<any> {

    return this.agentgetscanTemplatesApiAgentIdGetscanTemplatesPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation agentupdateAgentVersionApiAgentIdUpdateAgentVersionPost
   */
  static readonly AgentupdateAgentVersionApiAgentIdUpdateAgentVersionPostPath = '/api/agent/{id}/updateAgentVersion';

  /**
   * Agentupdateagentversion.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `agentupdateAgentVersionApiAgentIdUpdateAgentVersionPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  agentupdateAgentVersionApiAgentIdUpdateAgentVersionPost$Response(params: {
    id: string;
    body: AgentupdateAgentVersionParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, AgentService.AgentupdateAgentVersionApiAgentIdUpdateAgentVersionPostPath, 'post');
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
   * Agentupdateagentversion.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `agentupdateAgentVersionApiAgentIdUpdateAgentVersionPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  agentupdateAgentVersionApiAgentIdUpdateAgentVersionPost(params: {
    id: string;
    body: AgentupdateAgentVersionParams
  }): Observable<any> {

    return this.agentupdateAgentVersionApiAgentIdUpdateAgentVersionPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation agentgetScheduledActionsApiAgentIdGetScheduledActionsPost
   */
  static readonly AgentgetScheduledActionsApiAgentIdGetScheduledActionsPostPath = '/api/agent/{id}/getScheduledActions';

  /**
   * Agentgetscheduledactions.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `agentgetScheduledActionsApiAgentIdGetScheduledActionsPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  agentgetScheduledActionsApiAgentIdGetScheduledActionsPost$Response(params: {
    id: string;
    body: AgentgetScheduledActionsParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, AgentService.AgentgetScheduledActionsApiAgentIdGetScheduledActionsPostPath, 'post');
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
   * Agentgetscheduledactions.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `agentgetScheduledActionsApiAgentIdGetScheduledActionsPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  agentgetScheduledActionsApiAgentIdGetScheduledActionsPost(params: {
    id: string;
    body: AgentgetScheduledActionsParams
  }): Observable<any> {

    return this.agentgetScheduledActionsApiAgentIdGetScheduledActionsPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation agentgetSubscriptionDetailsApiAgentIdGetSubscriptionDetailsPost
   */
  static readonly AgentgetSubscriptionDetailsApiAgentIdGetSubscriptionDetailsPostPath = '/api/agent/{id}/getSubscriptionDetails';

  /**
   * Agentgetsubscriptiondetails.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `agentgetSubscriptionDetailsApiAgentIdGetSubscriptionDetailsPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  agentgetSubscriptionDetailsApiAgentIdGetSubscriptionDetailsPost$Response(params: {
    id: string;
    body: AgentgetSubscriptionDetailsParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, AgentService.AgentgetSubscriptionDetailsApiAgentIdGetSubscriptionDetailsPostPath, 'post');
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
   * Agentgetsubscriptiondetails.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `agentgetSubscriptionDetailsApiAgentIdGetSubscriptionDetailsPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  agentgetSubscriptionDetailsApiAgentIdGetSubscriptionDetailsPost(params: {
    id: string;
    body: AgentgetSubscriptionDetailsParams
  }): Observable<any> {

    return this.agentgetSubscriptionDetailsApiAgentIdGetSubscriptionDetailsPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation agentuninstallAgentApiAgentIdUninstallAgentPost
   */
  static readonly AgentuninstallAgentApiAgentIdUninstallAgentPostPath = '/api/agent/{id}/uninstallAgent';

  /**
   * Agentuninstallagent.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `agentuninstallAgentApiAgentIdUninstallAgentPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  agentuninstallAgentApiAgentIdUninstallAgentPost$Response(params: {
    id: string;
    body: AgentuninstallAgentParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, AgentService.AgentuninstallAgentApiAgentIdUninstallAgentPostPath, 'post');
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
   * Agentuninstallagent.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `agentuninstallAgentApiAgentIdUninstallAgentPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  agentuninstallAgentApiAgentIdUninstallAgentPost(params: {
    id: string;
    body: AgentuninstallAgentParams
  }): Observable<any> {

    return this.agentuninstallAgentApiAgentIdUninstallAgentPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation uploadFileApiAgentUploadFilePost
   */
  static readonly UploadFileApiAgentUploadFilePostPath = '/api/agent/upload_file';

  /**
   * Upload File.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uploadFileApiAgentUploadFilePost()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadFileApiAgentUploadFilePost$Response(params: {
    body: BodyUploadFileApiAgentUploadFilePost
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, AgentService.UploadFileApiAgentUploadFilePostPath, 'post');
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
   * To access the full response (for headers, for example), `uploadFileApiAgentUploadFilePost$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadFileApiAgentUploadFilePost(params: {
    body: BodyUploadFileApiAgentUploadFilePost
  }): Observable<any> {

    return this.uploadFileApiAgentUploadFilePost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
