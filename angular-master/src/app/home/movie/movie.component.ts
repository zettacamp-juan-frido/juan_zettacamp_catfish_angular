import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  selectedLang: string = 'en';
  constructor(public translate: TranslateService) {}

  ngOnInit(): void {}

  changeLanguage(lang: string) {
    this.translate.use(lang);
  }
}
