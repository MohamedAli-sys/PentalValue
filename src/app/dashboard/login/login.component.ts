import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser } from 'src/app/Models/iuser';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, RecaptchaVerifier } from 'firebase/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor() {
    this.createLoginForm();
  }

  ngOnInit(): void {}

  get formControls() {
    return this.loginForm.controls;
  }

  createLoginForm() {
    this.loginForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  login(value) {
    const au = getAuth();
    new RecaptchaVerifier(
      'sign-in-button',
      {
        size: 'invisible',
        callback: (res) => {
          console.log(res);
        },
      },
      au
    );
    // signInWithPhoneNumber(this.auth, value, 'it')
  }
}
