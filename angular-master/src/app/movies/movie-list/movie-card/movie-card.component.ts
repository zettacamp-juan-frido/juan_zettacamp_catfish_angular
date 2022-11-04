import { Component, OnInit, Input } from '@angular/core';
import { Movies } from 'src/app/container/module/movies.model';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent implements OnInit {
  @Input() moviesData: Movies;
  constructor() {}

  ngOnInit(): void {}
}
