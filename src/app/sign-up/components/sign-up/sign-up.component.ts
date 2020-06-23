import { Component, OnInit, Input } from '@angular/core';
import { AngularFireAuthModule, AngularFireAuth } from  'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";
import { AngularFirestore } from 'angularfire2/firestore';

//import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2/auth';
import { Router } from '@angular/router';
//import { moveIn } from 'app/router.animations';
import * as firebase from 'firebase';
import { auth } from 'firebase/app';
import { AuthService } from '../../../auth.service';
declare var FB: any;

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  //animations: [moveIn()],
  //host: {'[@moveIn]': ''}
})

export class SignUpComponent implements OnInit {
  @Input() type: string;
  @Input() signUpHeader: string;
  error: any;
  isVol:boolean;

  constructor(public af: AngularFireAuth,private router: Router, private authService: AuthService, private db: AngularFirestore) {
  /*
    this.af.auth.subscribe(auth => {
      if(auth) {
        this.router.navigateByUrl('/');
      }
    });
    */
  }


  ngOnInit() {
 if (this.type === "volunteer" )
 this.isVol = true;
 else
 this.isVol = false;
    (window as any).fbAsyncInit = function() {
      FB.init({
        appId      : '2692356157754889',
        cookie     : true,
        xfbml      : true,
        version    : 'v3.1'
      });
      FB.AppEvents.logPageView();
    };

    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "https://connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));

  }

  account = {};

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

  onSubmitSignUp(formData) {
    if(formData.valid) {
      console.log(formData.value);
      var email = formData.value.email;
      var password = formData.value.password;
      var name = formData.value.name;

      this.authService.login();
      this.af.auth.createUserWithEmailAndPassword(email, password)
      .then(
        (success) => {
        success.updateProfile({displayName: name});
        console.log(success);

        var userId = success.uid;
        this.writeUserData(userId, name);
        //this.af.auth.signInWithEmailAndPassword(email, password)
      }).catch(
        (err) => {
        console.log(err);
        this.error = err;
      })
    }
  }

  writeUserData(userId, name) {
    console.log('Writing user ' + userId + ',' + name +','+this.type);
    /*
    firebase.database().ref('users/' + userId).set({
        userName: name,
        userType: this.type
    });*/
    this.db.collection('/users').doc(userId).set({
        userName: name,
        userType: this.type
    }).then(res => {}, err => err);
  }

}
