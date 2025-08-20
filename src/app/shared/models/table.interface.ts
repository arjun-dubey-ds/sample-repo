import { ActionSettings } from './action.interface';

export interface ColumnSettings {
  field: string;
  header: string;
  showFilter?: boolean;
  transform?: (value: any) => any;
  className?: string;
  collapsibleRow?: boolean;
  width?: string;
  minWidth?: string;
  maxWidth?: string;
}

export interface TableSettings {
  columns: ColumnSettings[];
  actions?: ActionSettings[];
  selectable?: boolean;
  expandable?: boolean;
  expandableHeader?: boolean;
  childTableSettings?: TableSettings;
}

export interface PageEvent {
  first: number;
  page: number;
  pageCount: number;
  rows: number;
}

// New interface for expandable table data
export interface ExpandableTableData {
  [key: string]: any;
  expanded?: boolean;
  plans?: any[];
}
