import { Routes, RouterModule } from '@angular/router';
import {NgModule} from '@angular/core';
import {SettingComponent} from './setting.component';
import {AuthGuard} from '../../auth.guard';


const routes: Routes = [
  { path: '', component: SettingComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingRoutingModule {
}
