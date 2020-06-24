import { Component, OnInit } from '@angular/core';
//import { SkillsComponent } from 'app/profiles/components/skills/skills.component';
import { AuthService } from '../../../auth.service';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import { Volunteer } from './volunteer';

@Component({
  selector: 'app-volunteer-profile',
  templateUrl: './volunteer-profile.component.html',
  styleUrls: ['./volunteer-profile.component.css']
})
export class VolunteerProfileComponent implements OnInit {
  volunteer: Volunteer;

constructor(private au:AuthService, public route: ActivatedRoute, private db: AngularFirestore, private authService: AuthService) {

  }
  ngOnInit(): void {
    this.getVolunteerData();
  }

  getVolunteerData() {
    var id = this.au.getLoggedUserId();
    var docRef = this.db.firestore.collection("Volunteers").doc(id);
    var volunteerFromFirebase: Volunteer;

    docRef.get().then((doc) =>
    {   if (doc.exists) {
      volunteerFromFirebase = {
        volunteerId:doc.data().volunteerId,
        volunteerName: doc.data().volunteerName,
        skills: doc.data().skills,
        address: doc.data().address,
        phone_number: doc.data().phone_number,
        free_time: doc.data().free_time
        
      };         
            this.volunteer = volunteerFromFirebase;

          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
  }  
  
}

