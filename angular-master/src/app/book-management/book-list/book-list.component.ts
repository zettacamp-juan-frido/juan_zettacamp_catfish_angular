import { Component, OnInit } from '@angular/core';
import { BookManagementService } from '../book-management.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  arayBook: any;
  constructor(private bookService: BookManagementService) {}

  ngOnInit(): void {
    this.arayBook = this.bookService.dataBook;
    console.log(this.arayBook);
  }
}
