import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
})
export class CardListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  users = [
    {
      name: 'Master Account',
      status: 'active',
    },
    {
      name: 'Testaccount',
      status: 'inactive',
    },
    {
      name: 'Hidden Account',
      status: 'unknown',
    },
  ];

  onAccountAdded(newAccount: { name: string; status: string }) {
    this.users.push(newAccount);
  }

  onStatusChanged(updateInfo: { id: number; newStatus: string }) {
    this.users[updateInfo.id].status = updateInfo.newStatus;
  }
}
