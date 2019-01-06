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
  @Input()
  compareWith: (o1: any, o2: any) => boolean;
  public users = [];
  public devices = [];
  closeResult: string;
  selectedDevice = '-1';
  constructor(private userRest: UserRestService, private deviceRest: DeviceRestService, private router: Router, private modalService: NgbModal) { }

  ngOnInit() {
    this.getAllUsers();
  }
  getAllUsers() {
    this.userRest.getAllUsers().subscribe(result => {
      this.users = result.data;
      console.log(this.users);
    });
  }
  getAllDevices() {
    this.deviceRest.getAllDevices().subscribe(result => {
      this.devices = result.data;
    });
  }
  onDeleteUser(param) {
    this.userRest.deleteUser(param).subscribe(response => {
      this.getAllUsers();
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

}
