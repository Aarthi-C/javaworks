import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {Component} from '@angular/core';

@Component({
  selector: 'app-rx',
  template: ``
})
export class ObservableUtility {

  constructor() {
    // unicast
    const randomNumGenerator1 = Observable.create(observer => {
      observer.next(Math.random());
    });
    const observer1 = randomNumGenerator1.subscribe(response => {
      console.log(response);
    });
    const observer2 = randomNumGenerator1.subscribe(response => {
      console.log(response);
    });
    // multicast
    const randomNumGenerator2 = new BehaviorSubject(0);
    randomNumGenerator2.next(Math.random());
    const observer3 = randomNumGenerator2.subscribe(response => {
      console.log(response);
    });
    const observer4 = randomNumGenerator2.subscribe(response => {
      console.log(response);
    });

    const subject = new Subject();
    subject.next(1);
    subject.subscribe(x => console.log('Subject', x));
    const bsubject = new BehaviorSubject(0);
    bsubject.next(1);
    bsubject.subscribe(x => console.log('Beavioural Subject', x));
  }

}



