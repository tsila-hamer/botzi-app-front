import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//import { AuthGuard } from '../auth/auth.guard';

import { CampaignFormComponent } from './components/campaign-form/campaign-form.component';
import { VolunteerFormComponent } from './components/volunteer-form/volunteer-form.component';

const routes: Routes = [
  {path: 'volunteerForm', component: VolunteerFormComponent},
  {path: 'campaignForm', component: CampaignFormComponent}
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
     VolunteerFormComponent
  ],
  exports: [
     CampaignFormComponent,
     VolunteerFormComponent
  ]
})
export class UserFormsModule { }
