import { AuthService } from './../../../auth.service';
import { BackendCallsService } from '../../../backend-calls.service'
import { Campaign } from '../../../campaigns/models/Campaign';
import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase';
@Component({
  selector: 'app-display-matches',
  templateUrl: './display-matches.component.html',
  styleUrls: ['./display-matches.component.css']
})
export class DisplayMatchesComponent implements OnInit {

  @Input() appliedAlready: boolean;
  // public campaignsList: Campaign[] = [];
  public campaignsList: string[] = [];

  constructor(private auh:AuthService, private db: AngularFirestore, private backendcall:BackendCallsService) {
    if (!this.appliedAlready)
    {
      //this.campaignsList = 
      this.backendcall.getMatches(this.auh.getLoggedUserId()).subscribe(
        data=>
        {
          this.campaignsList = data.body ;
        }
      );
    }
  }

  ngOnInit() {
    //load matching list from fire-base
  }


}
