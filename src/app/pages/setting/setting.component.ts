import { Component, OnInit } from '@angular/core';
import {SettingRestService} from '../../services/settingRest.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  public settings: any = [];
  public show = false;
  public hide = true;
  closeResult: string;
  myControl = new FormControl();
  public editSettings: any;
  constructor(private settingRest: SettingRestService, private modalService: NgbModal) { }

  ngOnInit() {
    this.getSettings();
  }
  getSettings() {
   this.settingRest.getSettings().subscribe(result => {
     this.settings = result.data[0];
     console.log(this.settings);
   });
  }
  editSetting(contentUpdate, settings) {
    this.editSettings = settings;
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
  onUpdate(param) {
    this.settingRest.updateSettings(param).subscribe(res => {
      this.getSettings();
    });
    this.modalService.dismissAll(ModalDismissReasons.BACKDROP_CLICK);
  }

}
