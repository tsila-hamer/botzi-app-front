import * as firebase from 'firebase';
import { Observable } from 'rxjs';


export class AuthService {
  loggedIn = false;
  userDetails;
  currentUser;

  constructor() {

  }

  getLoggedUserName() {
    this.currentUser = firebase.auth().currentUser;
    if (this.currentUser && this.currentUser.displayName) {
      return this.currentUser.displayName;
    } else {
      return '';
    }
  }


  isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            this.userDetails = user;
          } else {
          console.log('No user is logged in');
            this.userDetails = null;
          }
        });
      }
    );
    return promise;
  }


  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }

  getLoggedUserId() {
    this.currentUser = firebase.auth().currentUser;
    if (this.currentUser && this.currentUser.uid) {
      return this.currentUser.uid;
    } else {
      return '';
    }
  }

  isLoggedIn() {
    console.log(firebase.auth().currentUser);
    if (firebase.auth().currentUser) {
      return true;
    } else {
      return false;
    }
  }

}
