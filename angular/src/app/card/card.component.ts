import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  id: any;
  text: any;
  cardData = [
    { id: 1, text: 'Halo bla bla bla 1' },
    { id: 2, text: 'Halo bla bla bla 2' },
    { id: 3, text: 'Halo bla bla bla 3' },
    { id: 4, text: 'Halo bla bla bla 4' },
  ];
}
