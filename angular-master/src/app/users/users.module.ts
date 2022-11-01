import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UsersRoutingModule } from './users-routing.module';
import { HomeUserComponent } from './home-user/home-user.component';
import { UserInputComponent } from './user-input/user-input.component';
import { UsersComponent } from '../users/users.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { UsersService } from './users.service';
import { UserOutputComponent } from './home-user/user-output/user-output.component';
import { UserEditComponent } from './home-user/user-edit/user-edit.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { FilterSearchPipe } from './filter-search.pipe';

@NgModule({
  declarations: [
    HomeUserComponent,
    UserInputComponent,
    UsersComponent,
    UserOutputComponent,
    UserEditComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    SweetAlert2Module,
    FormsModule,
  ],
  exports: [UsersComponent],
  providers: [UsersService, FilterSearchPipe],
})
export class UsersModule {}
