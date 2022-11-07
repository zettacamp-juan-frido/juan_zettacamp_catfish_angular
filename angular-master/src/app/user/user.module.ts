import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';

import { UserFormComponent } from './user-form/user-form.component';
import { UserService } from './user.service';

@NgModule({
  declarations: [UserFormComponent],
  imports: [CommonModule, FormsModule, HttpClientModule, MatTableModule],
  providers: [UserService],
  exports: [UserFormComponent],
})
export class UserModule {}
