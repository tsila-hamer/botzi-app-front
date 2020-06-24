import { AuthService } from 'app/auth.service';
import { BackendCallsService } from '../../../backend-calls.service'
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

  @Input() appliedAlready: boolean;
  // public campaignsList: Campaign[] = [];
  public campaignsList: string[] = [];
  private error = '';

  constructor(private auh:AuthService, private db: AngularFirestore, private backendcall:BackendCallsService) {
    /*
    if (!this.appliedAlready)
    {
      //this.campaignsList =
      this.backendcall.getMatches(this.auh.getLoggedUserId()).subscribe(
        data=>
        {
          this.campaignsList = data.body ;
          console.log(this.campaignsList);
        },
        error=>
        {
          console.log(this.campaignsList);
          this.error = error;
          console.log(error);
        }
      );
    }*/

    this.campaignsList = this.getAllCampaign();
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
