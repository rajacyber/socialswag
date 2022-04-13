/* tslint:disable */
/* eslint-disable */
import { LanguageDescriptionCreate } from './language-description-create';
export interface UploadEpisodeParams {
  content_id: string;
  description: Array<LanguageDescriptionCreate>;
  episode_number: number;
  short_description?: Array<LanguageDescriptionCreate>;
}
