import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdsComponent } from './ads.component';
import { CreateAdsComponent } from './create-ads/create-ads.component';
import { EditAdsComponent } from './edit-ads/edit-ads.component';

const routes: Routes = [
  { path: '', component: AdsComponent },
  { path: 'Create', component: CreateAdsComponent },
  { path: 'Edit/:id', component: EditAdsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdsRoutingModule {}
