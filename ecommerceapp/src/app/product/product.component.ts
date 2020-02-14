import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {PhotoService} from '../services/photo.service';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {IPost} from './ipost';

import * as photos from '../photo.json';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductComponent implements OnInit {

  constructor(private router: Router) {
  }
  ngOnInit(): void {


  }

}
