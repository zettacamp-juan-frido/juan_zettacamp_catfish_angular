import { EventEmitter, Injectable } from '@angular/core';

import { LoggingService } from './logging.service';

@Injectable()
export class UserService {
  user = [];
  statusUpdated = new EventEmitter<string>();

  constructor(private loggingService: LoggingService) {}

  addAccount(name: string, status: string) {
    this.user.push({ name: name, status: status });
    this.loggingService.logStatusChange(status);
  }

  updateStatus(id: number, status: string) {
    this.user[id].status = status;
    this.loggingService.logStatusChange(status);
  }
}
