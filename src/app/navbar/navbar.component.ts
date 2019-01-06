import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }
  devices() {
    this.router.navigate(['device']);
  }
  users() {
    this.router.navigate(['user']);
  }
  settings() {
    this.router.navigate(['setting']);
  }

}
