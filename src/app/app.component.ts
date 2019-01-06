import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Narsun-Task';
  // constructor(router: Router) {
  //   if (window.location.pathname === '/') {
  //     router.navigate(['device']);
  //   }
  // }
}
