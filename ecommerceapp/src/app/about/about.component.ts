import {Component, HostListener, OnInit} from '@angular/core';
import {PhotoService} from '../services/photo.service';
import {ActivatedRoute, Router, RouterState} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  album: any = {
     title: ''
  };
  productList: any;
  constructor(private photoService: PhotoService, private route: ActivatedRoute, private  location: Location) {


  }
  @HostListener('window:popstate', ['$event'])
  onPopState(event) {
    console.log('Back button pressed');
    // this.location.back();
   // window.history.back();
  }

  ngOnInit() {
    // complex object

    this.route.queryParams.subscribe(param => {
     console.log(JSON.parse(param.data));
     this.productList = JSON.parse(param.data);

    });

    this.photoService.getAlbumById(this.productList[0].id).subscribe(response => {
          console.log(response);
          this.album = response;
        });

  }



}
