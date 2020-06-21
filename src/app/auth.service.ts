import * as firebase from 'firebase';

export class AuthService {
  loggedIn = false;
  currentUser;

  isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            console.log(user);
            return user;
          } else {
          console.log('No user is logged in');
            return {};
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

  getLoggedUserName() {
    this.currentUser = firebase.auth().currentUser;
    if (this.currentUser && this.currentUser.displayName) {
      return this.currentUser.displayName;
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
