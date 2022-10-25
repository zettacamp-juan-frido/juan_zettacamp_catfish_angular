import { Component, OnInit } from '@angular/core';
import { BookManagementService } from '../book-management.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
})
export class BookDetailComponent implements OnInit {
  constructor(private bookService: BookManagementService) {}
  arayBook: any | null = null;

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
