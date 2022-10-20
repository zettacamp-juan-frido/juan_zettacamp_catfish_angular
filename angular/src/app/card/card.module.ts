import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { CardsComponent } from './cards/cards.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [CardComponent, CardsComponent, ButtonComponent],
  imports: [CommonModule],
  exports: [CardComponent],
})
export class CardModule {}
