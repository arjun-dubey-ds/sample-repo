import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../sso/auth.guard';
import { PortfolioEditor } from './component/portfolio-editor/portfolio-editor';
import { PortfolioManagementComponent } from './component/portfolio-management/portfolio-management.component';

const routes: Routes = [
  {
    path: '',
    component: PortfolioManagementComponent,
    canActivate: [authGuard],
  },
  {
    path: 'portfolio-editor',
    component: PortfolioEditor,
    canActivate: [authGuard],
  },
  {
    path: 'ping-pe',
    component: PortfolioManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioMgmtRoutingModule { }
