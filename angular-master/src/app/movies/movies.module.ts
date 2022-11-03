import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MoviesRoutingModule } from './movies-routing.module';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieActorComponent } from './movie-actor/movie-actor.component';
import { MaterialModule } from '../container/material/material.module';
import { MoviesComponent } from './movies.component';

@NgModule({
  declarations: [MoviesComponent, MovieListComponent, MovieActorComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [MoviesComponent],
})
export class MoviesModule {}
