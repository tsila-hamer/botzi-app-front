import * as firebase from 'firebase';
import { AuthService } from 'app/auth.service';
import { Campaign } from 'app/campaigns/models/Campaign';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { AngularFirestore } from 'angularfire2/firestore';


@Component({
  selector: 'app-campaign-page',
  templateUrl: './campaign-page.component.html',
  styleUrls: ['./campaign-page.component.css']
})
export class CampaignPageComponent implements OnInit {
  campaign: Campaign = {
    campaignName: "Babysitting",
    campaignID: 12345432,
    campaignNpo: "Elem" ,
    startDate: '02/08/2020',
    endDate: '12/08/2020',
    city: "Zfat",
    cText: "Babysit kids whom parents are hospitalized",
    img_url: "assets/img/campaigns/babysitter.jpg"};

  constructor(public route: ActivatedRoute, private db: AngularFirestore, private authService: AuthService) {
      console.log(this.getCampaignData());

      /*
      this.route.params.subscribe(params => {
          this.campaign.campaignName =  params['campaignName'];
          this.campaign.campaignID = params['campaignID'];
           this.campaign.campaignNpo =  params['campaignNpo'];
          this.campaign.city = params['city'];
          this.campaign.startDate =  params['startDate'];
          this.campaign.endDate = params['endDate'];
          this.campaign.cText = params['cText'];
      });*/

   }

  ngOnInit() {
  }

  getCampaignData() {
    var id = this.campaign.campaignID.toString();
    var docRef = this.db.firestore.collection("Campaigns").doc(id);

    docRef.get().then(function(doc) {
        if (doc.exists) {
            console.log("Document data:", doc.data());
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
