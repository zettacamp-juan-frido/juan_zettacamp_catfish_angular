import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardListModule } from './card-list/card-list.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CardListModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
