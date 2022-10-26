import { Component, OnInit } from '@angular/core';
import { BookManagementService } from '../book-management.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent implements OnInit {
  arayBook: any | null = null;

  constructor(private bookService: BookManagementService) {}

  ngOnInit(): void {
    this.bookService.selectedBook$.subscribe((selectBook) => {
      this.arayBook = selectBook;
      console.log('ini log', this.arayBook);
    });
    // console.log(this.arayBook);
  }
  closeDetail() {
    this.bookService.closeBook();
    console.log(this.bookService);
  }
}
