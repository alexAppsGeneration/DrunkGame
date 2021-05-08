import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {JsonReaderService} from '../../services/json-reader.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  public jsonObj: any;
  public url = './assets/json/jsonTranslatorEng.json';

  constructor(
    public router: Router,
    private jsonService: JsonReaderService
  ) {
  }

  ngOnInit() {
    console.log(localStorage.getItem('type'));
    if (localStorage.getItem('type')) {
      this.setLanguage(localStorage.getItem('type'));
    } else {
      this.setLanguage('en');
    }

  }

  setLanguage(type) {
    switch (type) {
      case 'ru':
        this.url = './assets/json/jsonTranslatorRus.json';
        this.jsonService.getJSON(this.url).subscribe(res => {
          this.jsonObj = res;
          localStorage.setItem('type', 'ru');
        });
        break;
      case 'ua':
        this.url = './assets/json/jsonTranslatorUkr.json';
        this.jsonService.getJSON(this.url).subscribe(res => {
          this.jsonObj = res;
          localStorage.setItem('type', 'ua');
        });
        break;
      case 'en':
        this.url = './assets/json/jsonTranslatorEng.json';
        this.jsonService.getJSON(this.url).subscribe(res => {
          this.jsonObj = res;
          localStorage.setItem('type', 'en');
        });
        break;
    }
  }

  navigateToGame() {
    this.router.navigate(['card-drunk']);
  }

  setUrl(url) {
    return `url(${url})`;
  }

  public changeLanguage(event) {
    this.setLanguage(event.detail.value);
  }
}
