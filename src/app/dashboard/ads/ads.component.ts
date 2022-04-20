import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ViewSelectSnapshot } from '@ngxs-labs/select-snapshot';
import { IAd } from 'src/app/Models/iad';
import { CreateAdsComponent } from './create-ads/create-ads.component';
import { AdsState } from './state/ads.state';
import * as ADS_ACTIONS from './state/ads.action';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { EditAdsComponent } from './edit-ads/edit-ads.component';
import { ToastersService } from 'src/app/Services/Toasters/toasters.service';
@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss'],
})
export class AdsComponent implements OnInit {
  displayedColumns: string[] = ['type', 'link', 'start', 'end', 'controls'];
  dataSource: MatTableDataSource<IAd> = new MatTableDataSource<IAd>();

  @ViewSelectSnapshot(AdsState.AllAds) public adsData: IAd[];
  @Select(AdsState.AllAds) public allData$: Observable<IAd[]>;
  @Dispatch() public fireFetchData() {
    return new ADS_ACTIONS.FetchData();
  }
  @Dispatch() public deleteAds(id: string) {
    return new ADS_ACTIONS.deleteAd(id);
  }

  constructor(public create: MatDialog, private toaster: ToastersService) {}

  ngOnInit(): void {
    this.allData$.subscribe(
      (res: IAd[]) => (this.dataSource = new MatTableDataSource<IAd>(res))
    );
    this.fireFetchData();
  }

  createAds() {
    this.create.open(CreateAdsComponent);
  }

  deleteAd(id) {
    this.toaster.confirmMessage().then((res) => {
      if (res.isConfirmed) {
        this.deleteAds(id);
        this.toaster.boxMessage('Ad Deleted !', 'success');
      }
    });
  }

  editAd(body: IAd) {
    this.create.open(EditAdsComponent, {
      data: body,
    });
  }
}
