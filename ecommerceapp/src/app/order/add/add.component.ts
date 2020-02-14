import { Component, OnInit } from '@angular/core';
import * as photos from '../../photo.json';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


}
