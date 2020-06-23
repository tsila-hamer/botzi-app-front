import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { AuthGuard } from '../auth/auth.guard';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignUpOrganizationComponent } from './components/sign-up-organization/sign-up-organization.component';
import { SignUpVolunteerComponent } from './components/sign-up-volunteer/sign-up-volunteer.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

const routes: Routes = [
  {path: 'login', component: SignInComponent},
  {path: 'sign-up',
  //component: SignUpComponent,
  //canActivate[AuthGuard],
  children: [
    {path: 'organization', component: SignUpOrganizationComponent},
    {path: 'volunteer', component: SignUpVolunteerComponent},
  ]}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    SignUpComponent,
    SignUpOrganizationComponent,
    SignUpVolunteerComponent,
    SignInComponent
  ],
  exports: [
    SignUpComponent,
    RouterModule
  ]
})
export class SignUpModule { }
