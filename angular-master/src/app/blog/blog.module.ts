import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//
import { BlogRoutingModule } from './blog-router.module';
import { HomeBlogComponent } from './home-blog/home-blog.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { MaterialModule } from '../container/material/material.module';
import { BlogServiceService } from './blog-service.service';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogDtailComponent } from './blog-dtail/blog-dtail.component';

@NgModule({
  declarations: [HomeBlogComponent, BlogListComponent, BlogCreateComponent, BlogDtailComponent],
  imports: [
    CommonModule,
    MaterialModule,
    BlogRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [HomeBlogComponent],
  providers: [BlogServiceService],
})
export class BlogModule {}
