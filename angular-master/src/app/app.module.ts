import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './container/material/material.module';
import { MentorModule } from './mentor/mentor.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MaterialModule, MentorModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
