import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: './session/session.module#SessionModule'
  },
  {
    path: 'logout',
    redirectTo: 'login/logout'
  },
  //   path: '',
  //   component: AdminLayoutComponent,
  //   children: [
  //     {
  //       path: '',
  //       loadChildren: './landing/landing.module#LandingModule'
  //     }
  //   ]
  // },
  {
    path: '**',
    redirectTo: 'session/404'
  }
];


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
