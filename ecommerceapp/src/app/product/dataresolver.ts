import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {PhotoService} from '../services/photo.service';
import {IPost} from './ipost';


@Injectable()
export class ProductPostsResolver implements Resolve<IPost[]> {
  constructor(private photoService: PhotoService) {}

  public resolve(route: ActivatedRouteSnapshot): Observable<IPost[]> {
    return this.photoService.getPhotos();
  }
}
