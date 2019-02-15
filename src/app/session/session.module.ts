import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


import { SharedModule } from '../shared/shared.module';
import { SessionRoutes } from './session.routing';

import { SigninComponent } from './singin/signin.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SessionRoutes),
    SharedModule
  ],
  declarations: [
    SigninComponent
  ]
})
export class SessionModule { }
