import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/sharedComponents/footer/footer.component';
import { NavbarComponent } from './components/sharedComponents/navbar/navbar.component';
import { ChatbotComponent } from './components/chatbotSystem/chatbot/chatbot.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, FooterComponent, ChatbotComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
