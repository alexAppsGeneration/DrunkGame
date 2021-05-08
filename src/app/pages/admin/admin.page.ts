import { Component, OnInit } from '@angular/core';
import {LanguageService} from '../../services/language.service';
import {LanguageModel} from "../../models/language.model";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  public field: LanguageModel = {
    name: '',
    value: '',
  };
  public type = 'ua';
  public arrayTypes = ['en', 'ua', 'ru', 'pl'];
  public mainObject: LanguageModel[];
  constructor(private languageService: LanguageService) {
  }

  ngOnInit() {
  }

  save() {
  }

}
