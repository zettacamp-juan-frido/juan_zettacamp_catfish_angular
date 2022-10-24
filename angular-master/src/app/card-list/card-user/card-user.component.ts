import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.css'],
})
export class CardUserComponent implements OnInit {
  constructor(private userService: UserService) {
    this.userService.statusUpdated.subscribe((status: string) =>
      alert('New Status ' + status)
    );
  }

  ngOnInit(): void {}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.userService.addAccount(accountName, accountStatus);
  }
}
