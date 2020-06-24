import { Campaign } from './../models/Campaign';
import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { BackendCallsService } from '../../backend-calls.service';

@Component({
  selector: 'app-campaigns-per-org',
  templateUrl: './campaigns-per-org.component.html',
  styleUrls: ['./campaigns-per-org.component.css']
})
export class CampaignsPerOrgComponent implements OnInit {

  public allCampaignsList: Campaign[] = [];
  public campaignsList: Campaign[] = [];
private npoId;
private appliedAlready = true;
  constructor(private auh:AuthService, private db: AngularFirestore) { }

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
  ngOnInit() {
    this.allCampaignsList = this.getAllCampaign();
    this.npoId = this.auh.getLoggedUserId();
    this.allCampaignsList.forEach((element) => {
      if (element.campaignNpo == this.npoId )
        this.campaignsList.push(element);
    });
  }

}
