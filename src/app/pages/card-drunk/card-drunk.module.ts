import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardDrunkPageRoutingModule } from './card-drunk-routing.module';

import { CardDrunkPage } from './card-drunk.page';
import {FlexModule} from '@angular/flex-layout';
import {CardService} from '../../services/card.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CardDrunkPageRoutingModule,
        FlexModule
    ],
  providers: [CardService],
  declarations: [CardDrunkPage]
})
export class CardDrunkPageModule {}
