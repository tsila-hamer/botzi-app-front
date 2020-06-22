import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'app/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import { AngularFireAuthModule, AngularFireAuth } from  'angularfire2/auth';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  userDetails;
  user: firebase.User;

  constructor(private authService: AuthService, private router: Router, private afAuth: AngularFireAuth) {
     this.afAuth.authState.subscribe(user => this.user = user);
   }

  ngOnInit() {

  }


  onLogin() {
    this.authService.login();
    console.log('navigating');
    this.router.navigate(['/login']);
  }

  onLogout() {
    this.authService.logout();
  }

}
