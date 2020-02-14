import {Component, Output, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-notifier',
  templateUrl: './notifier.component.html',
  styleUrls: ['./notifier.component.css']
})
export class NotifierComponent implements OnInit {
  @Output('send')
  notify = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  updateEvent() {
    this.notify.emit();
  }
}
