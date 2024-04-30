import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TravelBlogSystemComponent } from 'src/app/travelblog-system/travelblog-system.component';
import { ChatbotSystemComponent } from 'src/app/chatbot-system/chatbot-system.component';
import { AccountSystemComponent } from 'src/app/account-system/account-system.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, 
  { path: 'home', component: ChatbotSystemComponent },
  { path: 'blog', component: TravelBlogSystemComponent },
  { path: 'account', component: AccountSystemComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
