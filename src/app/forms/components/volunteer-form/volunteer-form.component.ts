import * as firebase from 'firebase';
import { AuthService } from '../../../auth.service';
import { Component, OnInit, Input } from '@angular/core';
import { Volunteer } from '../../../../app/campaigns/models/Volunteer';

import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { AngularFirestore } from 'angularfire2/firestore';
import {NgForm, FormControl} from '@angular/forms';
import { findLocaleData } from '@angular/common/src/i18n/locale_data_api';

declare var FB: any;
@Component({
  selector: 'app-volunteer-form',
  templateUrl: './volunteer-form.component.html',
  styleUrls: ['./volunteer-form.component.css']
})
export class VolunteerFormComponent implements OnInit {
  @Input() type: string;
  @Input() signUpHeader: string;
  error: any;
  volunteer: Volunteer;
  selectedDay: string = '';

  //event handler for the select element's change event
  selectChangeHandler (event: any) {
    //update the ui
    this.selectedDay = event.target.value;
  }  constructor(private _Activatedroute:ActivatedRoute
,    public route: ActivatedRoute, private db: AngularFirestore, private authService: AuthService) { }

isEdit:any;
editable:boolean ;
selectControl:FormControl = new FormControl();

  ngOnInit() {
    this.isEdit=this._Activatedroute.snapshot.paramMap.get("isEdit");
   
    if(this.isEdit==="true")
    {
      console.log("inIf");

      this.editable = true;
      this.fillData();
      (<HTMLInputElement>document.getElementById("d_phone_number")).value = this.volunteer.phone_number;


    }
    else{
      console.log("inElse");
      this.editable = false;
    }
  }
  fillData()
{
  var userId = this.authService.getLoggedUserId();
  var docRef = this.db.firestore.collection("Volunteers").doc(userId);
  var volunteerFromFirebase: Volunteer;
  console.log(userId);
  docRef.get().then((doc) =>
   {   if (doc.exists) {
          volunteerFromFirebase = {
            volunteerId:doc.data().volunteerId,
            volunteerName: doc.data().volunteerName,
            skills: doc.data().skills,
            address: doc.data().address,
            phone_number: doc.data().phone_number,
            free_time: doc.data().free_time };
            this.volunteer = volunteerFromFirebase;
            console.log(volunteerFromFirebase.address+" "+volunteerFromFirebase.phone_number+" "+volunteerFromFirebase.skills)
      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
      }
  }).catch(function(error) {
      console.log("Error getting document:", error);
  });

}
  submitVolunteerForm(formData){
    console.log(formData.value);
    this.authService.login();
    var e = document.getElementById("availability");
    //var strUser = e.options[e.selectedIndex].value;
    var userId = this.authService.getLoggedUserId();
    console.log("userId"+" "+userId+ " name " + this.authService.getLoggedUserName() );    
    var e = document.getElementById("free_time");
    if (userId) {
      this.db.collection('/Volunteers').doc(userId).set({
          volunteerName : this.authService.getLoggedUserName(),
          volunteerId : this.authService.getLoggedUserId(),
          address : formData.value.city,
          skills : (formData.value.skills+"").split(','),
          phone_number : formData.value.phone_number,
          //free_time : strUser

        }).then(res => {}, err => err);
      }
    else {
      console.log("no user is logged in");
    }
  }



}