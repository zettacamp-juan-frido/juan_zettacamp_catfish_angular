import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
import { FilterSearchPipe } from '../filter-search.pipe';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css'],
})
export class HomeUserComponent implements OnInit {
  // userData: Observable<any[]>;
  searchUser: FormControl<string | null> = new FormControl(null);
  subscribe: Subscription;
  dataUser: any;
  // filteredStatus = '';
  constructor(
    private userServices: UsersService,
    private filterName: FilterSearchPipe
  ) {
    // this.userData = this.userServices.listUser$;
  }

  ngOnInit(): void {
    this.subscribe = this.userServices.listUser$.subscribe((userData) => {
      this.dataUser = userData;
    });
    // this.searchUser.valueChanges.subscribe((value) => {
    //   if (value) {
    //     const filterName = this.filterName.transform(value);
    //     this.userData = this.userServices.searchFilter(filterName);
    //   } else {
    //     this.userData = this.userServices.listUser$;
    //   }
    // });

    this.searchName();
  }
  searchName() {
    this.searchUser.valueChanges.subscribe((value) => {
      if (value) {
        const searchName = this.filterName.transform(value);
        this.dataUser = this.userServices.searchFilter(searchName);
      } else {
        this.dataUser = this.userServices.listUser$;
      }
    });
  }
}
