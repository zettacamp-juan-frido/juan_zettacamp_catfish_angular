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
      address: [
        {
          addressName: 'Jl Kh Zaenal Arifin',
          zipCode: '22502',
          city: 'Tegal',
          country: 'Indonesia',
        },
        {
          addressName: 'Jl Kh Zaenal Arifin',
          zipCode: '2302',
          city: 'Jakarta',
          country: 'Indonesia',
        },
      ],
    },
  ];
  listUser = new BehaviorSubject(this.userData);
  listUser$ = this.listUser.asObservable();

  getUser() {
    return this.listUser.getValue();
  }

  addUser(user: any) {
    this.userData.push(user);
    console.log(this.userData);

    this.listUser.next(this.userData);
    console.log(this.listUser);
  }

  updateUser(user: any) {
    const data = this.getUser().map((i) => {
      return i.idNumber === user.idNumber ? user : i;
    });
    this.listUser.next(data);
  }
}
