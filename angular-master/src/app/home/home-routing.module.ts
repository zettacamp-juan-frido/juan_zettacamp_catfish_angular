import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorComponent } from './actor/actor.component';
import { MovieComponent } from './movie/movie.component';
import { PageComponent } from './page/page.component';

const routes: Routes = [
  {
    path: 'home',
    component: PageComponent,
  },
  {
    path: 'movie',
    component: MovieComponent,
  },

  {
    path: 'actor',
    component: ActorComponent,
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
