import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardListComponent } from './card-list.component';
import { CardUserComponent } from './card-user/card-user.component';
import { CardDetailComponent } from './card-detail/card-detail.component';

@NgModule({
  declarations: [CardListComponent, CardUserComponent, CardDetailComponent],
  imports: [CommonModule],
  exports: [CardListComponent],
})
export class CardListModule {}
