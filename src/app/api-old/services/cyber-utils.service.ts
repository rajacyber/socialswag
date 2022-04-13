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

import { CyberUtilsgetBuildInfoParams } from '../models/cyber-utilsget-build-info-params';
import { CyberUtilsgetFeedInfoParams } from '../models/cyber-utilsget-feed-info-params';
import { CyberUtilsgetReleaseNotesParams } from '../models/cyber-utilsget-release-notes-params';
import { CyberUtilsgetSchedulerTimeZoneParams } from '../models/cyber-utilsget-scheduler-time-zone-params';
import { CyberUtilsgetSessionTimeoutSettingsParams } from '../models/cyber-utilsget-session-timeout-settings-params';
import { CyberUtilsgetSupportedTimeZonesParams } from '../models/cyber-utilsget-supported-time-zones-params';
import { CyberUtilsupdateSchedulerTimeZoneParams } from '../models/cyber-utilsupdate-scheduler-time-zone-params';
import { CyberUtilsupdateSessionTimeoutSettingsParams } from '../models/cyber-utilsupdate-session-timeout-settings-params';

@Injectable({
  providedIn: 'root',
})
export class CyberUtilsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation cyberUtilsgetSupportedTimeZonesApiCyberutilsIdGetSupportedTimeZonesPost
   */
  static readonly CyberUtilsgetSupportedTimeZonesApiCyberutilsIdGetSupportedTimeZonesPostPath = '/api/cyberutils/{id}/getSupportedTimeZones';

  /**
   * Cyberutilsget Supportedtimezones.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cyberUtilsgetSupportedTimeZonesApiCyberutilsIdGetSupportedTimeZonesPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  cyberUtilsgetSupportedTimeZonesApiCyberutilsIdGetSupportedTimeZonesPost$Response(params: {
    id: string;
    body: CyberUtilsgetSupportedTimeZonesParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CyberUtilsService.CyberUtilsgetSupportedTimeZonesApiCyberutilsIdGetSupportedTimeZonesPostPath, 'post');
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
   * Cyberutilsget Supportedtimezones.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `cyberUtilsgetSupportedTimeZonesApiCyberutilsIdGetSupportedTimeZonesPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  cyberUtilsgetSupportedTimeZonesApiCyberutilsIdGetSupportedTimeZonesPost(params: {
    id: string;
    body: CyberUtilsgetSupportedTimeZonesParams
  }): Observable<any> {

    return this.cyberUtilsgetSupportedTimeZonesApiCyberutilsIdGetSupportedTimeZonesPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation cyberUtilsgetSchedulerTimeZoneApiCyberutilsIdGetSchedulerTimeZonePost
   */
  static readonly CyberUtilsgetSchedulerTimeZoneApiCyberutilsIdGetSchedulerTimeZonePostPath = '/api/cyberutils/{id}/getSchedulerTimeZone';

  /**
   * Cyberutilsgetschedulertimezone.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cyberUtilsgetSchedulerTimeZoneApiCyberutilsIdGetSchedulerTimeZonePost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  cyberUtilsgetSchedulerTimeZoneApiCyberutilsIdGetSchedulerTimeZonePost$Response(params: {
    id: string;
    body: CyberUtilsgetSchedulerTimeZoneParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CyberUtilsService.CyberUtilsgetSchedulerTimeZoneApiCyberutilsIdGetSchedulerTimeZonePostPath, 'post');
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
   * Cyberutilsgetschedulertimezone.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `cyberUtilsgetSchedulerTimeZoneApiCyberutilsIdGetSchedulerTimeZonePost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  cyberUtilsgetSchedulerTimeZoneApiCyberutilsIdGetSchedulerTimeZonePost(params: {
    id: string;
    body: CyberUtilsgetSchedulerTimeZoneParams
  }): Observable<any> {

    return this.cyberUtilsgetSchedulerTimeZoneApiCyberutilsIdGetSchedulerTimeZonePost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation cyberUtilsupdateSchedulerTimeZoneApiCyberutilsIdUpdateSchedulerTimeZonePost
   */
  static readonly CyberUtilsupdateSchedulerTimeZoneApiCyberutilsIdUpdateSchedulerTimeZonePostPath = '/api/cyberutils/{id}/updateSchedulerTimeZone';

  /**
   * Cyberutilsupdateschedulertimezone.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cyberUtilsupdateSchedulerTimeZoneApiCyberutilsIdUpdateSchedulerTimeZonePost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  cyberUtilsupdateSchedulerTimeZoneApiCyberutilsIdUpdateSchedulerTimeZonePost$Response(params: {
    id: string;
    body: CyberUtilsupdateSchedulerTimeZoneParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CyberUtilsService.CyberUtilsupdateSchedulerTimeZoneApiCyberutilsIdUpdateSchedulerTimeZonePostPath, 'post');
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
   * Cyberutilsupdateschedulertimezone.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `cyberUtilsupdateSchedulerTimeZoneApiCyberutilsIdUpdateSchedulerTimeZonePost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  cyberUtilsupdateSchedulerTimeZoneApiCyberutilsIdUpdateSchedulerTimeZonePost(params: {
    id: string;
    body: CyberUtilsupdateSchedulerTimeZoneParams
  }): Observable<any> {

    return this.cyberUtilsupdateSchedulerTimeZoneApiCyberutilsIdUpdateSchedulerTimeZonePost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation cyberUtilsgetReleaseNotesApiCyberutilsIdGetReleaseNotesPost
   */
  static readonly CyberUtilsgetReleaseNotesApiCyberutilsIdGetReleaseNotesPostPath = '/api/cyberutils/{id}/getReleaseNotes';

  /**
   * Cyberutilsgetreleasenotes.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cyberUtilsgetReleaseNotesApiCyberutilsIdGetReleaseNotesPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  cyberUtilsgetReleaseNotesApiCyberutilsIdGetReleaseNotesPost$Response(params: {
    id: string;
    body: CyberUtilsgetReleaseNotesParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CyberUtilsService.CyberUtilsgetReleaseNotesApiCyberutilsIdGetReleaseNotesPostPath, 'post');
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
   * Cyberutilsgetreleasenotes.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `cyberUtilsgetReleaseNotesApiCyberutilsIdGetReleaseNotesPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  cyberUtilsgetReleaseNotesApiCyberutilsIdGetReleaseNotesPost(params: {
    id: string;
    body: CyberUtilsgetReleaseNotesParams
  }): Observable<any> {

    return this.cyberUtilsgetReleaseNotesApiCyberutilsIdGetReleaseNotesPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation cyberUtilsgetSessionTimeoutSettingsApiCyberutilsIdGetSessionTimeoutSettingsPost
   */
  static readonly CyberUtilsgetSessionTimeoutSettingsApiCyberutilsIdGetSessionTimeoutSettingsPostPath = '/api/cyberutils/{id}/getSessionTimeoutSettings';

  /**
   * Cyberutilsgetsessiontimeoutsettings.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cyberUtilsgetSessionTimeoutSettingsApiCyberutilsIdGetSessionTimeoutSettingsPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  cyberUtilsgetSessionTimeoutSettingsApiCyberutilsIdGetSessionTimeoutSettingsPost$Response(params: {
    id: string;
    body: CyberUtilsgetSessionTimeoutSettingsParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CyberUtilsService.CyberUtilsgetSessionTimeoutSettingsApiCyberutilsIdGetSessionTimeoutSettingsPostPath, 'post');
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
   * Cyberutilsgetsessiontimeoutsettings.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `cyberUtilsgetSessionTimeoutSettingsApiCyberutilsIdGetSessionTimeoutSettingsPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  cyberUtilsgetSessionTimeoutSettingsApiCyberutilsIdGetSessionTimeoutSettingsPost(params: {
    id: string;
    body: CyberUtilsgetSessionTimeoutSettingsParams
  }): Observable<any> {

    return this.cyberUtilsgetSessionTimeoutSettingsApiCyberutilsIdGetSessionTimeoutSettingsPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation cyberUtilsupdateSessionTimeoutSettingsApiCyberutilsIdUpdateSessionTimeoutSettingsPost
   */
  static readonly CyberUtilsupdateSessionTimeoutSettingsApiCyberutilsIdUpdateSessionTimeoutSettingsPostPath = '/api/cyberutils/{id}/updateSessionTimeoutSettings';

  /**
   * Cyberutilsupdatesessiontimeoutsettings.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cyberUtilsupdateSessionTimeoutSettingsApiCyberutilsIdUpdateSessionTimeoutSettingsPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  cyberUtilsupdateSessionTimeoutSettingsApiCyberutilsIdUpdateSessionTimeoutSettingsPost$Response(params: {
    id: string;
    body: CyberUtilsupdateSessionTimeoutSettingsParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CyberUtilsService.CyberUtilsupdateSessionTimeoutSettingsApiCyberutilsIdUpdateSessionTimeoutSettingsPostPath, 'post');
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
   * Cyberutilsupdatesessiontimeoutsettings.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `cyberUtilsupdateSessionTimeoutSettingsApiCyberutilsIdUpdateSessionTimeoutSettingsPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  cyberUtilsupdateSessionTimeoutSettingsApiCyberutilsIdUpdateSessionTimeoutSettingsPost(params: {
    id: string;
    body: CyberUtilsupdateSessionTimeoutSettingsParams
  }): Observable<any> {

    return this.cyberUtilsupdateSessionTimeoutSettingsApiCyberutilsIdUpdateSessionTimeoutSettingsPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation cyberUtilsgetBuildInfoApiCyberutilsIdGetBuildInfoPost
   */
  static readonly CyberUtilsgetBuildInfoApiCyberutilsIdGetBuildInfoPostPath = '/api/cyberutils/{id}/getBuildInfo';

  /**
   * Cyberutilsgetbuildinfo.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cyberUtilsgetBuildInfoApiCyberutilsIdGetBuildInfoPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  cyberUtilsgetBuildInfoApiCyberutilsIdGetBuildInfoPost$Response(params: {
    id: string;
    body: CyberUtilsgetBuildInfoParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CyberUtilsService.CyberUtilsgetBuildInfoApiCyberutilsIdGetBuildInfoPostPath, 'post');
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
   * Cyberutilsgetbuildinfo.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `cyberUtilsgetBuildInfoApiCyberutilsIdGetBuildInfoPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  cyberUtilsgetBuildInfoApiCyberutilsIdGetBuildInfoPost(params: {
    id: string;
    body: CyberUtilsgetBuildInfoParams
  }): Observable<any> {

    return this.cyberUtilsgetBuildInfoApiCyberutilsIdGetBuildInfoPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation cyberUtilsgetFeedInfoApiCyberutilsIdGetFeedInfoPost
   */
  static readonly CyberUtilsgetFeedInfoApiCyberutilsIdGetFeedInfoPostPath = '/api/cyberutils/{id}/getFeedInfo';

  /**
   * Cyberutilsgetfeedinfo.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cyberUtilsgetFeedInfoApiCyberutilsIdGetFeedInfoPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  cyberUtilsgetFeedInfoApiCyberutilsIdGetFeedInfoPost$Response(params: {
    id: string;
    body: CyberUtilsgetFeedInfoParams
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CyberUtilsService.CyberUtilsgetFeedInfoApiCyberutilsIdGetFeedInfoPostPath, 'post');
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
   * Cyberutilsgetfeedinfo.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `cyberUtilsgetFeedInfoApiCyberutilsIdGetFeedInfoPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  cyberUtilsgetFeedInfoApiCyberutilsIdGetFeedInfoPost(params: {
    id: string;
    body: CyberUtilsgetFeedInfoParams
  }): Observable<any> {

    return this.cyberUtilsgetFeedInfoApiCyberutilsIdGetFeedInfoPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
