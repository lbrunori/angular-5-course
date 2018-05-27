import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  counter = 0;
  interval: any;
  // tslint:disable-next-line:no-output-rename
  @Output('intervalFired') timmer = new EventEmitter<number>();

  constructor() {}

  startGame() {
    this.interval = setInterval(() => {
      this.counter++;
      this.timmer.emit(this.counter);
    }, 1000);
  }

  stopGame() {
    clearInterval(this.interval);
  }

  ngOnInit() {}
}
