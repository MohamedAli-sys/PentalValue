import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-ads',
  templateUrl: './create-ads.component.html',
  styleUrls: ['./create-ads.component.scss'],
})
export class CreateAdsComponent implements OnInit {
  createAdsForm: FormGroup;
  constructor() {
    this.createAdsFormFields();
  }

  ngOnInit(): void {}

  get advForm() {
    return this.createAdsForm.controls;
  }

  createAdsFormFields() {
    this.createAdsForm = new FormGroup({
      mediaType: new FormControl('', Validators.required),
      mediaLink: new FormControl('', Validators.required),
      from_time: new FormControl('', Validators.required),
      to_time: new FormControl('', Validators.required),
    });
  }

  submitAdsForm(value) {
    console.log(value);
  }
}
