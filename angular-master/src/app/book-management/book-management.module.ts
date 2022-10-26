import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list/book-list.component';
import { BookCardComponent } from './book-list/book-card/book-card.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookManagementService } from './book-management.service';
import { BookManagementComponent } from './book-management.component';

@NgModule({
  declarations: [
    BookManagementComponent,
    BookListComponent,
    BookCardComponent,
    BookDetailsComponent,
  ],
  imports: [CommonModule],
  providers: [BookManagementService],
  exports: [BookManagementComponent],
})
export class BookManagementModule {}
