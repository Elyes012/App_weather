import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
user;
  message;
  constructor(public fauth: AngularFireAuth, private router: Router) { }
  loginGoogle() {
    return this.fauth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(() => {
      this.router.navigateByUrl('/testdash');
      // this.fauth.user.subscribe(user => this.user = user);
     // return this.fauth.user;

    });
  }


  login(data) {

    this.fauth.auth.signInWithEmailAndPassword(data.email, data.password).then(res => {
      console.log('ok', res);
      this.router.navigateByUrl('/testdash');
      })
      .catch(err => {
        console.log('not ok:', err.message);
      });
  }

  logout() {
    this.fauth.auth.signOut();
  }

  getUser() {
    return this.user;
  }

  signup(value) {
    console.log('reg', value);
    return new Promise<any>((resolve, reject) => {
      this.fauth.auth.createUserWithEmailAndPassword(value.email, value.password)
        .then(res => {
          resolve(res);
        }, err => reject(err));
    });
  }

}
