import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { BookManagementService } from '../../book-management.service';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css'],
})
export class BookCardComponent implements OnInit {
  @Input() dataBook: {
    name: string;
    author: string;
    publisher: { names: string; date: string };
  };
  paramsSubscribe: Subscription;

  constructor(
    private bookService: BookManagementService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  // arayBook: any;

  ngOnInit(): void {
    // this.bookService.listBook$.subscribe((listBook) => {
    //   this.arayBook = listBook;
    // });
    // this.arayBook = {
    //   name: this.route.snapshot.params['name'],
    // };
    // console.log('ini', this.arayBook);
  }

  selectBook() {
    this.bookService.bookSelected(this.dataBook);
    console.log(this.bookService);

    // this.router.navigate(['/details', this.dataBook.name, 'name']);

    // const name = this.route.snapshot.params['name'];
    // this.dataBook = this.bookService.selectBook(name);
    // this.route.params.subscribe((params: Params) => {
    //   this.dataBook = this.bookService.selectBook(params['name']);
    // });

    // this.paramsSubscribe = this.route.params.subscribe((params: Params) => {
    //   this.dataBook.name = params['name'];
    //   console.log('ini params', this.paramsSubscribe);
    // });
  }
}
