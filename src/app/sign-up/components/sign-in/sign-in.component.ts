import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { AngularFireAuthModule, AngularFireAuth } from  'angularfire2/auth';
import * as firebase from 'firebase';
import { AuthService } from '../../../auth.service';

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

  submitLoginFacebook() {
    console.log("submit login to facebook");
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      this.authService.login();
      this.router.navigate(['/']);
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
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
        this.router.navigate(['/']);
      }).catch(
        (err) => {
        console.log(err);
        this.error = err;
      })
    }
  }

}
