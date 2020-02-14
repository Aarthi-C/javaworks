import {AfterViewInit, Component, ContentChild, ElementRef, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {BehaviorSubject, of, Subject} from 'rxjs';
import {NotificationComponent} from '../notification/notification.component';
import {NotifierComponent} from '../notifier/notifier.component';
import * as data from '../../photo.json';
import {takeUntil} from 'rxjs/operators';
@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css']
})
export class SenderComponent implements OnInit, AfterViewInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();
  messages = new BehaviorSubject(['Hi']);
  message: any;
  @ViewChild(NotificationComponent, {static: false}) notificationComponent: NotificationComponent;
  @ViewChildren(NotificationComponent) viewchildValue: QueryList<NotificationComponent>;
  @ContentChild(NotificationComponent, {static: false}) contentNotification: NotificationComponent;
  constructor() { }

  ngOnInit() {

    of(data)
      .pipe(takeUntil(this.destroy$))
      .subscribe(value => {

        console.log(value);


      });

  }

  sendMessage() {
    this.messages.next(this.message);
    this.notificationComponent.currTime = new Date();
  }

  ngAfterViewInit(): void {
    console.log('Hello ', this.viewchildValue);
    console.log(`ngAfterContentInit - Notification ContentChild is ${this.contentNotification}`);
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
