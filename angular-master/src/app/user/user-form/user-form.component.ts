import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/container/model/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  dataColum = ['id', 'first_name', 'email', 'user_status'];
  mentors: User[];
  dataSource = new MatTableDataSource([]);
  // mentor$: Mentor[] = [];
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.$user.subscribe((value) => {
      this.mentors = value;
      this.dataSource.data = value;
      console.log('data mentor', this.mentors);
    });
    // this.loadMentorPge();
    // console.log('lgoing id', this.mentors._id);
  }
}
