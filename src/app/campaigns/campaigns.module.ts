import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//import { AuthGuard } from '../auth/auth.guard';

import { AvailableMatchComponent } from './components/available-match/available-match.component';
import { DisplayMatchesComponent } from './components/display-matches/display-matches.component';
import { CampaignPageComponent } from './components/campaign-page/campaign-page.component';
import { CampaignFormComponent } from './components/campaign-form/campaign-form.component';
import { Campaign } from './models/Campaign';

const routes: Routes = [
  {path: 'matchingCampaigns', component: DisplayMatchesComponent},
  { path: 'campaignPage/:campaignName/:campaignID/:campaignNpo/:startDate/:endDate/:city/:cText', component: CampaignPageComponent },
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
    AvailableMatchComponent,
    DisplayMatchesComponent,
    CampaignPageComponent,
    CampaignFormComponent
  ],
  exports: [
    AvailableMatchComponent,
    DisplayMatchesComponent,
    CampaignPageComponent,
    RouterModule,
    CampaignFormComponent
  ]
})
export class CampaignsModule { }
