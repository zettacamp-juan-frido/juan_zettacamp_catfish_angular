import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Blog } from './blog.model';

@Injectable({
  providedIn: 'root',
})
export class BlogServiceService {
  readonly blogUrl = 'https://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient) {}

  // post = new BehaviorSubject<Blog[]>([]);
  // $post = this.post.asObservable();

  // fetchHttpJson() {
  //   return this.http.get(this.blogUrl);
  // }
  // getPost() {
  //   this.fetchHttpJson().subscribe((value) => {
  //     this.post.next(this.$post);
  //   });
  // }

  getPosts(): Observable<Blog[]> {
    return this.http.get<Blog[]>(encodeURI(this.blogUrl + '/posts'));
  }

  onCreate(value: {
    title: string;
    body: string;
    userId: number;
  }): Observable<Blog> {
    const json = JSON.stringify(value);
    const headers = new HttpHeaders().set(
      'Content-type',
      'application/json; charset=UTF-8'
    );
    return this.http.post<Blog>(encodeURI(this.blogUrl + '/posts'), json, {
      headers,
    });
  }
}
