import * as firebase from 'firebase';
import { AuthService } from 'app/auth.service';
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
  constructor(public route: ActivatedRoute, private db: AngularFirestore, private authService: AuthService) { }


  ngOnInit() {
  }

  SubmitVolunteerForm(){
    var userId = this.authService.getLoggedUserId();
    console.log("userId"+" "+userId);
    this.db.collection('/Volunteers').doc(userId).update({
      hodaya : "hodaya"
    }).then(res => {}, err => err);
  }



}
