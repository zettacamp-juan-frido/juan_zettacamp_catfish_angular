import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css'],
})
export class CardDetailComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() account: { name: string; status: string };
  @Input() id: number;
  @Output() statusChanged = new EventEmitter<{
    id: number;
    newStatus: string;
  }>();

  onSetTo(status: string) {
    this.statusChanged.emit({ id: this.id, newStatus: status });
    console.log('A server status changed, new status: ' + status);
  }
}
