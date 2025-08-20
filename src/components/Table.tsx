import { DataTable, DataTableExpandedRows } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Paginator } from 'primereact/paginator';
import { useMemo, useState } from 'react';

export type ColumnSettings = {
  field: string;
  header: string;
  showFilter?: boolean;
  transform?: (value: any) => any;
  className?: string;
  collapsibleRow?: boolean;
  width?: string;
  minWidth?: string;
  maxWidth?: string;
};

export type ActionSettings = {
  title: string;
  showTitle?: boolean;
  icon?: string;
  func: (row: any, ...params: any[]) => void;
  class?: string[];
  params: any[];
  size?: 'small' | 'large';
  outlined?: boolean;
  severity?:
    | 'success'
    | 'info'
    | 'warning'
    | 'danger'
    | 'help'
    | 'primary'
    | 'secondary'
    | 'contrast';
  showWhen?: (data: any) => boolean;
};

export type TableSettings = {
  columns: ColumnSettings[];
  actions?: ActionSettings[];
  selectable?: boolean;
  expandable?: boolean;
  expandableHeader?: boolean;
  childTableSettings?: TableSettings;
};

export type PageEvent = { first: number; page: number; pageCount: number; rows: number };

export function Table(props: {
  settings: TableSettings;
  records: any[];
  loading?: boolean;
  selectedRecords?: any[];
  emptyMessage?: string;
  totalRecords: number;
  totalPages?: number;
  paginate?: boolean;
  pageSize?: number;
  rowsPerPage?: number[];
  enableSort?: boolean;
  enableFilter?: boolean;
  enableGlobalFilter?: boolean;
  enableShowDeactivatedToggle?: boolean;
  onPageChange?: (event: PageEvent) => void;
}) {
  const {
    settings,
    records,
    loading = false,
    emptyMessage = 'No records found',
    totalRecords,
    paginate = true,
    pageSize = 10,
    rowsPerPage = [10, 20, 50],
    enableSort = true,
    onPageChange
  } = props;

  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(pageSize);
  const [expandedRows, setExpandedRows] = useState<DataTableExpandedRows | any[]>([]);

  const columns = useMemo(() => settings.columns, [settings.columns]);

  const actionsHeader = settings.actions ? (
    <Column key="__actions_header" header="Action" body={(row) => (
      <div className="flex gap-2 justify-content-center">
        {settings.actions?.map((action) =>
          (!action.showWhen || action.showWhen(row)) ? (
            <Button
              key={action.title}
              icon={action.icon}
              label={action.showTitle ? action.title : undefined}
              size={action.size as any}
              severity={action.severity as any}
              outlined={action.outlined}
              onClick={() => action.func(row, ...(action.params || []))}
            />
          ) : null
        )}
      </div>
    )} style={{ width: 150 }} />
  ) : null;

  const onPaginate = (e: any) => {
    setFirst(e.first ?? 0);
    setRows(e.rows ?? pageSize);
    onPageChange?.({ first: e.first ?? 0, rows: e.rows ?? pageSize, page: e.page ?? 0, pageCount: e.pageCount ?? 0 });
  };

  const rowExpansionTemplate = (row: any) => {
    if (!settings.childTableSettings || !(row?.children?.length > 0)) return null;
    return (
      <div className="p-3">
        <Table
          settings={settings.childTableSettings}
          records={row.children}
          totalRecords={row.children.length}
          paginate={false}
          enableSort={false}
        />
      </div>
    );
  };

  return (
    <div>
      <div className="flex mt-3 justify-content-between px-0">
        <div className="flex gap-2">
          {settings.actions?.map((action) => (
            <Button key={action.title} label={action.title} icon={action.icon} severity={action.severity as any} onClick={() => action.func({}, ...(action.params || []))} />
          ))}
        </div>
      </div>

      <DataTable
        value={records}
        loading={loading}
        paginator={false}
        first={first}
        rows={rows}
        tableStyle={{ minWidth: '50rem' }}
        expandedRows={expandedRows}
        onRowToggle={(e) => setExpandedRows(e.data)}
        rowExpansionTemplate={rowExpansionTemplate}
      >
        {settings.expandable && <Column expander style={{ width: '4rem' }} />}
        {settings.selectable && <Column selectionMode="multiple" style={{ width: '4rem' }} />}
        {columns.map((col) => (
          <Column
            key={col.field}
            field={col.field}
            header={col.header}
            sortable={enableSort}
            style={{ width: col.width, minWidth: col.minWidth, maxWidth: col.maxWidth }}
          />
        ))}
        {actionsHeader}
      </DataTable>

      {paginate && (
        <Paginator
          first={first}
          rows={rows}
          totalRecords={totalRecords}
          rowsPerPageOptions={rowsPerPage}
          onPageChange={(e) => onPaginate(e as any)}
        />
      )}

      {!records?.length && !loading && (
        <div className="text-center p-3">{emptyMessage}</div>
      )}
    </div>
  );
}


