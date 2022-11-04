import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movies } from 'src/app/container/module/movies.model';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  Subscription!: Subscription;
  movieList: Movies[] = [];
  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {
    this.Subscription = this.movieService.movie$.subscribe((value) => {
      this.movieList = value;
      console.log('show data base', this.movieList);
    });
    console.log(this.movieList);
  }
}
