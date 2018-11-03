import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  item: Observable<any[]>;
  itemusers; //: AngularFireList<any>;

  formregister: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private db: AngularFireDatabase) {
    this.itemusers = db.list('UsersList').valueChanges();


    this.formregister = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(4)]],
      lastname: ['', [Validators.required, Validators.minLength(4)]],
      city: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }


  registerUser() {
    console.log(this.formregister.value);
    if (this.formregister.valid) {
      this.db.list('UsersList').push({
        firstname: this.formregister.value.firstname,
        lastname: this.formregister.value.lastname,
        city: this.formregister.value.city,
        password: this.formregister.value.password,
        email: this.formregister.value.email,
      });


    }
    this.router.navigateByUrl('/login');
  }

  ngOnInit() {
  }
}
