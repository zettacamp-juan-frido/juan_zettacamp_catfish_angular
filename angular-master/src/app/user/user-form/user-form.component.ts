import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

import { User } from 'src/app/container/model/user.model';
import { UserService } from '../user.service';
import { AddUserComponent } from '../add-user/add-user.component';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  dataColum = ['no', 'name', 'email', 'gender', 'date'];
  mentors: User[];
  dataSource = new MatTableDataSource([]);
  // mentor$: Mentor[] = [];
  constructor(private userService: UserService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.userService.$user.subscribe((value) => {
      this.mentors = value;
      this.dataSource.data = value;
      console.log('data mentor', this.mentors);
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
        title: 'Success',
      });
    });
  }
}
