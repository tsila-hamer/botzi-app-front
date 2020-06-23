import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from  'angularfire2/auth';
import { AngularFirestore, AngularFirestoreModule } from 'angularfire2/firestore';
import * as firebase from 'firebase';

export const firebaseConfig = {
    apiKey: "AIzaSyBZJI-R8jesec4R4H8OyElRNYsc5IGpPQM",
    authDomain: "botzi-19152.firebaseapp.com",
    databaseURL: "https://botzi-19152.firebaseio.com",
    projectId: "botzi-19152",
    storageBucket: "botzi-19152.appspot.com",
    messagingSenderId: "121889252544",
    appId: "1:121889252544:web:a202c9bf93e5f439d53925",
    measurementId: "G-HWZR120LVX"
};

AngularFireModule.initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

import { NgModule } from '@angular/core';

import { HomeSlidesModule } from './home-slides/home-slides.module';
import { SignUpModule } from './sign-up/sign-up.module';
import { CampaignsModule } from './campaigns/campaigns.module';
import { UserFormsModule } from './forms/user-forms.module';
import { ProfilesModule } from './profiles/profiles.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';


import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { TeamComponent } from './components/team/team.component';
import { VolunteerAreaesComponent } from './volunteer-areaes/volunteer-areaes.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavMenuComponent,
    ContactUsComponent,
    TeamComponent,
    VolunteerAreaesComponent
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HomeSlidesModule,
    SignUpModule,
    CampaignsModule,
    UserFormsModule,
    RouterModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [
    AuthService, AuthGuard, AngularFirestoreModule
  ],
  bootstrap: [AppComponent],
  exports: []

})
export class AppModule { }
