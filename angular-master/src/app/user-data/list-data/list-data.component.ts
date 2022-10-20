import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-list-data',
  templateUrl: './list-data.component.html',
  styleUrls: ['./list-data.component.css'],
})
export class ListDataComponent implements OnInit {
  @Output() AddData = new EventEmitter<{
    UserName: string;
    StatusName: string;
  }>();
  newUserName: string = '';
  newStatusName: string = '';

  onAddButton() {
    this.AddData.emit({
      UserName: this.newUserName,
      StatusName: this.newStatusName,
    });
  }
  constructor() {}

  ngOnInit(): void {}
}
