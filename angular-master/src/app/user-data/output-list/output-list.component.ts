import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-output-list',
  templateUrl: './output-list.component.html',
  styleUrls: ['./output-list.component.css'],
})
export class OutputListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() UserData: { userName: string; statusName: string };
}
