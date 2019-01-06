import { Component, OnInit } from '@angular/core';
import {DeviceRestService} from '../../services/deviceRest.service';
import {Router} from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {

  public devices: any = [];
  closeResult: string;
  public editDevice: any;

  constructor(private deviceRest: DeviceRestService, private router: Router, private modalService: NgbModal) { }

  ngOnInit() {
    this.getDevices();
  }
  getDevices() {
    this.deviceRest.getAllDevices().subscribe(result => {
      this.devices = result.data;
      console.log('Devices: ', this.devices);
    });
  }

  createDevice(param) {
    this.deviceRest.createDevice(param).subscribe(result => {
      this.getDevices();
    });
    this.modalService.dismissAll(ModalDismissReasons.BACKDROP_CLICK);
  }

  deleteDevice(param) {
    this.deviceRest.deleteDevice(param).subscribe(result => {
      this.getDevices();
    });
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  onEditDevice(contentUpdate, device) {
    this.editDevice = device;
    this.modalService.open(contentUpdate, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  updateDevice(param) {
    this.deviceRest.updateDevice(param).subscribe(res => {
      this.getDevices();
    });
    this.modalService.dismissAll(ModalDismissReasons.BACKDROP_CLICK);
  }


}
