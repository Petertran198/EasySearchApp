import { NgModule } from '@angular/core';
import { ChatGptDto } from './models/dtos';
import { CommonModule } from '@angular/common';
import { ChatbotComponent } from './chatbot-system.component';

const components = [ChatbotComponent];

@NgModule({
  declarations: [...components], // Add your components, directives, and pipes here
  imports: [CommonModule], // Add required Angular modules here
  exports: [...components], // Export components, directives, and pipes if needed
})
export class ChatBotSystemModule { }
