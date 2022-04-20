import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdsRoutingModule } from './ads-routing.module';
import { AdsComponent } from '../ads/ads.component';
import { MaterialModule } from 'src/app/Modules/material/material.module';
import { EditAdsComponent } from './edit-ads/edit-ads.component';
import { CreateAdsComponent } from './create-ads/create-ads.component';
import { NgxsModule } from '@ngxs/store';
import { AdsState } from './state/ads.state';

@NgModule({
  declarations: [AdsComponent, EditAdsComponent, CreateAdsComponent],
  imports: [
    CommonModule,
    AdsRoutingModule,
    MaterialModule,
    NgxsModule.forFeature([AdsState]),
  ],
})
export class AdsModule {}
