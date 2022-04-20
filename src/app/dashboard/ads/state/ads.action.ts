import { IAd } from 'src/app/Models/iad';

export class FetchData {
  static readonly type = '[Ads] Fetch Data';
}

export class addNewAds {
  static readonly type = '[Ads] Add New Ads';
  constructor(public data: IAd) {}
}

export class editAd {
  static readonly type = '[Ads] Edit Ad';
  constructor(public body: IAd) {}
}

export class deleteAd {
  static readonly type = '[Ads] Delete Ad';
  constructor(public id: string) {}
}
