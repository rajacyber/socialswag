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

import { SupportedDataTypesParams } from '../models/supported-data-types-params';
import { SupportedLanguagesParams } from '../models/supported-languages-params';

@Injectable({
  providedIn: 'root',
})
export class UtilitiesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation utilitiessupportedLanguagesApiUtilitiesSupportedLanguagesPost
   */
  static readonly UtilitiessupportedLanguagesApiUtilitiesSupportedLanguagesPostPath = '/api/utilities/supportedLanguages';

  /**
   * Utilitiessupportedlanguages.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `utilitiessupportedLanguagesApiUtilitiesSupportedLanguagesPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  utilitiessupportedLanguagesApiUtilitiesSupportedLanguagesPost$Response(params: {
    body: SupportedLanguagesParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, UtilitiesService.UtilitiessupportedLanguagesApiUtilitiesSupportedLanguagesPostPath, 'post');
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
   * Utilitiessupportedlanguages.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `utilitiessupportedLanguagesApiUtilitiesSupportedLanguagesPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  utilitiessupportedLanguagesApiUtilitiesSupportedLanguagesPost(params: {
    body: SupportedLanguagesParams
  }): Observable<any> {

    return this.utilitiessupportedLanguagesApiUtilitiesSupportedLanguagesPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation utilitiessupportedDataTypesApiUtilitiesSupportedDataTypesPost
   */
  static readonly UtilitiessupportedDataTypesApiUtilitiesSupportedDataTypesPostPath = '/api/utilities/supportedDataTypes';

  /**
   * Utilitiessupporteddatatypes.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `utilitiessupportedDataTypesApiUtilitiesSupportedDataTypesPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  utilitiessupportedDataTypesApiUtilitiesSupportedDataTypesPost$Response(params: {
    body: SupportedDataTypesParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, UtilitiesService.UtilitiessupportedDataTypesApiUtilitiesSupportedDataTypesPostPath, 'post');
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
   * Utilitiessupporteddatatypes.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `utilitiessupportedDataTypesApiUtilitiesSupportedDataTypesPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  utilitiessupportedDataTypesApiUtilitiesSupportedDataTypesPost(params: {
    body: SupportedDataTypesParams
  }): Observable<any> {

    return this.utilitiessupportedDataTypesApiUtilitiesSupportedDataTypesPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
