import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import * as ADS_ACTIONS from '../state/ads.action';
import { IAd } from 'src/app/Models/iad';
import { ToastersService } from 'src/app/Services/Toasters/toasters.service';

@Component({
  selector: 'app-edit-ads',
  templateUrl: './edit-ads.component.html',
  styleUrls: ['./edit-ads.component.scss'],
})
export class EditAdsComponent implements OnInit {
  createAdsForm: FormGroup;

  @Dispatch() public editAds(body: IAd) {
    return new ADS_ACTIONS.editAd(body);
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IAd,
    private toaster: ToastersService
  ) {
    this.createAdsFormFields();
  }

  get advForm() {
    return this.createAdsForm.controls;
  }

  createAdsFormFields() {
    this.createAdsForm = new FormGroup({
      mediaType: new FormControl('', Validators.required),
      link: new FormControl('', Validators.required),
      from_time: new FormControl('', Validators.required),
      to_time: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.createAdsForm.patchValue({
      mediaType: this.data.type,
      from_time: this.data.from_time,
      to_time: this.data.to_time,
    });
    if (this.data.type === 'video') {
      this.createAdsForm.patchValue({ link: this.data.video });
    } else if (this.data.type === 'image') {
      this.createAdsForm.patchValue({ link: this.data.image });
    }
  }

  submitAdsForm(value) {
    const obj: IAd = {
      id: this.data.id,
      type: value.mediaType,
      from_time: value.from_time,
      to_time: value.to_time,
    };
    if (value.mediaType === 'image') {
      obj.image = value.link;
      obj.video = '';
    } else if (value.mediaType === 'video') {
      obj.video = value.link;
      obj.image = '';
    }
    this.toaster.boxMessage('Ad Edited !', 'success');
    this.editAds(obj);
  }
}
