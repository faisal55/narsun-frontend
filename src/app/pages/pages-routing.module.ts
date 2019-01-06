import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {PagesComponent} from './pages.component';


const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
    path: 'device',
    loadChildren: './device/device.module#DeviceModule',
  }, {
    path: 'user',
    loadChildren: './user/user.module#UserModule',
  }, {
    path: 'setting',
    loadChildren: './setting/setting.module#SettingModule',
  },
    {
    path: '',
    redirectTo: 'device',
    pathMatch: 'full',
  }
  ],
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
