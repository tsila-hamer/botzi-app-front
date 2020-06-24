import * as firebase from 'firebase';
import { AuthService } from 'app/auth.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { AngularFirestore } from 'angularfire2/firestore';
import {NgForm} from '@angular/forms';

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
  constructor(public route: ActivatedRoute, private db: AngularFirestore, private authService: AuthService) { }



  ngOnInit() {
  }

  submitVolunteerForm(formData){
    console.log(formData.value);
    this.authService.login();
    var userId = this.authService.getLoggedUserId();
    console.log("userId"+" "+userId+ " name " + this.authService.getLoggedUserName() );

    if (userId) {
      this.db.collection('/Volunteers').doc(userId).set({
          volunteerName : this.authService.getLoggedUserName(),
          volunteerId : this.authService.getLoggedUserId(),
          address : formData.value.address,
          skills :  formData.value.skills,
          phone_number : formData.value.phone_number,
          //startTime : formData.value.startTime,
          //endTime : formData.value.endTime,
          startDate : formData.value.startDate,
          endDate : formData.value.endDate
        }).then(res => {}, err => err);
      }
    else {
      console.log("no user is logged in");
    }
  }



}
