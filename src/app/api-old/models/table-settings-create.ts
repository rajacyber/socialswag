/* tslint:disable */
/* eslint-disable */
import { TableInternalSettingsCreate } from './table-internal-settings-create';
export interface TableSettingsCreate {
  columnRepr?: string;
  refreshInterval?: number;
  settings?: TableInternalSettingsCreate;
  tableId: string;
  userId?: string;
}
