import { Routes, RouterModule } from '@angular/router';
import {NgModule} from '@angular/core';
import {UserComponent} from './user.component';
import {AuthGuard} from '../../auth.guard';


const routes: Routes = [
  { path: '', component: UserComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {
}
