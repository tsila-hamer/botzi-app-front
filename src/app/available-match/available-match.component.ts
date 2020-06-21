import { Campaign } from './../Campaign';
import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-available-match',
  templateUrl: './available-match.component.html',
  styleUrls: ['./available-match.component.css']
})
export class AvailableMatchComponent implements OnInit {

  @Input() public campaign:Campaign;

  constructor() { }

  ngOnInit() {
  }

}
