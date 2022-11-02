import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeBlogComponent } from './home-blog/home-blog.component';
import { BlogListComponent } from './blog-list/blog-list.component';



@NgModule({
  declarations: [
    HomeBlogComponent,
    BlogListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BlogModule { }
