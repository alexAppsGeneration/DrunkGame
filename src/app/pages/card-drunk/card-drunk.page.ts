import {Component, OnInit} from '@angular/core';
import {CardService} from '../../services/card.service';
import {CardModel} from '../../models/card.model';
import {Route, Router} from '@angular/router';
import {JsonReaderService} from "../../services/json-reader.service";

@Component({
  selector: 'app-card-drunk',
  templateUrl: './card-drunk.page.html',
  styleUrls: ['./card-drunk.page.scss'],
})
export class CardDrunkPage implements OnInit {
  public jsonObj: any;
  public url = '';

  public gameFlag: boolean;
  public card: any;
  public arrayCard = [];

  private typeLanguage = localStorage.getItem('type');

  constructor(private jsonService: JsonReaderService, public router: Router) {
    this.setLanguage(localStorage.getItem('type'));
  }

  ngOnInit() {
  }

  setLanguage(type) {
    switch (type) {
      case 'ru':
        this.url = './assets/json/jsonTranslatorRus.json';
        this.jsonService.getJSON(this.url).subscribe(res => {
          this.jsonObj = res;
          this.arrayCard = this.jsonObj.cards;
          console.log(this.jsonObj);
        });
        break;
      case 'ua':
        this.url = './assets/json/jsonTranslatorUkr.json';
        this.jsonService.getJSON(this.url).subscribe(res => {
          this.jsonObj = res;
          this.arrayCard = this.jsonObj.cards;
          console.log(this.jsonObj);

        });
        break;
      case 'en':
        this.url = './assets/json/jsonTranslatorEng.json';
        this.jsonService.getJSON(this.url).subscribe(res => {
          this.jsonObj = res;
          this.arrayCard = this.jsonObj.cards;
          console.log(this.jsonObj);

        });
        break;
    }
  }

  public gameStart() {
    this.gameFlag = true;
    this.generateRandomCard();
  }

  public changeCard() {
    const tempArr = this.arrayCard.map(item => {
      if (!(item.id === this.card.id)) {
        return item;
      }
    });
    for (let i = 0; i < tempArr.length; i++) {
      if (tempArr[i] === undefined) {
        tempArr.splice(i, 1);
      }
    }
    this.arrayCard = tempArr;
    this.generateRandomCard();
  }

  public navigateToMain() {
    this.router.navigate(['main']);
  }

  private generateRandomCard() {
    this.card = this.arrayCard[Math.floor(Math.random() * this.arrayCard.length)];
    return this.card;
  }
}
