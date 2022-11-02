import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogDtailComponent } from './blog-dtail/blog-dtail.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { HomeBlogComponent } from './home-blog/home-blog.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeBlogComponent,
  },
  {
    path: 'list',
    component: BlogListComponent,
  },
  { path: 'create', component: BlogCreateComponent },
  { path: 'detail/:id', component: BlogDtailComponent },
  // {
  //   path: '',
  //   redirectTo: '/home',
  //   pathMatch: 'full',
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}
