import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ViewSelectSnapshot } from '@ngxs-labs/select-snapshot';
import { IAd } from 'src/app/Models/iad';
import { DataService } from 'src/app/Services/Data/data.service';
import { CreateAdsComponent } from './create-ads/create-ads.component';
import { AdsState } from './state/ads.state';
import * as ADS_ACTIONS from './state/ads.action';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss'],
})
export class AdsComponent implements OnInit {
  displayedColumns: string[] = ['type', 'link', 'start', 'end', 'controls'];
  dataSource: MatTableDataSource<IAd> = new MatTableDataSource<IAd>();

  @ViewSelectSnapshot(AdsState.AllAds) public adsData: IAd[];
  @Select(AdsState.AllAds) public testData: Observable<IAd[]>;
  @Dispatch() public fireFetchData() {
    return new ADS_ACTIONS.FetchData();
  }
  @Dispatch() public deleteAds(id: string) {
    return new ADS_ACTIONS.deleteAd(id);
  }
  @Dispatch() public editAds(body: IAd) {
    return new ADS_ACTIONS.editAd(body);
  }
  constructor(public create: MatDialog, private adsService: DataService) {}

  ngOnInit(): void {
    this.testData.subscribe(
      (res: IAd[]) => (this.dataSource = new MatTableDataSource<IAd>(res))
    );
    this.fireFetchData();
  }

  createAds() {
    this.create.open(CreateAdsComponent);
  }

  deleteAd(id) {
    this.deleteAds(id);
  }

  editAd(body: IAd) {
    console.log(body);
    body = {
      ...body,
      image: 'vlaue elsdasdas',
    };
    this.editAds(body);
    console.log(body);
  }
}
