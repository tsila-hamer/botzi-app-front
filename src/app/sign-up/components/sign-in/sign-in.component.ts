import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { AngularFireAuthModule, AngularFireAuth } from  'angularfire2/auth';
import * as firebase from 'firebase';
import { AuthService } from 'app/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  signUpHeader = "Log In";
  signUpType = "log in";

  constructor(public af: AngularFireAuth,private router: Router, private authService: AuthService) { }
  error = '';
  ngOnInit() {
  }

  onSubmitLogIn(formData){
    if(formData.valid) {
      console.log(formData.value);
      var email = formData.value.email;
      var password = formData.value.password;
      this.af.auth.signInWithEmailAndPassword(email, password)
      .then(
        (success) => {
        console.log(success);
        this.authService.login();
        this.router.navigate(['/'])
      }).catch(
        (err) => {
        console.log(err);
        this.error = err;
      })
    }
  }

}
