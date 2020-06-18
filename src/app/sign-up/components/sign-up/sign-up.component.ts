import { Component, OnInit, Input } from '@angular/core';
import { AngularFireAuthModule, AngularFireAuth } from  'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";
//import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { moveIn } from 'app/router.animations';
declare var FB: any;

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  animations: [moveIn()],
  host: {'[@moveIn]': ''}
})

export class SignUpComponent implements OnInit {
  @Input() signUpType: string;
  @Input() signUpHeader: string;
  error: any;

  constructor(public af: AngularFireAuth,private router: Router) {
  /*
    this.af.auth.subscribe(auth => {
      if(auth) {
        this.router.navigateByUrl('/');
      }
    });
    */
  }


  ngOnInit() {

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

  submitLogin(){
        console.log("submit login to facebook");
        // FB.login();
        FB.login((response)=>
            {
              console.log('submitLogin',response);
              if (response.authResponse)
              {
                console.log(response);
                console.log(response.authResponse);
                this.router.navigate(['/']);
               }
               else
               {
               console.log('User login failed');
               this.error = response.error;
             }
          });

      }

}
