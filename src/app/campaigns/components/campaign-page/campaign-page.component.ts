import * as firebase from 'firebase';
import { AuthService } from 'app/auth.service';
import { Campaign } from 'app/campaigns/models/Campaign';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-campaign-page',
  templateUrl: './campaign-page.component.html',
  styleUrls: ['./campaign-page.component.css']
})
export class CampaignPageComponent implements OnInit {
  campaign: Campaign;
  private subscription: Subscription;

  constructor(public route: ActivatedRoute, private db: AngularFirestore, private authService: AuthService) {
      this.route.params.subscribe(params => {
          console.log(params);
          this.setCampaign(params['campaignID'])
            .then(() => {
            console.log(this.campaign);
            })
      });

   }

  ngOnInit() {
  }

  async setCampaign(id) {
    await this.getCampaignData(id);
  }

  getCampaignData(id) {
    var id = id.toString();
    var docRef = this.db.firestore.collection("Campaigns").doc(id);
    var campaignFromFirebase: Campaign;

    docRef.get().then((doc) =>
     {   if (doc.exists) {
            campaignFromFirebase = {
              campaignID: doc.id,
              campaignName: doc.data().campaignName,
              campaignNpo: doc.data().campaignNpo,
              startDate: doc.data().startDate,
              endDate: doc.data().endDate,
              city: doc.data().city,
              cText: doc.data().cText,
              img_url: doc.data().img_url
            };
            this.campaign = campaignFromFirebase;

        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
  }

  applyCampaign(){
    var userId = this.authService.getLoggedUserId();
    console.log('Writing campaignToUser ' + this.campaign.campaignID );
    console.log("function returns" + this.getUserCampaigns(userId));
    var volCampaigns = [this.campaign.campaignID];
    this.db.collection('/Volunteers').doc(userId).update({
      userCampaigns : volCampaigns
    }).then(res => {}, err => err);

    console.log('Writing userToCammpaign ' + userId );
    var campaignVols = [this.getCampaignsVols(this.campaign.campaignID), userId];
    this.db.collection('/Campaigns').doc(this.campaign.campaignID).update({
      volunteers : userId // when works should be changed to campaignVols
    }).then(res => {}, err => err);
  }

  getUserCampaigns(volunteerMail:string)
  {
    var usersCampaigns;
    var ref = firebase.database().ref("Volunteers");
  ref.once("value")
    .then(function(snapshot) {
      if(snapshot.child("mail").val() == volunteerMail )
       usersCampaigns = snapshot.child("userCampaigns").val();
    });
  return usersCampaigns;
  }

  getCampaignsVols(CampaignId :string)
  {
    var campaignVols;
    var ref = firebase.database().ref("Campaigns");
  ref.once("value")
    .then(function(snapshot) {
      if(snapshot.child("CampaignID").val() == CampaignId)
        campaignVols = snapshot.child("volunteers").val();
    });
  return campaignVols;
  }
}
