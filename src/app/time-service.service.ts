import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TimerService {
  private timer$: Observable<number>;

  constructor() {
    this.timer$ = interval(1000);
  }

  getTimer(): Observable<number> {
    return this.timer$;
  }
}