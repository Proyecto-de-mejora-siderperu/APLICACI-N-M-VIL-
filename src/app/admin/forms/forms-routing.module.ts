import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateFormComponent } from './components/views/create-form/create-form.component';
import { EditFormComponent } from './components/views/edit-form/edit-form.component';

import { FormsPage } from './forms.page';

const routes: Routes = [
  {
    path: '',
    component: FormsPage
  },
  {
    path:'create',
    component:CreateFormComponent
  },
  {
    path:'edit/:id',
    component:EditFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormsPageRoutingModule {}
