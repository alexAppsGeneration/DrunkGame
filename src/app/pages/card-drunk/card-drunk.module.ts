import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {CardDrunkPageRoutingModule} from './card-drunk-routing.module';

import {CardDrunkPage} from './card-drunk.page';
import {FlexModule} from '@angular/flex-layout';
import {CardService} from '../../services/card.service';
import {JsonReaderService} from '../../services/json-reader.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardDrunkPageRoutingModule,
    FlexModule,
    HttpClientModule
  ],
  providers: [CardService, JsonReaderService],
  declarations: [CardDrunkPage]
})
export class CardDrunkPageModule {
}
