import { Component, OnInit } from '@angular/core';
import { SignUpComponent } from '../sign-up/sign-up.component';

@Component({
  selector: 'app-sign-up-volunteer',
  templateUrl: './sign-up-volunteer.component.html',
  styleUrls: ['./sign-up-volunteer.component.css']
})
export class SignUpVolunteerComponent implements OnInit {
  signUpHeader = "sign up as volunteer";
  type = "volunteer";

  constructor() { }

  ngOnInit() {
  }

}
