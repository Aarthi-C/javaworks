import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from './authservice';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {

  }
  // tslint:disable-next-line:max-line-length
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.isLoggednIn()) {
      return true;
    } else {
      this.router.navigate(['/Login']);
      return false;
    }
  }

  // tslint:disable-next-line:max-line-length
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    /*if (!this.authService.isAdminUser()) {
      alert('You are not allowed to view this page');
      return false;
    } else {
      return true;
    }*/
    if (this.authService.isLoggednIn()) {
      return true;
    } else {
      this.router.navigate(['/Login']);
      return false;
    }

  }

}
