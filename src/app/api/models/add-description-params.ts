/* tslint:disable */
/* eslint-disable */
import { LanguageDescriptionCreate } from './language-description-create';
export interface AddDescriptionParams {
  content_id: string;
  description: LanguageDescriptionCreate;
  episode_id: string;
  short_description?: LanguageDescriptionCreate;
}
