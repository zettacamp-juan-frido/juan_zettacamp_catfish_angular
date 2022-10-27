import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css'],
})
export class HomeUserComponent implements OnInit {
  subscribe: Subscription;
  dataUser: any;
  constructor(private userSerice: UsersService) {}

  ngOnInit(): void {
    this.subscribe = this.userSerice.listUser$.subscribe((dataUser) => {
      this.dataUser = dataUser;
    });
  }
}
