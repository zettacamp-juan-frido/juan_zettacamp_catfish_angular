import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardListComponent } from './card-list.component';
import { CardUserComponent } from './card-user/card-user.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { UserService } from './user.service';
import { LoggingService } from './logging.service';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [CardListComponent, CardUserComponent, CardDetailComponent],
  imports: [
    CommonModule,
    MatSliderModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
  ],

  exports: [CardListComponent],
  providers: [UserService, LoggingService],
})
export class CardListModule {}
