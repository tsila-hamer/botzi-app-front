import { Component, OnInit } from '@angular/core';
import { SignUpComponent } from '../sign-up/sign-up.component';

@Component({
  selector: 'app-sign-up-organization',
  templateUrl: './sign-up-organization.component.html',
  styleUrls: ['./sign-up-organization.component.css']
})
export class SignUpOrganizationComponent implements OnInit {
  signUpHeader = "sign up as organization";
  type = "organization";

  constructor() { }

  ngOnInit() {
  }

}
