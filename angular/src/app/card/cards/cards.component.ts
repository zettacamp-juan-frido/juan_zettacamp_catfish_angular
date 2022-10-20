import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() DataCard: any;

  onClick = true;

  iniClick() {
    if (this.onClick) {
      this.onClick = false;
    } else {
      this.onClick = true;
    }
  }
}
