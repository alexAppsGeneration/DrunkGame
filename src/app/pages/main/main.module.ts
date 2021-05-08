import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {MainPageRoutingModule} from './main-routing.module';

import {MainPage} from './main.page';
import {FlexModule} from '@angular/flex-layout';
import {LanguageService} from '../../services/language.service';
import {JsonReaderService} from '../../services/json-reader.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainPageRoutingModule,
    FlexModule,
    HttpClientModule
  ],
  providers: [LanguageService, JsonReaderService],
  declarations: [MainPage]
})
export class MainPageModule {
}
