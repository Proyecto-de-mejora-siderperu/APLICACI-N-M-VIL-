import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersPage } from './users.page';

const routes: Routes = [
  {
    path: '',
    component: UsersPage
  },
  {
    path: 'practicante',
    loadChildren: () => import('./practicante/practicante.module').then( m => m.PracticantePageModule)
  },
  {
    path: 'monitor',
    loadChildren: () => import('./monitor/monitor.module').then( m => m.MonitorPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersPageRoutingModule {}
