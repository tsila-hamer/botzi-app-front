import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeSlidesComponent } from './components/home-slides/home-slides.component';
import { SlideComponent } from './components/slide/slide.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    HomeSlidesComponent,
    SlideComponent
  ],
  exports: [
      HomeSlidesComponent
  ]
})
export class HomeSlidesModule { }
