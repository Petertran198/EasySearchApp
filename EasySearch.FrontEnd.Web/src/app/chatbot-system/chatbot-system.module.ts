import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatbotComponent } from './chatbot-system.component';
import { MessageComponent } from './components'

const components = [ChatbotComponent, MessageComponent];


@NgModule({
  // Add your components, directives, and pipes here
  declarations: [...components],
  // Add required Angular modules here
  imports: [CommonModule],
  // Export components, directives, and pipes if needed
  exports: [...components], 
})
export class ChatBotSystemModule { }
