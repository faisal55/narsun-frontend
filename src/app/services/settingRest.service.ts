import {Injectable} from '@angular/core';
import {Api} from '../api.service';
import {Router} from '@angular/router';

@Injectable()
export class SettingRestService {
  constructor(public _rest: Api, private router: Router) {
  }

  public getSettings() {
    return this._rest.get('/settings');
  }

  public updateSettings(param: any) {
    return this._rest.put('/settings/' + param._id, param);
  }

}
