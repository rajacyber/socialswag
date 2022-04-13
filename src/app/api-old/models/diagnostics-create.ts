/* tslint:disable */
/* eslint-disable */
import { DiagnosticsControlsCreate } from './diagnostics-controls-create';
export interface DiagnosticsCreate {
  controls: Array<DiagnosticsControlsCreate>;
  group: string;
  totalRisk: number;
}
