import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {DeviceRestService} from '../../services/deviceRest.service';
import {UserRestService} from '../../services/userRest.service';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  myControl = new FormControl();
  public users = [];
  public devices = [];
  closeResult: string;
  selectedDeviceId: any;
  public editUser: any;
  constructor(private userRest: UserRestService, private deviceRest: DeviceRestService,
              private router: Router, private modalService: NgbModal) { }

  ngOnInit() {
    this.getAllUsers();
    this.getAllDevices();
  }
  getAllUsers() {
    this.userRest.getAllUsers().subscribe(result => {
      this.users = result.data;
    });
  }
  getAllDevices() {
    this.deviceRest.getAllDevices().subscribe(result => {
      this.devices = result.data;
    });
  }
  open(content) {
    this.selectedDeviceId = null;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  openUpdate(contentUpdate, user) {
    this.editUser = user;
    this.modalService.open(contentUpdate, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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

  onSubmit(val) {
    val.device = this.selectedDeviceId;
    this.userRest.createUser(val).subscribe(result => {
      this.getAllUsers();
      this.modalService.dismissAll(ModalDismissReasons.BACKDROP_CLICK);
    });
  }
  selectedDevice(device) {
    this.selectedDeviceId = device._id;
  }
  onDeleteUser(param) {
    this.userRest.deleteUser(param).subscribe(result => {
      this.getAllUsers();
    });
  }
  onUpdateUser(val) {
    val.device = this.selectedDeviceId;
    this.userRest.updateUser(val).subscribe(result => {
      this.getAllUsers();
    });
    this.modalService.dismissAll(ModalDismissReasons.BACKDROP_CLICK);
  }

  freeUser(val) {
    val.device = null;
    this.userRest.updateUser(val).subscribe(result => {
      this.getAllUsers();
    });
  }

}
