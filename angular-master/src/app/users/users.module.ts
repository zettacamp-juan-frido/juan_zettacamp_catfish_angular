import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { UsersRoutingModule } from './users-routing.module';
import { HomeUserComponent } from './home-user/home-user.component';
import { UserInputComponent } from './user-input/user-input.component';
import { UsersComponent } from '../users/users.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { UsersService } from './users.service';

@NgModule({
  declarations: [HomeUserComponent, UserInputComponent, UsersComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
  ],
  exports: [UsersComponent],
  providers: [UsersService],
})
export class UsersModule {}
