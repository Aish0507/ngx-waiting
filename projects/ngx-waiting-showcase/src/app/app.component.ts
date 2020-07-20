import { Component } from '@angular/core';
import { NgxWaitingService } from 'ngx-waiting';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  waitingType: any = 'ball-8bits';
  bgColor: any;
  iconList: Array<string> = [
    'ball-8bits',
    'ball-atom',
    'ball-beat',
    'ball-circus',
    'ball-climbing-dot',
    'ball-clip-rotate',
    'ball-clip-rotate-multiple',
    'ball-clip-rotate-pulse',
    'ball-elastic-dots',
    'ball-fall',
    'ball-fussion',
    'ball-grid-beat',
    'ball-grid-pulse',
    'ball-newton-cradle',
    'ball-pulse',
    'ball-pulse-rise',
    'ball-pulse-sync',
    'ball-rotate',
    'ball-running-dots',
    'ball-scale',
    'ball-scale-multiple',
    'ball-scale-pulse',
    'ball-scale-ripple',
    'ball-scale-ripple-multiple',
    'ball-spin',
    'ball-spin-clockwise',
    'ball-spin-clockwise-fade',
    'ball-spin-clockwise-fade-rotating',
    'ball-spin-fade',
    'ball-spin-fade-rotating',
    'ball-spin-rotate',
    'ball-square-clockwise-spin',
    'ball-square-spin',
    'ball-triangle-path',
    'ball-zig-zag',
    'ball-zig-zag-deflect',
    'cube-transition',
    'fire',
    'line-scale',
    'line-scale-party',
    'line-scale-pulse-out',
    'line-scale-pulse-out-rapid',
    'line-spin-clockwise-fade',
    'line-spin-clockwise-fade-rotating',
    'line-spin-fade',
    'line-spin-fade-rotating',
    'pacman',
    'square-jelly-box',
    'square-loader',
    'square-spin',
    'timer',
    'triangle-skew-spin',
  ];

  constructor(private waiting: NgxWaitingService) {
    this.bgColor = 'rgba(0, 0, 0, 1)';
  }
  showWaiting(name: string) {
    this.waiting.show(name);
  }

  hideWaiting(name: string) {
    this.waiting.hide(name);
  }
  showWaitingWithAutoClose(name: string) {
    this.waiting.show(name);
    this.waiting.hide(name, 5000);
  }
  showWaitingFullScreen(name: string) {
    this.waiting.show(name);
    this.waiting.hide(name, 3000);
  }
}
