import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListDataComponent } from './list-data/list-data.component';
import { OutputDataComponent } from './output-data/output-data.component';
import { UserDataComponent } from './user-data.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserDataComponent, ListDataComponent, OutputDataComponent],
  imports: [CommonModule, FormsModule],
  exports: [UserDataComponent],
})
export class UserDataModule {}
