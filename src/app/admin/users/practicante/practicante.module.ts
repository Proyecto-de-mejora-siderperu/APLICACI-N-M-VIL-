import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PracticantePageRoutingModule } from './practicante-routing.module';

import { PracticantePage } from './practicante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PracticantePageRoutingModule
  ],
  declarations: [PracticantePage]
})
export class PracticantePageModule {}
