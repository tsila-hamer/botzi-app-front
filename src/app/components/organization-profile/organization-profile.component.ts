  
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organization-profile',
  templateUrl: './organization-profile.component.html',
  styleUrls: ['./organization-profile.component.css']
})
export class OrganizationProfileComponent implements OnInit {
  organizationName: string;
  organizationNumber: string;
  oText: string;
  location: string;
  contactName:string;
  phoneNumber: string;
  mail: string;
  wantAnUpdate=true;

  constructor() { }

  wantToUpdate(){
    this.wantAnUpdate=false;
  }

  ngOnInit() {
  }
  updateOrganization(){    

  this.organizationName = (<HTMLInputElement>document.getElementById("organizationName")).value;
  this.organizationNumber = (<HTMLInputElement>document.getElementById("organizationNumber")).value;
  this.oText = (<HTMLInputElement>document.getElementById("oText")).value;
  this.location = (<HTMLInputElement>document.getElementById("location")).value;
  this.contactName = (<HTMLInputElement>document.getElementById("contactName")).value;
  this.phoneNumber = (<HTMLInputElement>document.getElementById("phoneNumber")).value;
  this.mail = (<HTMLInputElement>document.getElementById("mail")).value;


  }
}