import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { KomponenComponent } from './module-1/komponen.component';
import { Module1Module } from './module-1/module-1.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, Module1Module],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
