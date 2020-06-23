import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//import { AuthGuard } from '../auth/auth.guard';

import { CampaignFormComponent } from './components/campaign-form/campaign-form.component';
import { VolunteerFormComponent } from './components/volunteer-form/volunteer-form.component';
import { OrganizationFormComponent } from './components/organization-form/organization-form.component';

const routes: Routes = [
  {path: 'volunteerForm', component: VolunteerFormComponent},
  {path: 'campaignForm', component: CampaignFormComponent},
  {path: 'OrganizationForm', component: OrganizationFormComponent}

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
     CampaignFormComponent,
     VolunteerFormComponent,
     OrganizationFormComponent
  ],
  exports: [
     CampaignFormComponent,
     VolunteerFormComponent,
     OrganizationFormComponent
  ]
})
export class UserFormsModule { }
