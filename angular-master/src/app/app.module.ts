import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookManagementModule } from './book-management/book-management.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BookManagementModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
