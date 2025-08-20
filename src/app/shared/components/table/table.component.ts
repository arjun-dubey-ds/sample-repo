import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ColumnSettings, PageEvent, TableSettings, ExpandableTableData } from '../../models/table.interface';
import { ActionSettings } from '../../models/action.interface';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';
@Component({
  selector: 'portfolio-editor-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  providers: [],
})

export class TableComponent {
  @Input() settings!: TableSettings;
  @Input() records!: any[];
  @Input() loading: boolean = false;
  @Input() selectedRecords: any[] = [];
  @Input() emptyMessage = 'No records found';
  @Input() actions: ActionSettings[] | undefined;

  // Filtering
  @Input() enableSort: boolean = false;
  @Input() enableFilter: boolean = false;
  @Input() enableGlobalFilter: boolean = false;
  @Input() enableShowDeactivatedToggle: boolean = false;
  @Input() enableServerSideFilter: boolean = false;

  // Pagination
  @Input() totalRecords!: number;
  @Input() totalPages!: number;
  @Input() paginate: boolean = false;
  @Input() pageSize: number = 10;
  @Input() rowsPerPage: number[] = [10, 20, 50];

  // Events
  @Output() selectionChange = new EventEmitter<any[]>();
  @Output() pageChange = new EventEmitter<PageEvent>();
  @Output() showDeactivatedChange = new EventEmitter<boolean>();
  @Output() searchChange = new EventEmitter<string>();
  @Output() rowExpand = new EventEmitter<any>();
  @Output() rowCollapse = new EventEmitter<any>();

  columnMaps!: ColumnSettings[];
  globalFilters: string[] = [];
  showDeactivated: boolean = false;
  showActionButton: boolean = false;

  private searchSubject = new Subject<string>();

  constructor() {
    this.searchSubject.pipe(
      debounceTime(800),
      distinctUntilChanged()
    ).subscribe((term) => {
      this.searchChange.emit(term);
    });
  }

  ngOnInit() {
    this.columnMaps = this.settings.columns;
    this.globalFilters = this.columnMaps.map((c) => c.field);
    this.records = this.records?.map(record => ({
      ...record,
      collapsed: true, // Default to collapsed
      expanded: false // For accordion functionality
    }));
  }

  actionClick(record: object, func: any, params: any) {
    func(record, ...params);
  }

  onSelectionChange(event: any) {
    this.selectionChange.emit(this.selectedRecords);
  }

  get currentPageReportTemplate() {
    return `Showing {first} to {last} of ${this.totalRecords} entries`;
  }

  onPageChange(event: any) {
    this.pageChange.emit(event as PageEvent);
  }

  toggleCollapse(rowData: any) {
    rowData.collapsed = !rowData.collapsed;
  }

  // New method for accordion functionality
  toggleExpand(rowData: ExpandableTableData) {
    rowData.expanded = !rowData.expanded;
    if (rowData.expanded) {
      this.rowExpand.emit(rowData);
    } else {
      this.rowCollapse.emit(rowData);
    }
  }

  // Check if row has children
  hasChildren(rowData: any): boolean {
    return this.settings.expandable && rowData.children && rowData.children.length > 0;
  }

  onShowDeactivatedChange() {
    this.showDeactivatedChange.emit(this.showDeactivated);
  }

  onShowActionButton(record: any, showWhen: any) {
    return showWhen instanceof Function ? showWhen(record) : showWhen;
  }

  triggerSearch(term: string) {
    this.searchChange.emit(term);
  }
}
