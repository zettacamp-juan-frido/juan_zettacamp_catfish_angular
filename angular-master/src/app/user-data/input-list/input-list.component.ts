import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-list',
  templateUrl: './input-list.component.html',
  styleUrls: ['./input-list.component.css'],
})
export class InputListComponent implements OnInit {
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
