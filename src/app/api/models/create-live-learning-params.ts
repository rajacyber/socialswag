/* tslint:disable */
/* eslint-disable */
import { ContentType } from './content-type';
import { LanguageDescriptionCreate } from './language-description-create';
export interface CreateLiveLearningParams {
  category: Array<string>;
  content_type: ContentType;
  description?: LanguageDescriptionCreate;
  tags: Array<string>;
  title: string;
}
