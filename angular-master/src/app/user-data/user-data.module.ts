import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDataComponent } from './user-data.component';
import { InputListComponent } from './input-list/input-list.component';
import { OutputListComponent } from './output-list/output-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserDataComponent, InputListComponent, OutputListComponent],
  imports: [CommonModule, FormsModule],
  exports: [UserDataComponent],
})
export class UserDataModule {}
