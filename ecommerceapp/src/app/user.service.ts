import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {  }

  verifyUser(obj){
    return this.http.get('https://daimalerblog2019-cf.cfapps.io/findboauserbyname/'+ obj.userName);
  }
}
