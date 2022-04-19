import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdsRoutingModule } from './ads-routing.module';
import { AdsComponent } from '../ads/ads.component';
import { MaterialModule } from 'src/app/Modules/material/material.module';
import { EditAdsComponent } from './edit-ads/edit-ads.component';
import { CreateAdsComponent } from './create-ads/create-ads.component';

@NgModule({
  declarations: [AdsComponent, EditAdsComponent, CreateAdsComponent],
  imports: [CommonModule, AdsRoutingModule, MaterialModule],
})
export class AdsModule {}
