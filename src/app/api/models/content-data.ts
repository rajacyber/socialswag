/* tslint:disable */
/* eslint-disable */
import { CategoryContentDataRef } from './category-content-data-ref';
import { ContentPreviewCreate } from './content-preview-create';
import { ContentStatus } from './content-status';
import { ContentThumbnailsCreate } from './content-thumbnails-create';
import { ContentType } from './content-type';
import { DataType } from './data-type';
import { EpisodeDetailsCreate } from './episode-details-create';
import { Language } from './language';
import { LanguageDescriptionCreate } from './language-description-create';
export interface ContentData {
  '_id'?: string;
  'c'?: string;
  category_ref?: Array<CategoryContentDataRef>;
  content_certificate?: string;
  content_languages?: Array<Language>;
  content_preview?: ContentPreviewCreate;
  content_type?: ContentType;
  data_type?: DataType;
  description?: Array<LanguageDescriptionCreate>;
  duration?: number;
  episode_details?: EpisodeDetailsCreate;
  images?: ContentThumbnailsCreate;
  released_on?: string;
  short_description?: Array<LanguageDescriptionCreate>;
  status?: ContentStatus;
  subtitle_languages?: Array<Language>;
  tags?: Array<string>;
  title?: string;
  'u'?: string;
}
