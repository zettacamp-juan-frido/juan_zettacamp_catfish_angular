import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BookManagementService } from './book-management.service';

@Component({
  selector: 'app-book-management',
  templateUrl: './book-management.component.html',
  styleUrls: ['./book-management.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class BookManagementComponent implements OnInit {
  constructor(private bookService: BookManagementService) {}
  arayBook: any | null = null;

  ngOnInit(): void {
    this.bookService.selectedBook$.subscribe((selectBook) => {
      this.arayBook = selectBook;
    });
  }
}
