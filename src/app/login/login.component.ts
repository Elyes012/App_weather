import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(public authService: AuthService, private router: Router, private fb: FormBuilder) { this.createForm(); }

  errorMessage: String = '';
  loginForm: FormGroup;

  ngOnInit() {
  }

  createForm() {
    this.loginForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  logingmail() {
    this.authService.login();
      this.router.navigate(['/testdash']);

    // this.router.navigate(['/testdash']);

    // console.log(
    // );
  }
  tryLogin(value) {
    // this.authService.doLogin(value)
    // .then(res => {
    //   this.router.navigate(['/testdash']);
    // }, err => {
    //   console.log(err);
    //   this.errorMessage = err.message;
    // });
  }
}
