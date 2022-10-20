import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardModule } from './card/card.module';
// import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
