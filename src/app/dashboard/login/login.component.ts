import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { ToastersService } from 'src/app/Services/Toasters/toasters.service';
import { SweetAlertResult } from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  @ViewChild('code') code: ElementRef;
  constructor(
    private auth: AngularFireAuth,
    private toaster: ToastersService,
    private router: Router
  ) {
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
        this.toaster
          .boxRefuseReason('Enter your verification code !')
          .then((res: SweetAlertResult) => {
            if (res.isConfirmed) {
              result.confirm(res.value).then((res) => {
                console.log(res);
              });
              localStorage.setItem('token', result.verificationId);
              this.toaster.boxMessage('Logged In', 'success');
              this.router.navigate(['/Ads']);
            }
          });
      });
  }
}
