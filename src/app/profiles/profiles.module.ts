import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//import { AuthGuard } from '../auth/auth.guard';

import { VolunteerProfileComponent } from './components/volunteer-profile/volunteer-profile.component';
import { OrganizationProfileComponent } from './components/organization-profile/organization-profile.component';
import { SkillsComponent } from './components/skills/skills.component';

const routes: Routes = [
  {path: 'profile/volunteer', component: VolunteerProfileComponent},
  {path: 'profile/organization', component: OrganizationProfileComponent}

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
     VolunteerProfileComponent,
     OrganizationProfileComponent,
     SkillsComponent
  ],
  exports: [
     VolunteerProfileComponent,
     OrganizationProfileComponent,
     SkillsComponent
  ]
})
export class ProfilesModule { }
