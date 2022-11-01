import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FilterSearchPipe } from './filter-search.pipe';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private filterSearchPipe: FilterSearchPipe) {
    this.listUser$ = this.listUser.asObservable();
  }

  userData = [
    {
      idNumber: '1',
      name: 'juan frido',
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

    {
      idNumber: '2',
      name: 'ooh fraudi',
      age: '20',
      gander: 'Male',
      email: 'juan@gmail.com',
      position: 'Full Stack',
      status: 'Single',
      address: [
        {
          addressName: 'JL.Panggung 4',
          zipCode: '22502',
          city: 'Tegal',
          country: 'Indonesia',
        },
        {
          addressName: 'JL.Cempaka Warna 2',
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
  searchFilter(userName: string) {
    if (!userName) {
      return this.listUser$;
    } else {
      const userFilter = this.listUser.value.filter((user) => {
        const pipe = this.filterSearchPipe;
        return pipe.transform(user.name).includes(pipe.transform(userName));
      });
      return userFilter;
    }
  }
}
