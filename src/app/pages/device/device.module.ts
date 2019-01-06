import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceComponent } from './device.component';
import { DeviceRoutingModule} from './device-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DeviceRoutingModule
  ],
  declarations: [DeviceComponent]
})
export class DeviceModule { }
