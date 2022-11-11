import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css'],
})
export class ActorComponent implements OnInit {
  selectedLang: string = 'en';
  constructor(public translate: TranslateService) {}

  ngOnInit(): void {}

  changeLanguage(lang: string) {
    this.translate.use(lang);
  }
}
