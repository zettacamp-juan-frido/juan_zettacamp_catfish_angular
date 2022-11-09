import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolRoutingModule } from './school-routing.module';
import { PageComponent } from './page/page.component';
import { MaterialModule } from '../shared/material/material.module';

@NgModule({
  declarations: [PageComponent],
  imports: [CommonModule, SchoolRoutingModule, MaterialModule],
})
export class SchoolModule {}
