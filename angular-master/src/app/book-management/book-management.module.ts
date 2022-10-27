import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { BookListComponent } from './book-list/book-list.component';
import { BookCardComponent } from './book-list/book-card/book-card.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookManagementService } from './book-management.service';
import { BookManagementComponent } from './book-management.component';

const appRoutes: Routes = [
  { path: '', component: BookManagementComponent },
  {
    path: 'list',
    component: BookListComponent,
    children: [
      {
        path: ':name',
        component: BookCardComponent,
      },
    ],
  },
  // { path: 'details', component: BookDetailsComponent },
];

@NgModule({
  declarations: [
    BookManagementComponent,
    BookListComponent,
    BookCardComponent,
    BookDetailsComponent,
  ],
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  providers: [BookManagementService],
  exports: [BookManagementComponent],
})
export class BookManagementModule {}
