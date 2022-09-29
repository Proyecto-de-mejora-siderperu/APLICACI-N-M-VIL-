import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PracticantePage } from './practicante.page';

const routes: Routes = [
  {
    path: '',
    component: PracticantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PracticantePageRoutingModule {}
