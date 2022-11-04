import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Movies } from '../container/module/movies.model';
import { Actor } from '../container/module/actor.model';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  movies: any;
  actors: any;
  constructor(private http: HttpClient, private httpActor: HttpClient) {
    this.listDummy();
    this.listDummyActor();
  }

  movie = new BehaviorSubject<Movies[]>([]);
  movie$ = this.movie.asObservable();

  actor = new BehaviorSubject<Actor[]>([]);
  actor$ = this.actor.asObservable();

  listDummy() {
    this.fetchJsonMovie().subscribe((value) => {
      this.movies = value.movies;
      this.movie.next(this.movies);
    });
  }

  listDummyActor() {
    this.fetchJsonActor().subscribe((value) => {
      this.actors = value.actor;
      this.actor.next(this.actors);
      console.log('dummy actors', value.actor);
    });
  }

  fetchJsonMovie() {
    return this.http.get<any>('../../assets/json/movies.json');
  }

  fetchJsonActor() {
    return this.http.get<any>('../../assets/json/actor.json');
  }
}
