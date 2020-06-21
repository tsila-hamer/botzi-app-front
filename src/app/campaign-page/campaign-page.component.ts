import { Campaign } from './../Campaign';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-campaign-page',
  templateUrl: './campaign-page.component.html',
  styleUrls: ['./campaign-page.component.css']
})
export class CampaignPageComponent implements OnInit {
campaign:Campaign = new Campaign("babysitting", 12345432,"Elem" ,'02/08/2020'
,'12/08/2020', "Zfat", "you'd babyssit kids whom parents are hospitalized");
  constructor() { }

  ngOnInit() {
  }

}
