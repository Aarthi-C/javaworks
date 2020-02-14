import { Injectable } from '@angular/core';
import {MenuData} from '../models/menuData'

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbMenuService {

  constructor() { }
  getMenuData(){
    return MenuData;
  }
}
