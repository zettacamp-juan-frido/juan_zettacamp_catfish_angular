import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';

import { MentorListComponent } from './mentor-list/mentor-list.component';
import { MentorService } from './mentor.service';
import { MentorFormComponent } from './mentor-list/mentor-form/mentor-form.component';

@NgModule({
  declarations: [MentorListComponent, MentorFormComponent],
  imports: [CommonModule, FormsModule, HttpClientModule, MatTableModule],
  providers: [MentorService],
  exports: [MentorListComponent],
})
export class MentorModule {}
