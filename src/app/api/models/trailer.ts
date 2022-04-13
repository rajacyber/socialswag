/* tslint:disable */
/* eslint-disable */
import { ContentDataTrailerRef } from './content-data-trailer-ref';
import { ContentStatus } from './content-status';
import { ContentThumbnailsCreate } from './content-thumbnails-create';
import { ContentType } from './content-type';
import { Language } from './language';
export interface Trailer {
  '_id'?: string;
  aspect_ratio?: string;
  'c'?: string;
  content_type?: ContentType;
  contentdata_ref?: ContentDataTrailerRef;
  description?: string;
  duration?: string;
  images?: ContentThumbnailsCreate;
  language?: Language;
  status?: ContentStatus;
  thumbnail?: string;
  'u'?: string;
}
