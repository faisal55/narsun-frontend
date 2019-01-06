import { Routes, RouterModule } from '@angular/router';
import {NgModule} from '@angular/core';
import {DeviceComponent} from './device.component';
import {AuthGuard} from '../../auth.guard';


const routes: Routes = [
  { path: '', component: DeviceComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeviceRoutingModule {
}
