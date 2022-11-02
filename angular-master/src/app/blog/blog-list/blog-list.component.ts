import { Component, OnInit } from '@angular/core';
import { BlogServiceService } from '../blog-service.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Blog } from '../blog.model';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css'],
})
export class BlogListComponent implements OnInit {
  post: Observable<Blog[]>;
  constructor(
    private blogService: BlogServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  getPost() {
    this.post = this.blogService.getPosts();
    console.log(this.post);
    this.router.navigate(['/home']);
  }
  createBlog() {
    this.router.navigate(['/create']);
  }
}
