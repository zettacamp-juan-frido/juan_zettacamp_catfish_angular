import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MoviesRoutingModule } from './movies-routing.module';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieActorComponent } from './movie-actor/movie-actor.component';
import { MaterialModule } from '../container/material/material.module';
import { MoviesComponent } from './movies.component';
import { MoviesService } from './movies.service';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MovieCardComponent } from './movie-list/movie-card/movie-card.component';
import { ActorCardComponent } from './movie-actor/actor-card/actor-card.component';

@NgModule({
  declarations: [MoviesComponent, MovieListComponent, MovieActorComponent, MovieCardComponent, ActorCardComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [MoviesComponent],
  providers: [MoviesService],
})
export class MoviesModule {}
