import {Injectable, Injector} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
// @ts-ignore
import * as countries from '../countries.json';
// const HTTP_URL = 'http://localhost:7070/Product/Search';
@Injectable()
export class SearchRequestInterceptor implements HttpInterceptor {


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Intercepted request: ' + request.url);
    if (request.url.toString().includes('/Search')) {
      console.log('Loaded from JSON: ' + request.url);
      return of(new HttpResponse({status: 200, body: ((countries) as any).default}));
    }
    return next.handle(request);
  }

}
