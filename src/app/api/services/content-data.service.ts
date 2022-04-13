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

import { ContentData } from '../models/content-data';
import { ContentDataGetResp } from '../models/content-data-get-resp';
import { ContentEpisodesGetResp } from '../models/content-episodes-get-resp';
import { ContentPricingGetResp } from '../models/content-pricing-get-resp';
import { TrailerGetResp } from '../models/trailer-get-resp';
import { AddContentDescriptionParams } from '../models/add-content-description-params';
import { CreateLiveLearningParams } from '../models/create-live-learning-params';
import { CreateMasterClassParams } from '../models/create-master-class-params';
import { UpdatePricingParams } from '../models/update-pricing-params';

@Injectable({
  providedIn: 'root',
})
export class ContentDataService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getApiContentdataIdGet
   */
  static readonly GetApiContentdataIdGetPath = '/api/contentdata/{id}';

  /**
   * Get.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiContentdataIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiContentdataIdGet$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<ContentData>> {

    const rb = new RequestBuilder(this.rootUrl, ContentDataService.GetApiContentdataIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ContentData>;
      })
    );
  }

  /**
   * Get.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiContentdataIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiContentdataIdGet(params: {
    id: string;
  }): Observable<ContentData> {

    return this.getApiContentdataIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<ContentData>) => r.body as ContentData)
    );
  }

  /**
   * Path part for operation getAllApiContentdataGet
   */
  static readonly GetAllApiContentdataGetPath = '/api/contentdata';

  /**
   * Get All.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllApiContentdataGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiContentdataGet$Response(params?: {

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
  }): Observable<StrictHttpResponse<ContentDataGetResp>> {

    const rb = new RequestBuilder(this.rootUrl, ContentDataService.GetAllApiContentdataGetPath, 'get');
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
        return r as StrictHttpResponse<ContentDataGetResp>;
      })
    );
  }

  /**
   * Get All.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllApiContentdataGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllApiContentdataGet(params?: {

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
  }): Observable<ContentDataGetResp> {

    return this.getAllApiContentdataGet$Response(params).pipe(
      map((r: StrictHttpResponse<ContentDataGetResp>) => r.body as ContentDataGetResp)
    );
  }

  /**
   * Path part for operation getcontentpricingApiContentdataIdContentpricingGet
   */
  static readonly GetcontentpricingApiContentdataIdContentpricingGetPath = '/api/contentdata/{id}/contentpricing';

  /**
   * Get ContentPricing objects associated with ContentData.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getcontentpricingApiContentdataIdContentpricingGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getcontentpricingApiContentdataIdContentpricingGet$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<ContentPricingGetResp>> {

    const rb = new RequestBuilder(this.rootUrl, ContentDataService.GetcontentpricingApiContentdataIdContentpricingGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
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
   * Get ContentPricing objects associated with ContentData.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getcontentpricingApiContentdataIdContentpricingGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getcontentpricingApiContentdataIdContentpricingGet(params: {
    id: string;
  }): Observable<ContentPricingGetResp> {

    return this.getcontentpricingApiContentdataIdContentpricingGet$Response(params).pipe(
      map((r: StrictHttpResponse<ContentPricingGetResp>) => r.body as ContentPricingGetResp)
    );
  }

  /**
   * Path part for operation gettrailerApiContentdataIdTrailerGet
   */
  static readonly GettrailerApiContentdataIdTrailerGetPath = '/api/contentdata/{id}/trailer';

  /**
   * Get Trailer objects associated with ContentData.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `gettrailerApiContentdataIdTrailerGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  gettrailerApiContentdataIdTrailerGet$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<TrailerGetResp>> {

    const rb = new RequestBuilder(this.rootUrl, ContentDataService.GettrailerApiContentdataIdTrailerGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
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
   * Get Trailer objects associated with ContentData.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `gettrailerApiContentdataIdTrailerGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  gettrailerApiContentdataIdTrailerGet(params: {
    id: string;
  }): Observable<TrailerGetResp> {

    return this.gettrailerApiContentdataIdTrailerGet$Response(params).pipe(
      map((r: StrictHttpResponse<TrailerGetResp>) => r.body as TrailerGetResp)
    );
  }

  /**
   * Path part for operation getcontentepisodesApiContentdataIdContentepisodesGet
   */
  static readonly GetcontentepisodesApiContentdataIdContentepisodesGetPath = '/api/contentdata/{id}/contentepisodes';

  /**
   * Get ContentEpisodes objects associated with ContentData.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getcontentepisodesApiContentdataIdContentepisodesGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getcontentepisodesApiContentdataIdContentepisodesGet$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<ContentEpisodesGetResp>> {

    const rb = new RequestBuilder(this.rootUrl, ContentDataService.GetcontentepisodesApiContentdataIdContentepisodesGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ContentEpisodesGetResp>;
      })
    );
  }

  /**
   * Get ContentEpisodes objects associated with ContentData.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getcontentepisodesApiContentdataIdContentepisodesGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getcontentepisodesApiContentdataIdContentepisodesGet(params: {
    id: string;
  }): Observable<ContentEpisodesGetResp> {

    return this.getcontentepisodesApiContentdataIdContentepisodesGet$Response(params).pipe(
      map((r: StrictHttpResponse<ContentEpisodesGetResp>) => r.body as ContentEpisodesGetResp)
    );
  }

  /**
   * Path part for operation contentDataupdatePricingApiContentdataUpdatePricingPost
   */
  static readonly ContentDataupdatePricingApiContentdataUpdatePricingPostPath = '/api/contentdata/updatePricing';

  /**
   * Contentdataupdatepricing.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `contentDataupdatePricingApiContentdataUpdatePricingPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  contentDataupdatePricingApiContentdataUpdatePricingPost$Response(params: {
    body: UpdatePricingParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, ContentDataService.ContentDataupdatePricingApiContentdataUpdatePricingPostPath, 'post');
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
   * Contentdataupdatepricing.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `contentDataupdatePricingApiContentdataUpdatePricingPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  contentDataupdatePricingApiContentdataUpdatePricingPost(params: {
    body: UpdatePricingParams
  }): Observable<any> {

    return this.contentDataupdatePricingApiContentdataUpdatePricingPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation contentDatacreateMasterClassApiContentdataCreateMasterClassPost
   */
  static readonly ContentDatacreateMasterClassApiContentdataCreateMasterClassPostPath = '/api/contentdata/createMasterClass';

  /**
   * Contentdatacreatemasterclass.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `contentDatacreateMasterClassApiContentdataCreateMasterClassPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  contentDatacreateMasterClassApiContentdataCreateMasterClassPost$Response(params: {
    body: CreateMasterClassParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, ContentDataService.ContentDatacreateMasterClassApiContentdataCreateMasterClassPostPath, 'post');
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
   * Contentdatacreatemasterclass.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `contentDatacreateMasterClassApiContentdataCreateMasterClassPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  contentDatacreateMasterClassApiContentdataCreateMasterClassPost(params: {
    body: CreateMasterClassParams
  }): Observable<any> {

    return this.contentDatacreateMasterClassApiContentdataCreateMasterClassPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation contentDataaddContentDescriptionApiContentdataAddContentDescriptionPost
   */
  static readonly ContentDataaddContentDescriptionApiContentdataAddContentDescriptionPostPath = '/api/contentdata/addContentDescription';

  /**
   * Contentdataaddcontentdescription.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `contentDataaddContentDescriptionApiContentdataAddContentDescriptionPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  contentDataaddContentDescriptionApiContentdataAddContentDescriptionPost$Response(params: {
    body: AddContentDescriptionParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, ContentDataService.ContentDataaddContentDescriptionApiContentdataAddContentDescriptionPostPath, 'post');
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
   * Contentdataaddcontentdescription.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `contentDataaddContentDescriptionApiContentdataAddContentDescriptionPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  contentDataaddContentDescriptionApiContentdataAddContentDescriptionPost(params: {
    body: AddContentDescriptionParams
  }): Observable<any> {

    return this.contentDataaddContentDescriptionApiContentdataAddContentDescriptionPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation contentDatacreateLiveLearningApiContentdataCreateLiveLearningPost
   */
  static readonly ContentDatacreateLiveLearningApiContentdataCreateLiveLearningPostPath = '/api/contentdata/createLiveLearning';

  /**
   * Contentdatacreatelivelearning.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `contentDatacreateLiveLearningApiContentdataCreateLiveLearningPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  contentDatacreateLiveLearningApiContentdataCreateLiveLearningPost$Response(params: {
    body: CreateLiveLearningParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, ContentDataService.ContentDatacreateLiveLearningApiContentdataCreateLiveLearningPostPath, 'post');
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
   * Contentdatacreatelivelearning.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `contentDatacreateLiveLearningApiContentdataCreateLiveLearningPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  contentDatacreateLiveLearningApiContentdataCreateLiveLearningPost(params: {
    body: CreateLiveLearningParams
  }): Observable<any> {

    return this.contentDatacreateLiveLearningApiContentdataCreateLiveLearningPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
