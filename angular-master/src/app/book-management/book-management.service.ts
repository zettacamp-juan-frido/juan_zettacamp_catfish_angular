import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookManagementService {
  dataBook = [
    {
      name: 'Genshin Impact',
      author: 'Hoyolab',
      publisher: { names: 'Hoyoverse', date: '8 - 8 - 2016' },
    },
    {
      name: 'Dota 2',
      author: 'Gaben Nuel',
      publisher: { names: 'Steam', date: '13 - 7 - 2010' },
    },
    {
      name: 'Valorant',
      author: 'Riot Games',
      publisher: { names: 'Riot', date: '20 - 5 - 2018' },
    },
  ];
  listBook = new BehaviorSubject(this.dataBook);
  listBook$ = this.listBook.asObservable();

  selectedBook = new BehaviorSubject(null);
  selectedBook$ = this.selectedBook.asObservable();

  bookSelected(book) {
    this.selectedBook.next(book);
    console.log(this.selectedBook);
  }

  closeBook() {
    this.selectedBook.next(null);
    console.log(this.selectedBook);
  }
  constructor() {}
}
