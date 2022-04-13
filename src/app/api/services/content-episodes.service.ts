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

import { AddDescriptionParams } from '../models/add-description-params';
import { GetEpisodeDataParams } from '../models/get-episode-data-params';
import { ListEpisodesParams } from '../models/list-episodes-params';
import { UploadEpisodeParams } from '../models/upload-episode-params';

@Injectable({
  providedIn: 'root',
})
export class ContentEpisodesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation contentEpisodesaddDescriptionApiContentepisodesAddDescriptionPost
   */
  static readonly ContentEpisodesaddDescriptionApiContentepisodesAddDescriptionPostPath = '/api/contentepisodes/addDescription';

  /**
   * Contentepisodesadddescription.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `contentEpisodesaddDescriptionApiContentepisodesAddDescriptionPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  contentEpisodesaddDescriptionApiContentepisodesAddDescriptionPost$Response(params: {
    body: AddDescriptionParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, ContentEpisodesService.ContentEpisodesaddDescriptionApiContentepisodesAddDescriptionPostPath, 'post');
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
   * Contentepisodesadddescription.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `contentEpisodesaddDescriptionApiContentepisodesAddDescriptionPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  contentEpisodesaddDescriptionApiContentepisodesAddDescriptionPost(params: {
    body: AddDescriptionParams
  }): Observable<any> {

    return this.contentEpisodesaddDescriptionApiContentepisodesAddDescriptionPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation contentEpisodesgetEpisodeDataApiContentepisodesGetEpisodeDataPost
   */
  static readonly ContentEpisodesgetEpisodeDataApiContentepisodesGetEpisodeDataPostPath = '/api/contentepisodes/getEpisodeData';

  /**
   * Contentepisodesgetepisodedata.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `contentEpisodesgetEpisodeDataApiContentepisodesGetEpisodeDataPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  contentEpisodesgetEpisodeDataApiContentepisodesGetEpisodeDataPost$Response(params: {
    body: GetEpisodeDataParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, ContentEpisodesService.ContentEpisodesgetEpisodeDataApiContentepisodesGetEpisodeDataPostPath, 'post');
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
   * Contentepisodesgetepisodedata.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `contentEpisodesgetEpisodeDataApiContentepisodesGetEpisodeDataPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  contentEpisodesgetEpisodeDataApiContentepisodesGetEpisodeDataPost(params: {
    body: GetEpisodeDataParams
  }): Observable<any> {

    return this.contentEpisodesgetEpisodeDataApiContentepisodesGetEpisodeDataPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation contentEpisodeslistEpisodesApiContentepisodesListEpisodesPost
   */
  static readonly ContentEpisodeslistEpisodesApiContentepisodesListEpisodesPostPath = '/api/contentepisodes/listEpisodes';

  /**
   * Contentepisodeslistepisodes.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `contentEpisodeslistEpisodesApiContentepisodesListEpisodesPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  contentEpisodeslistEpisodesApiContentepisodesListEpisodesPost$Response(params: {
    body: ListEpisodesParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, ContentEpisodesService.ContentEpisodeslistEpisodesApiContentepisodesListEpisodesPostPath, 'post');
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
   * Contentepisodeslistepisodes.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `contentEpisodeslistEpisodesApiContentepisodesListEpisodesPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  contentEpisodeslistEpisodesApiContentepisodesListEpisodesPost(params: {
    body: ListEpisodesParams
  }): Observable<any> {

    return this.contentEpisodeslistEpisodesApiContentepisodesListEpisodesPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation contentEpisodesuploadEpisodeApiContentepisodesUploadEpisodePost
   */
  static readonly ContentEpisodesuploadEpisodeApiContentepisodesUploadEpisodePostPath = '/api/contentepisodes/uploadEpisode';

  /**
   * Contentepisodesuploadepisode.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `contentEpisodesuploadEpisodeApiContentepisodesUploadEpisodePost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  contentEpisodesuploadEpisodeApiContentepisodesUploadEpisodePost$Response(params: {
    body: UploadEpisodeParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, ContentEpisodesService.ContentEpisodesuploadEpisodeApiContentepisodesUploadEpisodePostPath, 'post');
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
   * Contentepisodesuploadepisode.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `contentEpisodesuploadEpisodeApiContentepisodesUploadEpisodePost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  contentEpisodesuploadEpisodeApiContentepisodesUploadEpisodePost(params: {
    body: UploadEpisodeParams
  }): Observable<any> {

    return this.contentEpisodesuploadEpisodeApiContentepisodesUploadEpisodePost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
