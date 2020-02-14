import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {filter} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) { }

  public getPhotos(): Observable<any> {
    // @ts-ignore
    return this.http.get('https://jsonplaceholder.typicode.com/photos').pipe(filter(x => x.id < 500));
  }
  public getAlbumById(id) {
    return this.http.get('https://jsonplaceholder.typicode.com/albums/' + id);
  }

}
