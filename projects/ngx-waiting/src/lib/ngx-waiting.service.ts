import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { NgxWaiting, PRIMARY_WAITING, Waiting } from './ngx-waiting.model';
@Injectable({
  providedIn: 'root',
})
export class NgxWaitingService {
  private waitingObservable = new ReplaySubject<NgxWaiting>(1);
  constructor() {}
  getWaiting(name: string): Observable<NgxWaiting> {
    return this.waitingObservable.asObservable().pipe(filter((x: NgxWaiting) => x && x.name === name));
  }
  show(name: string = PRIMARY_WAITING, waiting?: Waiting) {
    const showPromise = new Promise((resolve, reject) => {
      if (waiting && Object.keys(waiting).length) {
        // tslint:disable-next-line:no-string-literal
        waiting['name'] = name;
        this.waitingObservable.next(new NgxWaiting({ ...waiting, show: true }));
        resolve(true);
      } else {
        this.waitingObservable.next(new NgxWaiting({ name, show: true }));
        resolve(true);
      }
    });
    return showPromise;
  }
  hide(name: string = PRIMARY_WAITING, debounce: number = 0) {
    const hidePromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        this.waitingObservable.next(new NgxWaiting({ name, show: false }));
        resolve(true);
      }, debounce);
    });
    return hidePromise;
  }
  test(name) {
    this.waitingObservable.next(new NgxWaiting({ name, show: false }));
  }
}
