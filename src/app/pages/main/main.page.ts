import {Component, OnInit} from '@angular/core';
import {GameListModel} from '../../models/game-list.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  public gameArray: Array<GameListModel> = [
    {
      name: 'Карти на випивання',
      rules: 'Правила: Виконати умови та пити',
      link: 'card-drunk',
      img: ''
    }
    // {
    //   name: 'Я ніколи не',
    //   rules: 'Правила: Якщо ви робили те що написано на картці, то треба випити',
    //   link: 'never-no',
    //   img: ''
    // },
    // {
    //   name: 'Правда чи дія',
    //   rules: 'Правила: Вибрати дію і виконати те що написано на картці',
    //   link: 'truth-or-dare',
    //   img: ''
    // }
  ];

  constructor(public router: Router) {
  }

  ngOnInit() {
  }

  navigateToGame(game) {
    this.router.navigate([game.link]);
  }

  setUrl(url) {
    return `url(${url})`;
  }
}
