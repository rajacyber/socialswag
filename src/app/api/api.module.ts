/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { ApiService } from './services/api.service';
import { ContentEpisodesService } from './services/content-episodes.service';
import { GetMasterClassService } from './services/get-master-class.service';
import { ContentPricingService } from './services/content-pricing.service';
import { CategoryService } from './services/category.service';
import { ContentDataService } from './services/content-data.service';
import { TrailerService } from './services/trailer.service';
import { UtilitiesService } from './services/utilities.service';
import { IdentityProvidersService } from './services/identity-providers.service';
import { UsersService } from './services/users.service';
import { RolesService } from './services/roles.service';
import { ApiClientsService } from './services/api-clients.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    ApiService,
    ContentEpisodesService,
    GetMasterClassService,
    ContentPricingService,
    CategoryService,
    ContentDataService,
    TrailerService,
    UtilitiesService,
    IdentityProvidersService,
    UsersService,
    RolesService,
    ApiClientsService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
