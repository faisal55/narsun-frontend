import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule} from './pages-routing.module';
import { NavbarModule} from '../navbar/navbar.module';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    NavbarModule
  ],
  declarations: [PagesComponent]
})
export class PagesModule { }
