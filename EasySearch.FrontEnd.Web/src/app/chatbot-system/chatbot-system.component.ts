import { Component, OnInit } from '@angular/core';
import { ChatBotSystemService } from './services/chatbot-system.service';

@Component({
  selector: 'chatbot-system',
  templateUrl: './chatbot-system.component.html',
  styleUrls: ['./chatbot-system.component.scss']
})
export class ChatbotComponent implements OnInit {

    constructor(public chatbotService: ChatBotSystemService) {
    }

    ngOnInit(): void {
    }

}
