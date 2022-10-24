import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardListComponent } from './card-list.component';
import { CardUserComponent } from './card-user/card-user.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { UserService } from './user.service';
import { LoggingService } from './logging.service';

@NgModule({
  declarations: [CardListComponent, CardUserComponent, CardDetailComponent],
  imports: [CommonModule],
  exports: [CardListComponent],
  providers: [UserService, LoggingService],
})
export class CardListModule {}
