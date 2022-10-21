import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-output-data',
  templateUrl: './output-data.component.html',
  styleUrls: ['./output-data.component.css'],
  // encapsulation: ViewEncapsulation.None,
})
export class OutputDataComponent implements OnInit {
  @Input() UserData!: { userName: string; statusName: string };
  constructor() {}

  ngOnInit(): void {}
}
