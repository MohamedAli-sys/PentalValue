import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { IAd } from 'src/app/Models/iad';
import { DataService } from 'src/app/Services/Data/data.service';
import * as ADS_ACTIONS from './ads.action';
export class AdsStateModel {
  public allAds: IAd[];

  constructor() {
    this.allAds = [];
  }
}

@Injectable()
@State<AdsStateModel>({
  name: 'Ads',
  defaults: new AdsStateModel(),
})
export class AdsState {
  constructor(private dataService: DataService) {}

  /**
   *
   * @Decorator Selectors
   * @returns
   */
  @Selector() static AllAds(state: AdsStateModel): IAd[] {
    return state.allAds;
  }

  /**
   * @Decorators Reducers
   * PatchState & GetStates
   */
  @Action(ADS_ACTIONS.FetchData)
  public FetchData({ patchState }: StateContext<AdsStateModel>) {
    patchState({
      allAds: this.dataService.fetchData(),
    });
  }

  @Action(ADS_ACTIONS.addNewAds)
  public addNewAds(
    { patchState, getState }: StateContext<AdsStateModel>,
    { data }: ADS_ACTIONS.addNewAds
  ) {
    patchState({
      allAds: [...getState().allAds, data],
    });
  }

  @Action(ADS_ACTIONS.editAd)
  public editAd(
    { patchState, getState }: StateContext<AdsStateModel>,
    { body }: ADS_ACTIONS.editAd
  ) {
    let Ads = getState().allAds.map((el) => (el.id === body.id ? body : el));
    patchState({
      allAds: Ads,
    });
  }

  @Action(ADS_ACTIONS.deleteAd)
  public deleteAd(
    { patchState, getState }: StateContext<AdsStateModel>,
    { id }: ADS_ACTIONS.deleteAd
  ) {
    let Ads = getState().allAds;
    Ads = Ads.filter((ad) => ad.id !== id);
    patchState({
      allAds: Ads,
    });
  }
}
