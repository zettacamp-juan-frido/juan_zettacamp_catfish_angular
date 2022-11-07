import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from './user-form/user-form.component';
import { UserService } from './user.service';

@NgModule({
  declarations: [UserFormComponent],
  imports: [CommonModule],
  providers: [UserService],
  exports: [UserFormComponent],
})
export class UserModule {}
