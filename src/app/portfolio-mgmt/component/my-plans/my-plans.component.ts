import { AuthService } from './../../../sso/auth.service';
import { Component, OnInit } from '@angular/core';
import { PortfolioEditorDashboardService } from '@app/portfolio-mgmt/service/portfolio-editor-dashboard-service';
import { ActionSettings, Mode } from '@app/shared/models/action.interface';
import {
  TableSettings,
  ExpandableTableData,
} from '@app/shared/models/table.interface';

@Component({
  selector: 'app-my-plans',
  templateUrl: './my-plans.component.html',
  styleUrl: './my-plans.component.scss',
})
export class MyPlansComponent implements OnInit {
  mainTableData: any = [];

  mainTableActions: ActionSettings[] = [
    {
      title: Mode.Edit,
      showTitle: false,
      icon: 'pi pi-file-edit',
      func: this.editAction.bind(this),
      params: [],
      size: 'small',
      outlined: false,
      severity: 'primary',
      showWhen: () => true,
    },
    {
      title: Mode.Clone,
      showTitle: false,
      icon: 'pi pi-clone',
      func: this.cloneAction.bind(this),
      params: [],
      size: 'small',
      outlined: false,
      severity: 'success',
      showWhen: () => true,
    },
    {
      title: Mode.Deactivate,
      showTitle: false,
      icon: 'pi pi-trash',
      func: this.deactivateAction.bind(this),
      params: [],
      size: 'small',
      outlined: false,
      severity: 'danger',
      showWhen: () => true,
    },
  ];

  mainTableSettings: TableSettings = {
    columns: [
      {
        field: 'digitalBenefitID',
        header: 'DBS ID',
        width: '120px',
        minWidth: '100px',
      },
      {
        field: 'customerName',
        header: 'Customer Name',
        width: '140px',
        minWidth: '120px',
      },
      {
        field: 'policyNumber',
        header: 'Policy Number',
        width: '100px',
        minWidth: '80px',
      },
      {
        field: 'state',
        header: 'State',
        width: '100px',
        minWidth: '80px',
      },
      {
        field: 'planCode',
        header: 'Plan Code',
        width: '120px',
        minWidth: '100px',
      },
      {
        field: 'cocSeries',
        header: 'COC Series',
        width: '140px',
        minWidth: '120px',
      },
      {
        field: 'segment',
        header: 'Segment',
        width: '120px',
        minWidth: '100px',
      },
      {
        field: 'product',
        header: 'Product',
        width: '120px',
        minWidth: '100px',
      },
      {
        field: 'license',
        header: 'License',
        width: '120px',
        minWidth: '100px',
      },
      {
        field: 'planType',
        header: 'Plan Type',
        width: '120px',
        minWidth: '100px',
      },
    ],
    actions: this.mainTableActions,
    selectable: false,
  };

  memberGroupTableData: ExpandableTableData[] = [];

  memberGroupTableChildActions: ActionSettings[] = [
    {
      title: Mode.Edit,
      showTitle: false,
      icon: 'pi pi-file-edit',
      func: this.editAction.bind(this),
      params: [],
      size: 'small',
      outlined: false,
      severity: 'primary',
      showWhen: () => true,
    },
    {
      title: Mode.Clone,
      showTitle: false,
      icon: 'pi pi-clone',
      func: this.cloneAction.bind(this),
      params: [],
      size: 'small',
      outlined: false,
      severity: 'success',
      showWhen: () => true,
    },
    {
      title: Mode.Add,
      showTitle: false,
      icon: 'pi pi-plus-circle',
      func: this.cloneAction.bind(this),
      params: [],
      size: 'small',
      outlined: false,
      severity: 'success',
      showWhen: () => true,
    },
    {
      title: Mode.Deactivate,
      showTitle: false,
      icon: 'pi pi-trash',
      func: this.deactivateAction.bind(this),
      params: [],
      size: 'small',
      outlined: false,
      severity: 'danger',
      showWhen: () => true,
    },
  ];

  memberGroupTableChildSettings: TableSettings = {
    columns: [
      {
        field: 'digitalBenefitID',
        header: 'DBS ID',
        width: '120px',
        minWidth: '100px',
      },
      {
        field: 'state',
        header: 'State',
        width: '100px',
        minWidth: '80px',
      },
      {
        field: 'planCode',
        header: 'Plan Code',
        width: '120px',
        minWidth: '100px',
      },
      {
        field: 'cocSeries',
        header: 'COC Series',
        width: '140px',
        minWidth: '120px',
      },
      {
        field: 'segment',
        header: 'Segment',
        width: '120px',
        minWidth: '100px',
      },
      {
        field: 'product',
        header: 'Product',
        width: '120px',
        minWidth: '100px',
      },
      {
        field: 'license',
        header: 'License',
        width: '120px',
        minWidth: '100px',
      },
      {
        field: 'planType',
        header: 'Plan Type',
        width: '120px',
        minWidth: '100px',
      },
    ],
    actions: this.memberGroupTableChildActions,
    selectable: false,
  };

  memberGroupTableParentSettings: TableSettings = {
    columns: [
      {
        field: 'customerName',
        header: 'Customer Name',
        width: '140px',
        minWidth: '120px',
      },
      {
        field: 'policyNumber',
        header: 'Policy Number',
        width: '150px',
        minWidth: '130px',
      },
    ],
    selectable: false,
    expandable: true,
    expandableHeader: false,
    childTableSettings: this.memberGroupTableChildSettings,
  };

  dbsIdSelected: boolean = true;
  loading = false;
  totalRecords = this.mainTableData.length;
  totalPages = 1;
  memberGroupTotalRecords = this.memberGroupTableData.length;
  memberGroupTotalPages = 1;
  username: string = '';

  constructor(private portfolioService: PortfolioEditorDashboardService, authService:AuthService) {
    this.username = authService.username
  }

  ngOnInit() {
    this.portfolioService.getUserPortfolios(this.username).subscribe((data) => {
      console.log('User Portfolios:', data);
      this.mainTableData = data as any[];
    });

    this.portfolioService.getUserPortfolioMemberGroup(this.username).subscribe((data) => {
      console.log('User Portfolio Member Group:', data);
      this.memberGroupTableData = data as ExpandableTableData[];
    });

  }

  editAction(record: any) {
    console.log('Edit Action:', record);
  }

  cloneAction(record: any) {
    console.log('Clone Action:', record);
  }

  deactivateAction(record: any) {
    console.log('Deactivate Action:', record);
  }

  switchView(selected: string) {
    this.dbsIdSelected = selected === 'dbsId';
    console.log(
      'Switched to view:',
      selected,
      'dbsIdSelected:',
      this.dbsIdSelected,
    );
  }

  onPageChange(event: any) {
    console.log('Page changed:', event);
  }

  onRowExpand(rowData: any) {
    console.log('Row expanded:', rowData);
  }

  onRowCollapse(rowData: any) {
    console.log('Row collapsed:', rowData);
  }
}
