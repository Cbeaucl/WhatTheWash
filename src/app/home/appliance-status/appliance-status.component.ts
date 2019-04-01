import { Component, OnInit, Input } from '@angular/core';
import { Appliance } from '../model/appliance';

@Component({
  selector: 'app-appliance-status',
  templateUrl: './appliance-status.component.html',
  styleUrls: ['./appliance-status.component.css']
})
export class ApplianceStatusComponent implements OnInit {
  @Input() appliance:Appliance
  available = false
  timer = 40
  constructor() { }

  ngOnInit() {
  }

}
