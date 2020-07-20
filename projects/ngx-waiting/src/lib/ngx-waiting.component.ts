import {
  Component,
  OnDestroy,
  Input,
  OnInit,
  OnChanges,
  SimpleChange,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { NgxWaitingService } from './ngx-waiting.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { WAITING_ICONS, DEFAULTS, Size, NgxWaiting, PRIMARY_WAITING } from './ngx-waiting.model';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'ngx-waiting',
  templateUrl: 'ngx-waiting.component.html',
  styleUrls: ['ngx-waiting.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fadeIn', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [style({ opacity: 0 }), animate(300)]),
      transition(':leave', animate(200, style({ opacity: 0 }))),
    ]),
  ],
})
export class NgxWaitingComponent implements OnDestroy, OnInit, OnChanges {
  @Input() bgColor: string;
  @Input() size: Size;
  @Input() color: string;
  @Input() type: string;
  @Input() fullscreen: boolean;
  @Input() name: string;
  @Input() zIndex: number;
  @Input() template: string;
  waiting: NgxWaiting = new NgxWaiting();
  iconEleArray: Array<number>;
  iconEleCnt: number;
  show: boolean;
  ngUnsubscribe: Subject<void> = new Subject();
  constructor(private waitingService: NgxWaitingService, private changeDetector: ChangeDetectorRef) {
    this.bgColor = DEFAULTS.BG_COLOR;
    this.zIndex = DEFAULTS.Z_INDEX;
    this.color = DEFAULTS.WAITING_COLOR;
    this.type = DEFAULTS.WAITING_TYPE;
    this.size = 'big';
    this.fullscreen = true;
    this.name = PRIMARY_WAITING;
    this.template = null;

    this.iconEleArray = [];
    this.iconEleCnt = 0;
    this.show = false;
  }
  ngOnInit() {
    this.setDefaultOptions();
    this.waitingService
      .getWaiting(this.name)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((waiting: NgxWaiting) => {
        this.setDefaultOptions();
        Object.assign(this.waiting, waiting);
        if (waiting.show) {
          this.onInputChange();
        }
        this.changeDetector.markForCheck();
      });
  }
  setDefaultOptions = () => {
    this.waiting = new NgxWaiting({
      name: this.name,
      bgColor: this.bgColor,
      size: this.size,
      color: this.color,
      type: this.type,
      fullscreen: this.fullscreen,
      iconEleArray: this.iconEleArray,
      iconEleCnt: this.iconEleCnt,
      show: this.show,
      zIndex: this.zIndex,
      template: this.template,
    });
  };
  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    for (const propName in changes) {
      if (propName) {
        const changedProp = changes[propName];
        if (changedProp.isFirstChange()) {
          return;
        } else if (
          typeof changedProp.currentValue !== 'undefined' &&
          changedProp.currentValue !== changedProp.previousValue
        ) {
          if (changedProp.currentValue !== '') {
            this.waiting[propName] = changedProp.currentValue;
          }
        }
      }
    }
  }
  getClass(type: string, size: Size): string {
    this.waiting.iconEleCnt = WAITING_ICONS[type];
    this.waiting.iconEleArray = Array(this.waiting.iconEleCnt)
      .fill(0)
      .map((x, i) => i);
    let sizeClass = '';
    switch (size.toLowerCase()) {
      case 'compact':
        sizeClass = 'la-sm';
        break;
      case 'normal':
        sizeClass = 'la-2x';
        break;
      case 'big':
        sizeClass = 'la-3x';
        break;
      default:
        break;
    }
    return 'la-' + type + ' ' + sizeClass;
  }
  onInputChange() {
    this.waiting.class = this.getClass(this.waiting.type, this.waiting.size);
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
