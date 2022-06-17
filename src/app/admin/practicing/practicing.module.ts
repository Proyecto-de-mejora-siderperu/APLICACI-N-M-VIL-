import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PracticingPageRoutingModule } from './practicing-routing.module';

import { PracticingPage } from './practicing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PracticingPageRoutingModule
  ],
  declarations: [PracticingPage]
})
export class PracticingPageModule {}
