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
  submitCampaignForm(formData) {
    var campaignName = formData.value.campaignName;
    var campaignNpo = formData.value.campaignNpo;
    var organizationNumber = formData.value.organizationNumber;
    var cText = formData.value.cText;
    var city = formData.value.city;
    var startDate = formData.value.startDate;
    var endDate = formData.value.endDate;
    this.db.collection('/Campaigns').add({
        campaignName : name,
        NpoName : campaignNpo,
        nopId: organizationNumber,
        decription : cText,
        city : city,
        startDate : startDate,
        endDate : endDate
      }).then(res => {}, err => err);
    }

}
