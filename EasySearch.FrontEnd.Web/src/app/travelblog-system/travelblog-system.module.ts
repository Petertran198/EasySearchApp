import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TravelBlogSystemRoutingModule } from './travel-blog-system.routing.module';

import { TravelBlogSystemComponent } from './travelblog-system.component';

const components = [TravelBlogSystemComponent];
const modules = [CommonModule, FormsModule, TravelBlogSystemRoutingModule];

@NgModule({
  // Add your components, directives, and pipes here
  declarations: [...components],
  // Add required Angular modules here
  imports: [...modules],
  // Export components, directives, and pipes if needed
  exports: [...components], 
})
export class TravelBlogSystemModule { }
