import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  firstname: String;
  lastname: String;
  email: String;
  city: String;
  password: String;
  formregister: FormGroup;
  constructor( private fb: FormBuilder, private router: Router) {
    this.formregister = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(4)]],
      lastname: ['', [Validators.required, Validators.minLength(4)]],
      city: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }


  registerUser() {
    if (this.formregister.valid) {
      alert('register work');
    this.router.navigateByUrl('/dashbord');

    }
  }

  ngOnInit() {
  }

}
