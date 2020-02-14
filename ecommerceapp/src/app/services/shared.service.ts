import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  message = new Subject<any>();
  constructor() { }


  getMessage(): Observable<any> {
    return this.message.asObservable();
  }
  updateMessage(msg: any) {
    this.message.next(msg);
  }

}
