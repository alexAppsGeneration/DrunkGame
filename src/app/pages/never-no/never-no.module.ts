import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NeverNoPageRoutingModule } from './never-no-routing.module';

import { NeverNoPage } from './never-no.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NeverNoPageRoutingModule
  ],
  declarations: [NeverNoPage]
})
export class NeverNoPageModule {}
