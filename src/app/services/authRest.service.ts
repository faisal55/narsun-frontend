import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable()
export class AuthService {
  constructor(private router: Router) { }

  sendToken(token: string) {
    localStorage.setItem('user', token);
  }
  getToken() {
    return localStorage.getItem('user');
  }
  isLoggednIn() {
    return this.getToken() !== null;
  }
}
