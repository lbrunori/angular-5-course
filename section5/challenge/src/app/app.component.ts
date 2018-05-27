import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onIntervalFired(intervalFired: number) {
    if (intervalFired % 2 === 0) {
      this.evenNumbers.push(intervalFired);
    } else {
      this.oddNumbers.push(intervalFired);
    }
  }
}
