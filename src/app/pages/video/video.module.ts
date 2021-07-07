import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { VideoRoutingModule } from './video-routing.module';
import { VideoComponent } from './video.component';

const routes: Routes = [
  { path: 'video', component: VideoComponent }
];

@NgModule({
  declarations: [
    VideoComponent
  ],
  imports: [
    CommonModule,
    VideoRoutingModule,
    RouterModule.forChild(routes)
  ]
})
export class VideoModule { }
