import { Campaign } from 'app/campaigns/models/Campaign';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-display-matches',
  templateUrl: './display-matches.component.html',
  styleUrls: ['./display-matches.component.css']
})
export class DisplayMatchesComponent implements OnInit {

  public campaignsList: Campaign[] = [
    {
    campaignName: "Babysitting",
    campaignID: 12345432,
    campaignNpo: "Elem" ,
    startDate: '02/08/2020',
    endDate: '12/08/2020',
    city: "Zfat",
    cText: "you'd babyssit kids whom parents are hospitalized"
    },
    {
    campaignName: "Medicine-Give-away",
    campaignID: 123984322,
    campaignNpo: "Ezer-Mitzion" ,
    startDate: '02/09/2020',
    endDate: '10/09/2020',
    city: "Jerusalem",
    cText: "you'd giveAway Medicine to old people"
    }
  ];


  constructor() { }

  ngOnInit() {
    //load matching list from fire-base
  }

}
