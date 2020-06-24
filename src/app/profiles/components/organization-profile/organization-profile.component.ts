  
import { Component, OnInit } from '@angular/core';
import { Organization } from './organization';
import { AngularFirestore } from 'angularfire2/firestore';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../auth.service';

@Component({
  selector: 'app-organization-profile',
  templateUrl: './organization-profile.component.html',
  styleUrls: ['./organization-profile.component.css']
})
export class OrganizationProfileComponent implements OnInit {
  organization:Organization;
  

  constructor(private au:AuthService, public route: ActivatedRoute, private db: AngularFirestore, private authService: AuthService) { }

  ngOnInit() {
    this.getOrganizationData();
  }
  getOrganizationData() {
    var id = this.au.getLoggedUserId();
    var docRef = this.db.firestore.collection("Ngos").doc(id);
    var organizationFromFirebase: Organization;

    docRef.get().then((doc) =>
    {   if (doc.exists) {
      organizationFromFirebase = {
        organizationName:doc.data().organizationName,
        organizationNumber: doc.data().organizationNumber,
        oText: doc.data().oText,
        location: doc.data().location,
        contactName: doc.data().contactName,
        phoneNumber: doc.data().phoneNumber,
        logo: doc.data().logo
        
      };         
            this.organization = organizationFromFirebase;

          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
  }  
}