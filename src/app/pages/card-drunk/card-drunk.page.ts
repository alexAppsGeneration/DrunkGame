import {Component, OnInit} from '@angular/core';
import {CardService} from '../../services/card.service';
import {CardModel} from '../../models/card.model';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-card-drunk',
  templateUrl: './card-drunk.page.html',
  styleUrls: ['./card-drunk.page.scss'],
})
export class CardDrunkPage implements OnInit {
  public gameFlag: boolean;
  public card: any;
  private arrayCard = [];

  constructor(private cardService: CardService, public router: Router) {
  }

  ngOnInit() {
    this.cardService.getCardList().snapshotChanges().subscribe(items => {
      items.forEach(item => {
        const jsonParser = item.payload.toJSON();
        jsonParser['$key'] = item.key;
        this.arrayCard.push(jsonParser as CardModel);
      });
    });

  }

  public gameStart() {
    this.gameFlag = true;
    this.generateRandomCard();
  }

  public changeCard() {
    this.generateRandomCard();
  }

  private generateRandomCard() {
    this.card = this.arrayCard[Math.floor(Math.random() * this.arrayCard.length)];
    return this.card;
  }

  public navigateToMain() {
    this.router.navigate(['main']);
  }

  // private generateCards() {
  //   const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  //   const suits = ['Clubs', 'Diamonds', 'Hears', 'Spades'];
  //
  //   let idCard = 0;
  //   for (let i = 0; i < suits.length; i++) {
  //     for (let j = 0; j < ranks.length; j++) {
  //       const tempObj = {
  //         rank: ranks[j],
  //         suit: suits[i],
  //         // id: idCard
  //       };
  //       this.arrayCard.push(tempObj);
  //       idCard++;
  //     }
  //   }
  // }


}
