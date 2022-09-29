import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EvaluationPage } from './evaluation.page';

const routes: Routes = [
  {
    path: '',
    component: EvaluationPage
  },
  {
    path: 'edit',
    loadChildren: () => import('./components/edit/edit.module').then( m => m.EditPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EvaluationPageRoutingModule {}
