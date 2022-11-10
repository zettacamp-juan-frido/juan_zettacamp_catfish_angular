import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromoRoutingModule } from './promo-routing.module';
import { PageComponent } from './page/page.component';
import { CardPageComponent } from './page/card-page/card-page.component';
import { MaterialModule } from '../shared/material/material.module';
import { CreatePromoComponent } from './page/create-promo/create-promo.component';

@NgModule({
  declarations: [PageComponent, CardPageComponent, CreatePromoComponent],
  imports: [CommonModule, PromoRoutingModule, MaterialModule],
})
export class PromoModule {}
