import { Injectable } from '@angular/core';
import {MenuData} from '../models/menudata';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbMenuService {

  constructor() { }

  getMenuData() {
    return MenuData;
  }

}
