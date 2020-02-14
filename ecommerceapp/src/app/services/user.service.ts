import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {EMPTY, Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor( private http: HttpClient) {

  }
  addBOAUser(boauser: any): Observable<any> {

    return this.http.post('https://daimalerblog2019-cf.cfapps.io/addboauser',
      boauser, httpOptions).pipe(
      catchError( err => {
        if ((err.status > 400) && (err.status < 500)) {
          return EMPTY;
        } else {
          return throwError(err);
        }
      })
    );

  }
  public verifyUser(obj) {
    return this.http.get('https://daimalerblog2019-cf.cfapps.io/findboauserbyname/' + obj.userName);
  }
}
