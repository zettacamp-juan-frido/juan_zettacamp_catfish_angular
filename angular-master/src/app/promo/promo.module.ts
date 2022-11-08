import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromoRoutingModule } from './promo-routing.module';
import { PageComponent } from './page/page.component';
import { CardPageComponent } from './page/card-page/card-page.component';
import { MaterialModule } from '../shared/material/material.module';

@NgModule({
  declarations: [PageComponent, CardPageComponent],
  imports: [CommonModule, PromoRoutingModule, MaterialModule],
})
export class PromoModule {}
