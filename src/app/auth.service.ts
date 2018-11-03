import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user;
  constructor(public fauth: AngularFireAuth) { }
  login() {
    return this.fauth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(() => {
     // this.fauth.user.subscribe(user => this.user = user);
      return this.fauth.user;
    });
  }

  logout() {
    this.fauth.auth.signOut();
  }

  getUser() {
    return this.user;
  }

}
