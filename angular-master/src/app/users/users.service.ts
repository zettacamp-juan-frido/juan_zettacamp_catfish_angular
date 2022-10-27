import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}

  userData = [
    {
      idNumber: '1',
      name: 'juan',
      age: '12',
      gander: 'Male',
      email: 'juan@gmail.com',
      position: 'Full Stack',
      status: 'Single',
    },
  ];
  listUser = new BehaviorSubject(this.userData);
  listUser$ = this.listUser.asObservable();

  // getUser(){

  // }

  addUser(user: any) {
    this.userData.push(user);
    console.log(this.userData);

    this.listUser.next(this.userData);
    console.log(this.listUser);
  }
}
