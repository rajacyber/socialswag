/* tslint:disable */
/* eslint-disable */
import { DiagnosticsControlsCreate } from './diagnostics-controls-create';
export interface Diagnostics {
  '_id'?: string;
  'c'?: string;
  controls?: Array<DiagnosticsControlsCreate>;
  group?: string;
  tid?: string;
  totalRisk?: number;
  'u'?: string;
}
