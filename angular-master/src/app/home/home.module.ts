import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { PageComponent } from './page/page.component';
import { MovieComponent } from './movie/movie.component';
import { MaterialModule } from '../shared/material/material.module';
import { CardMovieComponent } from './movie/card-movie/card-movie.component';
import { HomeService } from './home.service';
import { AddFormComponent } from './add-form/add-form.component';
import { ActorComponent } from './actor/actor.component';
import { CardActorComponent } from './actor/card-actor/card-actor.component';

@NgModule({
  declarations: [PageComponent, MovieComponent, CardMovieComponent, AddFormComponent, ActorComponent, CardActorComponent],
  imports: [CommonModule, HomeRoutingModule, MaterialModule],
  providers: [HomeService],
})
export class HomeModule {}
