import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {BreadcrumbMenuService} from '../services/breadcrumbmenu.service';
// shadow dom
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
   logoPath = './assets/logo.jfif';
   data: any;
   // dependency injection
  constructor(private breadcrumbMenuService: BreadcrumbMenuService) { }

  ngOnInit() {

    this.data = this.breadcrumbMenuService.getMenuData();
    console.log(this.data);

  }

}
