import * as firebase from 'firebase';
import { AuthService } from '../auth.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { AngularFirestore } from 'angularfire2/firestore';

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
  constructor(public route: ActivatedRoute, private db: AngularFirestore, private authService: AuthService) {
  }
  ngOnInit() {
  }
  
  SubmitVolunteerForm(){
    this.authService.login();
  var userId = this.authService.getLoggedUserId();  
  console.log("userId"+" "+userId+ " name " + this.authService.getLoggedUserName() );
   
  this.db.collection('/Volunteers').doc(userId).set({
      volunteerName : this.authService.getLoggedUserName(),
      volunteerId : this.authService.getLoggedUserId(),
      address : (document.getElementById("address") as HTMLInputElement).value,
      skills :  (document.getElementById("skills") as HTMLInputElement).value,
      phone_number : (document.getElementById("phone_number") as HTMLInputElement).value,
      //startTime : (document.getElementById("startTime") as HTMLInputElement).value,
      //endTime : (document.getElementById("endTime") as HTMLInputElement).value,
      startDate : (document.getElementById("sartDate") as HTMLInputElement).value,
      endDate : (document.getElementById("endDate") as HTMLInputElement).value
    }).then(res => {}, err => err);
  }

  

}
