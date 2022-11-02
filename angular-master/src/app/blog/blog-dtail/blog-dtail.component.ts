import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { BlogServiceService } from '../blog-service.service';
import { Blog } from '../blog.model';

@Component({
  selector: 'app-blog-dtail',
  templateUrl: './blog-dtail.component.html',
  styleUrls: ['./blog-dtail.component.css'],
})
export class BlogDtailComponent implements OnInit {
  getPost: Observable<Blog>;
  postId: string | null;
  constructor(private blog: BlogServiceService, private route: ActivatedRoute) {
    this.postId = this.route.snapshot.paramMap.get('id');
    this.getPost = this.postId ? this.blog.getIdPosts(this.postId) : of();
  }

  ngOnInit(): void {}
}
