import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from '@angular/fire/database';
import {CardModel} from '../models/card.model';

@Injectable()
export class CardService {

  cellsRef: AngularFireList<any>;
  cellRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) {
  }

  addCard(cell: CardModel) {
    this.cellsRef.push({
      rank: cell.rank,
      suit: cell.suit,
      text: cell.text
    })
      .catch(error => {
        this.errorMgmt(error);
      });
  }

  /* Get cell */
  public getCard(id: string) {
    this.cellRef = this.db.object('cards/' + id);
    return this.cellRef;
  }

  /* Get cell list */
  getCardList() {
    this.cellsRef = this.db.list('cards');
    return this.cellsRef;
  }

  /* Update cell */
  updateCard(id, cell: CardModel) {
    this.cellRef.update({
      rank: cell.rank,
      suit: cell.suit,
      text: cell.text
    })
      .catch(error => {
        this.errorMgmt(error);
      });
  }

  /* Delete cell */
  deleteCard(id: string) {
    this.cellRef = this.db.object('cards/' + id);
    this.cellRef.remove()
      .catch(error => {
        this.errorMgmt(error);
      });
  }

  // Error management
  private errorMgmt(error) {
    console.log(error);
  }

}
