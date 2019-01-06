import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/authRest.service';
import {Router} from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username = '';
  public password = '';
  public random: any;
  constructor(private router: Router, private auth: AuthService) {}
  ngOnInit() {
    this.random = this.makeid();
    console.log(this.random);
  }
  login() {
    if (this.password !== this.random || this.username !== 'admin') {
      return false;
      alert('Wrong Username Or Password');
    } else {
      this.auth.sendToken(this.username + this.password);
      this.router.navigate(['device']);
    }
  }
  makeid () {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
    this.random = text;
  }
}
