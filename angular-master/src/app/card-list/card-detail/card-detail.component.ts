import { Component, OnInit, Input } from '@angular/core';

import { UserService } from '../user.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css'],
})
export class CardDetailComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  @Input() account: { name: string; status: string };
  @Input() id: number;

  onSetTo(status: string) {
    this.userService.updateStatus(this.id, status);
    this.userService.statusUpdated.emit(status);
  }
}
