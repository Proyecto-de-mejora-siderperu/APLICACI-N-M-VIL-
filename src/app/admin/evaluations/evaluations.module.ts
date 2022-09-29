import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EvaluationsPageRoutingModule } from './evaluations-routing.module';

import { EvaluationsPage } from './evaluations.page';
import { DataTablesModule } from 'angular-datatables';
import { CreateEvaluationComponent } from './components/views/create-evaluation/create-evaluation.component';
import { EditEvaluationComponent } from './components/views/edit-evaluation/edit-evaluation.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EvaluationsPageRoutingModule,
    DataTablesModule
  ],
  declarations: [EvaluationsPage,CreateEvaluationComponent,EditEvaluationComponent]
})
export class EvaluationsPageModule {}
