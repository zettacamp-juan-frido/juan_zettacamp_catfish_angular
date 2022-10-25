import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookManagementComponent } from './book-management.component';
import { BookCardComponent } from './book-list/book-card/book-card.component';

@NgModule({
  declarations: [
    BookListComponent,
    BookDetailComponent,
    BookManagementComponent,
    BookCardComponent,
  ],
  imports: [CommonModule],
  exports: [BookManagementComponent],
})
export class BookManagementModule {}
