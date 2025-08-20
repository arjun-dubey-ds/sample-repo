import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// Components
import { PageComponent } from './components/page/page.component';
import { TableComponent } from './components/table/table.component';
import { LogoutComponent } from '../sso/component/logout/logout.component';
import { NotFoundComponent } from '../sso/component/not-found/not-found.component';

// PrimeNG Modules
import { ButtonModule } from 'primeng/button';
import { ButtonGroupModule } from 'primeng/buttongroup';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { PaginatorModule } from 'primeng/paginator';
import { SkeletonModule } from 'primeng/skeleton';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';

// Common PrimeNG modules that are frequently used
const PRIMENG_MODULES = [
  ButtonModule,
  ButtonGroupModule,
  CardModule,
  CheckboxModule,
  DropdownModule,
  IconFieldModule,
  InputIconModule,
  InputTextModule,
  MultiSelectModule,
  PaginatorModule,
  SkeletonModule,
  TableModule,
  TagModule,
  TooltipModule,
];

@NgModule({
  declarations: [
    TableComponent,
    PageComponent,
    LogoutComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ...PRIMENG_MODULES,
  ],
  exports: [
    // Re-export common modules
    CommonModule,
    ReactiveFormsModule,
    ...PRIMENG_MODULES,
    // Export our components
    TableComponent,
    PageComponent,
    LogoutComponent,
    NotFoundComponent,
  ],
})
export class SharedModule {}
