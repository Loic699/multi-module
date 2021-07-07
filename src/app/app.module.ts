import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule, RouterOutlet  } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthModule } from './pages/auth/auth.module';
import { SigninComponent } from  './pages/auth/signin/signin.component';
import { Routes } from '@angular/router';
import { ModuleModule } from './pages/module/module.module';
import { VideoModule } from './pages/video/video.module';
 
const routes:  Routes  = [
  { path: 'auth', loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule) },
  { path: 'module', loadChildren: () => import('./pages/module/module.module').then(m => m.ModuleModule) },
  { path: 'video', loadChildren: () => import('./pages/video/video.module').then(m => m.VideoModule) },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
   AuthModule,
   ModuleModule,
   VideoModule
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
