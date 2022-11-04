import { Component, OnInit, Input } from '@angular/core';
import { Actor } from 'src/app/container/module/actor.model';
import { Movies } from 'src/app/container/module/movies.model';

@Component({
  selector: 'app-actor-card',
  templateUrl: './actor-card.component.html',
  styleUrls: ['./actor-card.component.css'],
})
export class ActorCardComponent implements OnInit {
  @Input() dataActor: Actor;
  constructor() {}

  ngOnInit(): void {}
}
