import * as firebase from 'firebase';

export class AuthService {
  loggedIn = false;

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
}
