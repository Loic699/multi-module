import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { SinupComponent } from './sinup/sinup.component';
import { RouterModule, Routes } from '@angular/router';


const routes:  Routes  = [
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SinupComponent },
];

@NgModule({
  declarations: [
    SigninComponent,
    SinupComponent,
  ],
  exports:[RouterModule],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class AuthModule { }
