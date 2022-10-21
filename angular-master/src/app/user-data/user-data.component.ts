import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class UserDataComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  dataUser = [{ userName: 'Daniel', statusName: 'bosan' }];

  onAddedButton(UserData: { UserName: string; StatusName: string }) {
    this.dataUser.push({
      userName: UserData.UserName,
      statusName: UserData.StatusName,
    });
  }

  onChange() {
    this.dataUser[0].userName = 'juan';
    this.dataUser[0].statusName = 'lagi coding';
  }

  onDestroy() {
    this.dataUser.splice(0, 1);
  }
}
