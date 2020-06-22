import { Campaign } from './../Campaign';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-campaign-page',
  templateUrl: './campaign-page.component.html',
  styleUrls: ['./campaign-page.component.css']
})
export class CampaignPageComponent implements OnInit {
campaign:Campaign= 
 new Campaign("babysitting", 12345432,"Elem" ,'02/08/2020'
,'12/08/2020', "Zfat", "you'd babyssit kids whom parents are hospitalized");
  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
     this.route.params.subscribe(params => {
      this.campaign.campaignName =  params['campaignName'];
      this.campaign.campaignID = params['campaignID'];
       this.campaign.campaignNpo =  params['campaignNpo'];
      this.campaign.city = params['city']; 
      this.campaign.startDate =  params['startDate'];
      this.campaign.endDate = params['endDate'];
      this.campaign.cText = params['cText'];
      });
  }

}
