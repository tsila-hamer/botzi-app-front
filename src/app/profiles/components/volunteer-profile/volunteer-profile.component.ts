import { Component, OnInit } from '@angular/core';
import { SkillsComponent } from 'app/profiles/components/skills/skills.component';

@Component({
  selector: 'app-volunteer-profile',
  templateUrl: './volunteer-profile.component.html',
  styleUrls: ['./volunteer-profile.component.css']
})
export class VolunteerProfileComponent implements OnInit {
  volFullName: string;
  volNum: string;
  volEmail: string;
  volCity: string;
  volAvailable: string;
  volSkills: SkillsComponent;

  constructor() {

  }
  updateOrganization(){
    this.volFullName = (<HTMLInputElement>document.getElementById("volFullName")).value;
    this.volNum = (<HTMLInputElement>document.getElementById("volNum")).value;
    this.volEmail = (<HTMLInputElement>document.getElementById("volEmail")).value;
    this.volCity = (<HTMLInputElement>document.getElementById("volCity")).value;
    this.volAvailable = (<HTMLInputElement>document.getElementById("volAvailable")).value;
    //this.volSkills = (<HTMLInputElement>document.getElementById("volSkills")).value;


  }
  ngOnInit() {
  }

}

