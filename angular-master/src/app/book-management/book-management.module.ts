import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list/book-list.component';
import { BookCardComponent } from './book-list/book-card/book-card.component';
import { BookDetailsComponent } from './book-details/book-details.component';

@NgModule({
  declarations: [BookListComponent, BookCardComponent, BookDetailsComponent],
  imports: [CommonModule],
})
export class BookManagementModule {}
