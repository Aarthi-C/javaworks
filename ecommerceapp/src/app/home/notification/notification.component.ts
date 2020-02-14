import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotificationComponent implements OnInit {
  @Input()
  data: Observable<any>;
  messages: string[] = [];
  currTime: Date;
  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.data.subscribe(message => {
      this.messages = [...this.messages, message];
      this.cd.markForCheck();
    });
  }

}
