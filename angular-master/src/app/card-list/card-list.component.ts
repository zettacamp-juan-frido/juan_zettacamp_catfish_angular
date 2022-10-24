import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
})
export class CardListComponent implements OnInit {
  users: { name: string; status: string }[] = [];
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.users = this.userService.user;
  }
}
