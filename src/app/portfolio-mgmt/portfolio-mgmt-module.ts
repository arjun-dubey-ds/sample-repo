import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { MessageService } from 'primeng/api';
import { PortfolioMgmtRoutingModule } from './portfolio-mgmt-routing-module';
import { SharedModule } from '../shared/shared.module';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { TabViewModule } from 'primeng/tabview';
import { AccordionModule } from 'primeng/accordion';
import { MyPlansComponent } from './component/my-plans/my-plans.component';
import { PortfolioManagementComponent } from './component/portfolio-management/portfolio-management.component';
import { CheckboxModule } from 'primeng/checkbox';
import { EditorTabComponent } from './component/portfolio-editor/editor-tab/editor-tab.component';
import { BenefitCategoryComponent } from './component/portfolio-editor/benefit-category/benefit-category';
import { VerticalFormComponent } from './component/portfolio-editor/vertical-form/vertical-form.component';
import { PortfolioEditor } from './component/portfolio-editor/portfolio-editor';
import { PanelModule } from 'primeng/panel';
import { DividerModule } from 'primeng/divider';
import { AccumulatorsComponent } from "./component/portfolio-editor/accumulators/accumulators.component";

@NgModule({
  declarations: [
    PortfolioEditor,
    PortfolioManagementComponent,
    MyPlansComponent,
    BenefitCategoryComponent,
    VerticalFormComponent,
    EditorTabComponent,
    AccumulatorsComponent
  ],
  imports: [
    CommonModule,
    PortfolioMgmtRoutingModule,
    ReactiveFormsModule,
    AccordionModule,
    CardModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    TableModule,
    DropdownModule,
    CalendarModule,
    ToastModule,
    TabViewModule,
    CheckboxModule,
    SharedModule,
    PanelModule,
    DividerModule,
    DropdownModule
],
  providers: [MessageService],
})
export class PortfolioMgmtModule { }
