import { Component, OnInit, Input } from '@angular/core';
import { BookManagementService } from '../../book-management.service';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css'],
})
export class BookCardComponent implements OnInit {
  @Input() dataBook: {
    name: string;
    author: string;
    publisher: { names: string; date: string };
  };

  constructor(private bookService: BookManagementService) {}
  arayBook: any;

  ngOnInit(): void {
    this.bookService.listBook$.subscribe((listBook) => {
      this.arayBook = listBook;
    });
    console.log(this.arayBook);
  }

  selectBook() {
    this.bookService.bookSelected(this.dataBook);
    console.log(this.bookService);
  }
}
