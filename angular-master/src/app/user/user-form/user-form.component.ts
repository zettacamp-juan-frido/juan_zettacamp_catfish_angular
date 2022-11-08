import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

import { User } from 'src/app/container/model/user.model';
import { UserService } from '../user.service';
import { AddUserComponent } from '../add-user/add-user.component';
import Swal from 'sweetalert2';
import { TranslateService } from '@ngx-translate/core/public_api';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  dataColum = ['no', 'name', 'email', 'gender', 'date'];
  users: User[];
  dataSource = new MatTableDataSource([]);
  // mentor$: Mentor[] = [];
  constructor(
    private userService: UserService,
    private dialog: MatDialog // private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.userService.$user.subscribe((value) => {
      this.users = value;
      this.dataSource.data = value;
      console.log('data user', this.users);
    });
    // this.loadMentorPge();
    // console.log('lgoing id', this.mentors._id);
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddUserComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);

      if (!result) return;

      this.userService.addUser(result);

      Swal.fire({
        icon: 'success',
        title: 'Success to add data',
      });
    });
  }

  // changeLanguage(lang: string) {
  //   this.translate.use(lang);
  // }
}
