import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


import { SharedModule } from '../shared/shared.module';
import { LandingRoutes } from './landing.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(LandingRoutes),
    SharedModule
  ],
  declarations: [

  ]
})
export class LandingModule { }
