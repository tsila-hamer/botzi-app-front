import * as firebase from 'firebase';
import { AuthService } from 'app/auth.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { AngularFirestore } from 'angularfire2/firestore';


@Component({
  selector: 'app-organization-form',
  templateUrl: './organization-form.component.html',
  styleUrls: ['./organization-form.component.css']
})
export class OrganizationFormComponent implements OnInit {
  constructor(public route: ActivatedRoute, private db: AngularFirestore, private authService: AuthService) {
  }
  ngOnInit() {
  }


  SubmitOrganizationForm(formData){
    this.authService.login();
    var userId = this.authService.getLoggedUserId();

    this.db.collection('/Ngos').doc(userId).set({
      organizationName : this.authService.getLoggedUserName(),
      organizationNumber : formData.value.organizationNumber,
      oText : formData.value.oText,
      location :  formData.value.location,
      contactName : formData.value.contactName,
      mail : formData.value.mail
      }).then(res => {}, err => err);
    }
}
