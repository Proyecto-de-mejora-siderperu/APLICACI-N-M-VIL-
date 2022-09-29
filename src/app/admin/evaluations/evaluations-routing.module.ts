import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEvaluationComponent } from './components/views/create-evaluation/create-evaluation.component';
import { EditEvaluationComponent } from './components/views/edit-evaluation/edit-evaluation.component';

import { EvaluationsPage } from './evaluations.page';

const routes: Routes = [
  {
    path: '',
    component: EvaluationsPage
  },
  {
    path: 'create',
    component:CreateEvaluationComponent
  },
  {
    path: 'edit/:id',
    component:EditEvaluationComponent     
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EvaluationsPageRoutingModule {}
