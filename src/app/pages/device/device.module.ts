import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceComponent } from './device.component';
import { DeviceRoutingModule} from './device-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatAutocompleteModule, MatCardModule, MatFormFieldModule, MatInputModule,
  MatSelectModule, MatDatepickerModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    DeviceRoutingModule,
    FormsModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  declarations: [DeviceComponent]
})
export class DeviceModule { }
