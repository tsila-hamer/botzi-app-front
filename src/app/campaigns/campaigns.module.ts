import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//import { AuthGuard } from '../auth/auth.guard';

import { AvailableMatchComponent } from './components/available-match/available-match.component';
import { DisplayMatchesComponent } from './components/display-matches/display-matches.component';
import { CampaignPageComponent } from './components/campaign-page/campaign-page.component';
import { Campaign } from './models/Campaign';
import { VolCampaignsListComponent } from './components/vol-campaigns-list/vol-campaigns-list.component';

const routes: Routes = [
  {path: 'volCampaigns', component: VolCampaignsListComponent},
  {path: 'matchingCampaigns', component: DisplayMatchesComponent},
  { path: 'campaign/:campaignID', component: CampaignPageComponent },
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
    VolCampaignsListComponent
  ],
  exports: [
    AvailableMatchComponent,
    DisplayMatchesComponent,
    CampaignPageComponent,
    RouterModule,
    VolCampaignsListComponent  ]
})
export class CampaignsModule { }
