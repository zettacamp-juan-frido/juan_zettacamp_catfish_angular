import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-output-data',
  templateUrl: './output-data.component.html',
  styleUrls: ['./output-data.component.css'],
})
export class OutputDataComponent implements OnInit {
  @Input() UserData!: { userName: string; statusName: string };
  constructor() {}

  ngOnInit(): void {}
}
