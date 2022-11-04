import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Actor } from 'src/app/container/module/actor.model';
import { Movies } from 'src/app/container/module/movies.model';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-actor',
  templateUrl: './movie-actor.component.html',
  styleUrls: ['./movie-actor.component.css'],
})
export class MovieActorComponent implements OnInit {
  Subscription!: Subscription;
  actorList: Actor[] = [];
  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {
    this.Subscription = this.movieService.actor$.subscribe((value) => {
      this.actorList = value;
      console.log('show data base actors', this.actorList);
    });
    console.log(this.actorList);
  }
}
