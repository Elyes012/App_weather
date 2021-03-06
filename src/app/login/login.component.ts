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
  email;
  password;
  loginForm: FormGroup;
  message: String;
  constructor(public authService: AuthService, private router: Router, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.email]],
    });
   }

  ngOnInit() {
  }


  logingmail() {
    this.authService.loginGoogle();
  }

  loginSimple() {
    if (this.loginForm.valid) {
    this.authService.login(this.loginForm.value);
  }
    }

    }
