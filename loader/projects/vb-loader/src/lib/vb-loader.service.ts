import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VbLoaderService {

  public isEnabled = new BehaviorSubject(false);
  public setOverlay = new BehaviorSubject(false);

  constructor() { }

  show() {
    this.isEnabled.next(true);
    this.setOverlay.next(true);
  }

  hide() {
    this.isEnabled.next(false);
    this.setOverlay.next(false);
  }
}
