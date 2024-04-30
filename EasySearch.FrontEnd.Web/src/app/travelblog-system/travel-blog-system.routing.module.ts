// feature-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TravelBlogSystemComponent } from './travelblog-system.component';

const routes: Routes = [
  {
    path: 'blog',
    component: TravelBlogSystemComponent,
    children: [
      { path: '', redirectTo: '', pathMatch: 'full' },
      { path: '', component: TravelBlogSystemComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TravelBlogSystemRoutingModule { }
