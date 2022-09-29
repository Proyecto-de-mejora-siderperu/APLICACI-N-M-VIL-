import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormsPageRoutingModule } from './forms-routing.module';

import { FormsPage } from './forms.page';
import { DataTablesModule } from 'angular-datatables';
import { CreateFormComponent } from './components/views/create-form/create-form.component';
import { EditFormComponent } from './components/views/edit-form/edit-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormsPageRoutingModule,
    DataTablesModule
  ],
  declarations: [FormsPage,CreateFormComponent,EditFormComponent]
})
export class FormsPageModule {}
