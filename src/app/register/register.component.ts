import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formregister: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private db: AngularFireDatabase, public authService: AuthService) {
    this.formregister = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }


  registerUser() {
    console.log(this.formregister.value);
    if (this.formregister.valid) {
        this.authService.signup(this.formregister.value);
        this.router.navigateByUrl('/login');
      }

     /* push data to firebase
     this.db.list('UsersList').push({
        firstname: this.formregister.value.firstname,
        lastname: this.formregister.value.lastname,
        city: this.formregister.value.city,
        password: this.formregister.value.password,
        email: this.formregister.value.email,
      });*/


    }
    ngOnInit() {
    }
  }

