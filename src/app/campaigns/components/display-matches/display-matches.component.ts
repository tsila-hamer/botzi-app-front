import { Campaign } from 'app/campaigns/models/Campaign';
import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase';
@Component({
  selector: 'app-display-matches',
  templateUrl: './display-matches.component.html',
  styleUrls: ['./display-matches.component.css']
})
export class DisplayMatchesComponent implements OnInit {
  /*
  public campaignsList: Campaign[] = [
    {
    campaignName: "Babysitting",
    campaignID: 12345432,
    campaignNpo: "Elem" ,
    startDate: '02/08/2020',
    endDate: '12/08/2020',
    city: "Zfat",
    cText: "you'd babyssit kids whom parents are hospitalized",
    img_url: "assets/img/campaigns/babysitter.jpg"
    },
    {
    campaignName: "Medicine-Give-away",
    campaignID: 123984322,
    campaignNpo: "Ezer-Mitzion" ,
    startDate: '02/09/2020',
    endDate: '10/09/2020',
    city: "Jerusalem",
    cText: "GiveAway Medicine to old people",
    img_url: "assets/img/campaigns/medicine.jpg"
    }
  ];*/
  @Input() appliedAlready: boolean;
  public campaignsList: Campaign[] = [];

  constructor(private db: AngularFirestore) {
    if (!this.appliedAlready)
      this.campaignsList = this.getAllCampaign();
    // else
    // this.campaignsList = getVolunteersCampaigns();
    console.log(this.campaignsList);
  }

  ngOnInit() {
    //load matching list from fire-base
  }

  getAllCampaign() {
    var allCampaigns = [];
    this.db.firestore.collection("Campaigns").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots

            allCampaigns.push({
              campaignID: doc.id,
              campaignName: doc.data().campaignName,
              campaignNpo: doc.data().campaignNpo,
              startDate: doc.data().startDate,
              endDate: doc.data().endDate,
              city: doc.data().city,
              cText: doc.data().cText,
              img_url: doc.data().img_url
            })
        });
    });

    return allCampaigns;
  }

}
