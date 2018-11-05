import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthsGuard implements CanActivate {
  constructor(private authService: AuthService, public router: Router, public fauth: AngularFireAuth) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise <boolean>|boolean {
return this.fauth.authState.pipe(map(auth => {
if (!auth) {
this.router.navigateByUrl('/login');
return false;
} else {
  return true;
}
}));
      /*if (this.authService.login) {
        this.router.navigate(['/testdash']);
        return true;
      }else{
      }*/
  }
}
