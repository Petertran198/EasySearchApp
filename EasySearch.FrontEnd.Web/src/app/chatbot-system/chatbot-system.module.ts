import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ChatbotSystemComponent } from './chatbot-system.component';
import { MessageComponent } from './components'

const components = [ChatbotSystemComponent, MessageComponent];
const modules = [CommonModule, FormsModule];

@NgModule({
  // Add your components, directives, and pipes here
  declarations: [...components],
  // Add required Angular modules here
  imports: [...modules],
  // Export components, directives, and pipes if needed
  exports: [...components], 
})
export class ChatBotSystemModule { }
