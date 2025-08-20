import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HealthCheckComponent } from './sso/component/health-check/health-check.component';
import { LogoutComponent } from './sso/component/logout/logout.component';
import { NotFoundComponent } from './sso/component/not-found/not-found.component';

export const routes: Routes = [
  {
    path: 'health',
    component: HealthCheckComponent,
    canActivate: [],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/portfolio-management',
  },
  {
    path: 'portfolio-management',
    loadChildren: () => import('./portfolio-mgmt/portfolio-mgmt-module').then(m => m.PortfolioMgmtModule)
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
