import {AfterViewInit, Component, OnInit} from '@angular/core';
import {SharedService} from '../../services/shared.service';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
// Observer
export class CartComponent implements OnInit {
  subscription: Subscription;
  items: any = [];
  constructor(private sharedService: SharedService, private router: Router, private location: Location) {

  }


  ngOnInit() {
    this.subscription = this.sharedService.getMessage().subscribe(response => {

      this.items.push(response);

      console.log(this.items);


    });

  }




}
