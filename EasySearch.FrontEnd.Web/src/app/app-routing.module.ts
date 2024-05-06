import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChatbotSystemComponent } from 'src/app/chatbot-system/chatbot-system.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ChatbotSystemComponent },
  {
    path: 'blog',
    loadChildren: () =>
      import('./travelblog-system/travelblog-system.module').then(
        (m) => m.TravelBlogSystemModule
      ),
  },
  {
    path: 'account',
    loadChildren: () =>
      import('./account-system/account-system.module').then(
        (m) => m.AccountSystemModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
