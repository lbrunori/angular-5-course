import { Injectable } from '@angular/core';

@Injectable()
export class UserStatusCounter {
  inactiveChanges: number = 0;
  activeChanges: number = 0;

  incrementInactiveChanges() {
    this.inactiveChanges++;
    console.log(
      `Number of changes of user status to inactive : ` + this.inactiveChanges
    );
  }

  incrementActiveChanges() {
    this.activeChanges++;
    console.log(
      `Number of changes of user status to active : ` + this.activeChanges
    );
  }
}
