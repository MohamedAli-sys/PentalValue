import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { IAd } from 'src/app/Models/iad';
import { ToastersService } from 'src/app/Services/Toasters/toasters.service';
import * as ADS_ACTIONS from '../state/ads.action';
@Component({
  selector: 'app-create-ads',
  templateUrl: './create-ads.component.html',
  styleUrls: ['./create-ads.component.scss'],
})
export class CreateAdsComponent implements OnInit {
  createAdsForm: FormGroup;
  constructor(private toaster: ToastersService) {
    this.createAdsFormFields();
  }

  @Dispatch() private CreateNewAd(data) {
    return new ADS_ACTIONS.addNewAds(data);
  }

  ngOnInit(): void {}

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

  submitAdsForm(value) {
    const obj: IAd = {
      id: new Date().toString(),
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
    this.toaster.boxMessage('Ad Created !', 'success');
    this.CreateNewAd(obj);
  }
}
