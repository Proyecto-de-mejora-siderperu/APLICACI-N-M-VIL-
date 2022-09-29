import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PracticantePage } from './practicante.page';

const routes: Routes = [
  {
    path: '',
    component: PracticantePage
  },
  {
    path: 'evaluation',
    loadChildren: () => import('./evaluation/evaluation.module').then( m => m.EvaluationPageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./history/history.module').then( m => m.HistoryPageModule)
  },
  {
    path: 'configuration',
    loadChildren: () => import('./configuration/configuration.module').then( m => m.ConfigurationPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PracticantePageRoutingModule {}
