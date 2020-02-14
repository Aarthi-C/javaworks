import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {User} from '../models/user';
import {UserService} from '../services/user.service';
import {AuthService} from '../util/authservice';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class LoginComponent implements OnInit {

  user = new User('', '');
  errMessage = '';

  constructor(private router: Router, private userService: UserService,
              private authService: AuthService) { }

  ngOnInit() {
  }

  login(event) {
      event.preventDefault();
      console.log(this.user);
      this.userService.verifyUser(this.user).subscribe(response => {
        console.log(response);
        if (response == null) {
         this.errMessage = 'UserName/Password invalid';
        } else {
         this.errMessage = '';
         // @ts-ignore
         this.authService.sendToken(response.email);
         this.router.navigate(['/Home']);
        }

        this.clearData();
      });


  }

  clearData() {
    this.user = new User('', '');
  }
}
