import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

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

  @ViewChild('InputStatus') InputStatus: ElementRef;

  onAddButton() {
    this.AddData.emit({
      UserName: this.newUserName,
      StatusName: this.newStatusName,
    });
  }

  onAddButtonLocal(InputName: HTMLInputElement) {
    this.AddData.emit({
      UserName: InputName.value,
      StatusName: this.InputStatus.nativeElement.value,
    });
  }
  constructor() {}

  ngOnInit(): void {}
}
