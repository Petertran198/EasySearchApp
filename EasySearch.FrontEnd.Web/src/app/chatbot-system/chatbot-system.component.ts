import { Component, OnInit } from '@angular/core';
import { ChatBotSystemService } from './services/chatbot-system.service';
import { SpeechRecognitionService } from './services/speech-recognition.service';

@Component({
  selector: 'chatbot-system',
  templateUrl: './chatbot-system.component.html',
  styleUrls: ['./chatbot-system.component.scss'],
})
export class ChatbotComponent implements OnInit {
  public message: string = '';

  constructor(
    public chatbotService: ChatBotSystemService,
    public speechRecognitionService: SpeechRecognitionService
  ) {
    this.speechRecognitionService.init();
  }

  ngOnInit(): void {
    this.speechRecognitionService.speechToText.subscribe(
      (speechToText: string) => {
        this.message = speechToText;
      }
    );
  }

  sendMessage() {
    this.chatbotService.sendMessage('sent', this.message);
    this.message = '';
  }
}
