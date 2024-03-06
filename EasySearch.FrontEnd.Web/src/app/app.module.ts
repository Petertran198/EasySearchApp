import { HttpClientModule, HttpClient } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ChatBotSystemModule } from './chatbot-system/chatbot-system.module';
import { FooterComponent } from './shared/sharedComponents/footer/footer.component';
import { NavbarComponent } from './shared/sharedComponents/navbar/navbar.component';


const components = [AppComponent, NavbarComponent, FooterComponent];



@NgModule({
  declarations: [...components],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,ChatBotSystemModule],
  providers: [HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
