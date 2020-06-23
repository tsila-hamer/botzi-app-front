import * as firebase from 'firebase';
import { AuthService } from '../../auth.service';
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
  
  
  SubmitOrganizationForm(){
    this.authService.login();
  var userId = this.authService.getLoggedUserId();     
  this.db.collection('/Ngos').doc(userId).set({
    organizationName : this.authService.getLoggedUserName(),
    organizationNumber : (<HTMLInputElement>document.getElementById("organizationNumber")).value,
    oText : (document.getElementById("oText") as HTMLInputElement).value,
    location :  (document.getElementById("location") as HTMLInputElement).value,
    contactName : (document.getElementById("contactName") as HTMLInputElement).value,
    mail : (document.getElementById("mail") as HTMLInputElement).value
    }).then(res => {}, err => err);
  }
}