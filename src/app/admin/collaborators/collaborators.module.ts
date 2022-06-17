import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CollaboratorsPageRoutingModule } from './collaborators-routing.module';

import { CollaboratorsPage } from './collaborators.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CollaboratorsPageRoutingModule
  ],
  declarations: [CollaboratorsPage]
})
export class CollaboratorsPageModule {}
