import { Component, OnInit } from '@angular/core';
import {DeviceRestService} from "../../services/deviceRest.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {

  public devices: any = [];
  constructor(private deviceRest: DeviceRestService, private router: Router) { }

  ngOnInit() {
    this.getDevices();
  }
  getDevices() {
    this.deviceRest.getAllDevices().subscribe(result => {
      this.devices = result.data;
      console.log('Devices: ', this.devices);
    });
  }

}
