import {Component, OnChanges, OnInit, ViewEncapsulation} from '@angular/core';
import {IPost} from '../ipost';
import {PhotoService} from '../../services/photo.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {fromEvent} from 'rxjs';
import {SharedService} from '../../services/shared.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GalleryComponent implements OnInit {

  products: IPost[];
  productsArr: any = [];

  constructor(private photoService: PhotoService, private sharedService: SharedService, private location: Location, private router: Router,  private route: ActivatedRoute) {

  }

  ngOnInit() {

     // this.productsArr = this.location.getState();
      // console.log(this.productsArr.default);
      // this.productsArr = this.productsArr.default;
    // this.products = this.route.snapshot.data.products.slice(1, 50);
       this.route.data.subscribe(response => {
          this.productsArr = response;
          console.log(this.productsArr);
          this.productsArr = this.productsArr.default;

       });
      // console.log(this.products);
    /*this.photoService.getPhotos().subscribe(response => {
      // console.log(response);
      this.products = response.slice(1, 50);
      console.log(this.products);
    });*/
  }


  getProductDetails(product) {
    console.log(product);
    this.sharedService.updateMessage(product);
    // console.log(product);
    /*const button = document.querySelector('button');
    const keyups = fromEvent(button, 'click')
      .subscribe(value => {
        // @ts-ignore
        console.log(value);
        // @ts-ignore
        console.log(value.srcElement.src);
        if (value.type === 'click') {
          // @ts-ignore
          console.log('input value: ', value.srcElement.src);
          // @ts-ignore
          this.sharedService.updateMessage(value.srcElement.src);
        }
      });*/
    // routing parameter
    // this.router.navigate(['/About', product.id]);
    // routing with complex data
    // this.router.navigate(['/About'], { queryParams: {data: JSON.stringify(this.productsArr)},  skipLocationChange: true });
  }



}
