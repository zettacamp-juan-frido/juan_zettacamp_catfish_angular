import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../container/model/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {
    this.dummyUser();
  }
  users: any;

  user = new BehaviorSubject<User[]>([]);
  $user = this.user.asObservable();

  fetchJson() {
    return this.http.get<any>('../../assets/json/user.json');
  }

  dummyUser() {
    this.fetchJson().subscribe((value) => {
      this.users = value.user;
      this.user.next(this.users);
      console.log('data dummy user from json', this.users);
    });
  }
}
