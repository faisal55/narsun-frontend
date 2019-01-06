import {Injectable} from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {Router} from '@angular/router';

@Injectable()
export class Api {
  public BASE_URL: string = environment.BASE_URL;
  requestHeaders = new HttpHeaders();
  constructor(public http: HttpClient, public router: Router) {
  }

  public post(path?: any, param?: any): Observable<any> {
    return this.http.post(this.BASE_URL + path , param, {headers: this.requestHeaders})
      .map((res: HttpResponse<Object>) => res);
  }

  public get(path?: any, param?: any): Observable<any> {
    return this.http.get(this.BASE_URL + path, {headers: this.requestHeaders, params: param})
      .map((res: HttpResponse<Object>) => res);
  }

  public delete(path?: any, param?: any): Observable<any> {
    return this.http.delete(this.BASE_URL + path, {headers: this.requestHeaders, params: param})
      .map((res: HttpResponse<Object>) => res.body);
  }

  public put(path?: any, param?: any): Observable<any> {
    return this.http.put(this.BASE_URL + path, param , {headers: this.requestHeaders})
      .map((res: HttpResponse<Object>) => res.body);
  }


}
