import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-navs',
  templateUrl: './navs.component.html',
  styleUrls: ['./navs.component.css']
})
export class NavsComponent implements OnInit {
  isLoggedIn;
  isLogIn;
  isUserLogin;

  constructor(private router: Router, public authService: AuthService) { }

  ngOnInit() {
this.authService.getAuth().subscribe(auth => {
if (auth) {
  this.isLogIn = true;
  this.isUserLogin = auth.email;
} else {
  this.isLogIn = false;
}
});

  }
logOut () {
this.authService.logout();
}
}
