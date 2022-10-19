import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KomponenNo1Component } from './komponen-no1/komponen-no1.component';
import { KomponenNo2Component } from './komponen-no2/komponen-no2.component';
import { KomponenNo3Component } from './komponen-no3/komponen-no3.component';
import { KomponenComponent } from './komponen.component';

@NgModule({
  declarations: [
    KomponenComponent,
    KomponenNo1Component,
    KomponenNo2Component,
    KomponenNo3Component,
  ],
  imports: [CommonModule],
})
export class Module1Module {}
