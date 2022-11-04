import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieActorComponent } from './movie-actor/movie-actor.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MoviesComponent } from './movies.component';

const routes: Routes = [
  {
    path: '',
    component: MovieListComponent,
    pathMatch: 'full',
  },
  {
    path: 'list',
    component: MovieListComponent,
    pathMatch: 'full',
  },
  { path: 'actor', component: MovieActorComponent, pathMatch: 'full' },
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
