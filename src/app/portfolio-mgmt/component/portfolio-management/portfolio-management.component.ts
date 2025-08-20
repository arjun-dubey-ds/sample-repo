import { Component } from '@angular/core';
import { TableSettings } from '../../../shared/models/table.interface';
import { ActionSettings, Mode } from '../../../shared/models/action.interface';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-portfolio-management',
  templateUrl: './portfolio-management.component.html',
  styleUrl: './portfolio-management.component.scss',
})
export class PortfolioManagementComponent {
  //MOCK DATA
  // Updated table data with proper field names
  tableData = [
    {
      planCode: 'PC001',
      orgnaization: 'Org A',
      cocSeries: 'COC-A',
      state: 'CA',
      segment: 'KA',
      license: 'LIC001',
      product: 'Product-A',
      standard: 'Standard',
    },
    {
      planCode: 'PC002',
      orgnaization: 'Org A',
      cocSeries: 'COC-B',
      state: 'TX',
      segment: 'KA',
      license: 'LIC002',
      product: 'Product-A',
      standard: 'Standard',
    },
    {
      planCode: 'PC003',
      orgnaization: 'Org A',
      cocSeries: 'COC-C',
      state: 'NY',
      segment: 'KA',
      license: 'LIC003',
      product: 'Product-A',
      standard: 'Standard',
    },
  ];

  // Dropdown options
  segmentOptions = [
    { label: 'KA', value: 'KA' },
    { label: 'KB', value: 'KB' },
    { label: 'KC', value: 'KC' },
  ];

  stateOptions = [
    { label: 'California', value: 'CA' },
    { label: 'Texas', value: 'TX' },
    { label: 'New York', value: 'NY' },
    { label: 'Florida', value: 'FL' },
  ];

  cocSeriesOptions = [
    { label: 'COC-A', value: 'COC-A' },
    { label: 'COC-B', value: 'COC-B' },
    { label: 'COC-C', value: 'COC-C' },
  ];

  licenseOptions = [
    { label: 'LIC001', value: 'LIC001' },
    { label: 'LIC002', value: 'LIC002' },
    { label: 'LIC003', value: 'LIC003' },
  ];

  productOptions = [
    { label: 'Product-A', value: 'Product-A' },
    { label: 'Product-B', value: 'Product-B' },
    { label: 'Product-C', value: 'Product-C' },
  ];

  standardOptions = [
    { label: 'Standard', value: 'Standard' },
    { label: 'Custom', value: 'Custom' },
  ];

  planTypeOptions = [
    { label: 'Type-A', value: 'Type-A' },
    { label: 'Type-B', value: 'Type-B' },
    { label: 'Type-C', value: 'Type-C' },
  ];

  searchForm: FormGroup;
  // Table state
  loading = false;
  totalRecords = this.tableData.length;
  totalPages = 1;
  // Table actions
  tableActions: ActionSettings[] = [
    {
      title: Mode.Standard,
      showTitle: true,
      func: this.createStandard.bind(this),
      params: [],
      size: 'small',
      outlined: true,
      severity: 'primary',
      showWhen: () => true,
    },
    {
      title: Mode.Custom,
      showTitle: true,
      func: this.createCustom.bind(this),
      params: [],
      size: 'small',
      outlined: true,
      severity: 'primary',
      showWhen: () => true,
    },
  ];
  // Table configuration
  tableSettings: TableSettings = {
    columns: [
      {
        field: 'planCode',
        header: 'Plan Code',
        width: '120px',
        minWidth: '100px'
      },
      {
        field: 'cocSeries',
        header: 'COC Series',
        width: '140px',
        minWidth: '120px'
      },
      {
        field: 'state',
        header: 'State',
        width: '100px',
        minWidth: '80px'
      },
      {
        field: 'segment',
        header: 'Segment',
        width: '100px',
        minWidth: '80px'
      },
      {
        field: 'license',
        header: 'License',
        width: '120px',
        minWidth: '100px'
      },
      {
        field: 'product',
        header: 'Published',
        width: '140px',
        minWidth: '120px'
      },
      {
        field: 'standard',
        header: 'Standard',
        width: '120px',
        minWidth: '100px'
      },
    ],
    actions: this.tableActions,
    selectable: false,
  };

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute) {
    this.searchForm = this.fb.group({
      planCode: [''],
      segment: [''],
      state: [''],
      cocSeries: [''],
      license: [''],
      product: [''],
      standard: [''],
      planType: [''],
    });
  }

  // Event handlers

  // Form event handlers
  onSearch() {
    const formValues = this.searchForm.value;
    console.log('Search form values:', formValues);
    // Implement search functionality
  }

  onClear() {
    this.searchForm.reset();
    console.log('Form cleared');
  }

  onPageChange(event: any) {
    console.log('Page changed:', event);
    // Handle pagination if needed
  }

  // Action handlers
  createStandard(record: any) {
    console.log('Edit record:', record);
    this.router.navigate(['/portfolio-management/portfolio-editor']);
    // Implement edit functionality
  }

  createCustom(record: any) {
    console.log('View record:', record);
    this.router.navigate(['/portfolio-management/portfolio-editor']);
    // Implement view functionality
  }
}
