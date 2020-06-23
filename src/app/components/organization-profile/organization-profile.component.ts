  
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organization-profile',
  templateUrl: './organization-profile.component.html',
  styleUrls: ['./organization-profile.component.css']
})
export class OrganizationProfileComponent implements OnInit {
  orgName: string;
  orgAddres: string;
  orgNum: string;
  orgEmail: string;
  
  constructor() { }

  ngOnInit() {
  }

}