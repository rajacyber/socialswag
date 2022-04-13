/* tslint:disable */
/* eslint-disable */
import { ContentType } from './content-type';
import { LanguageDescriptionCreate } from './language-description-create';
export interface CreateMasterClassParams {
  category: Array<string>;
  content_type: ContentType;
  description?: Array<LanguageDescriptionCreate>;
  short_description?: Array<LanguageDescriptionCreate>;
  tags: Array<string>;
  title: string;
}
