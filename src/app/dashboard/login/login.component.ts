import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  @ViewChild('code') code: ElementRef;
  constructor(private auth: AngularFireAuth) {
    this.createLoginForm();
  }

  ngOnInit(): void {}

  get formControls() {
    return this.loginForm.controls;
  }

  createLoginForm() {
    this.loginForm = new FormGroup({
      phone: new FormControl('', Validators.required),
    });
  }

  login(value) {
    let verification = new firebase.auth.RecaptchaVerifier(
      'recaptcha-container'
    );
    this.auth
      .signInWithPhoneNumber(value.phone, verification)
      .then((result) => {
        let verifyCode = prompt('Enter Code');
        result.confirm(verifyCode);
        console.log(result);
      });
  }
}
