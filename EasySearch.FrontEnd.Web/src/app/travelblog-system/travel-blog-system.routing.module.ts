// feature-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TravelBlogSystemComponent } from './travelblog-system.component';
import { BlogDetailPageComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: TravelBlogSystemComponent,
  },
  { path: 'blog-post/:id', component: BlogDetailPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TravelBlogSystemRoutingModule {}
