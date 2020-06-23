import { AuthService } from '../../../auth.service';
import { Campaign } from '../../../campaigns/models/Campaign';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-campaign-form',
  templateUrl: './campaign-form.component.html',
  styleUrls: ['./campaign-form.component.css']
})
export class CampaignFormComponent implements OnInit {
 campId:any = '12345432';

  constructor(public route: ActivatedRoute, private db: AngularFirestore, private authService: AuthService) { }

  ngOnInit() {
  }

  SubmitCampaignForm()
{
  var name = (document.getElementById("campaignName") as HTMLInputElement).value;
  var npo = (document.getElementById("campaignNpo") as HTMLInputElement).value;
  var cText = (document.getElementById("cText") as HTMLInputElement).value;
  var city = (document.getElementById("city") as HTMLInputElement).value;
  var startDate = (document.getElementById("startDate") as HTMLInputElement).value;
  var endDate = (document.getElementById("endDate") as HTMLInputElement).value;
  this.db.collection('/Campaigns').doc().set({
    campaignName : name,
      NpoName : npo,
      decription : cText,
      city : city,
      startDate : startDate,
      endDate : endDate
    }).then(res => {}, err => err);
  }

}
