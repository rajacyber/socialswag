/* tslint:disable */
/* eslint-disable */
import { ContentDataContentEpisodesRef } from './content-data-content-episodes-ref';
import { LanguageDescriptionCreate } from './language-description-create';
export interface ContentEpisodes {
  '_id'?: string;
  'c'?: string;
  contentdata_ref?: ContentDataContentEpisodesRef;
  description?: Array<LanguageDescriptionCreate>;
  episodeNumber?: number;
  language?: Array<string>;
  short_description?: Array<LanguageDescriptionCreate>;
  'u'?: string;
}
