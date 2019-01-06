import { Component, OnInit } from '@angular/core';
import {SettingRestService} from '../../services/settingRest.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  public settings = {};
  constructor(private settingRest: SettingRestService) { }

  ngOnInit() {
    this.getSettings();
  }
  getSettings() {
   this.settingRest.getSettings().subscribe(result => {
     this.settings = result.data;
     console.log(this.settings);
   });
  }

}
