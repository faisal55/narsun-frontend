import {Injectable} from '@angular/core';
import {Api} from '../api.service';
import {Router} from '@angular/router';

@Injectable()
export class UserRestService {
  constructor(public _rest: Api, private router: Router) {
  }

  public getAllUsers() {
    return this._rest.get('/user');
  }

  public createUser(param: any) {
    return this._rest.post('/user', param);
  }

  public deleteUser(param: any) {
    return this._rest.delete('/user/' + param._id, param);
  }

}
