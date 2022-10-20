import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css'],
})
export class UserDataComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  dataUser = [
    { userName: 'Daniel', statusName: 'bosan' },
    { userName: 'Daniel', statusName: 'heran' },
    { userName: 'Daniel', statusName: 'gak tau ngapain' },
    { userName: 'Daniel', statusName: 'bingung' },
  ];

  onAddedButton(UserData: { UserName: string; StatusName: string }) {
    this.dataUser.push({
      userName: UserData.UserName,
      statusName: UserData.StatusName,
    });
  }
}
