import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-output',
  templateUrl: './user-output.component.html',
  styleUrls: ['./user-output.component.css'],
})
export class UserOutputComponent implements OnInit {
  @Input() dataUser: {
    idNumber: string;
    name: string;
    age: string;
    gander: string;
    email: string;
    position: string;
    status: string;
  };
  constructor() {}

  ngOnInit(): void {}
}
