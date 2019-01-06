import {Injectable} from '@angular/core';
import {Api} from '../api.service';
import {Router} from '@angular/router';

@Injectable()
export class DeviceRestService {
  constructor(public _rest: Api, private router: Router) {
  }

  public getAllDevices() {
    return this._rest.get('/device');
  }

  public createDevice(param: any) {
    return this._rest.post('/device', param);
  }

  public deleteDevice(param: any) {
    return this._rest.delete('/device/' + param._id, param);
  }
  public updateDevice(param: any) {
    return this._rest.put('/device/' + param._id, param);
  }

}
