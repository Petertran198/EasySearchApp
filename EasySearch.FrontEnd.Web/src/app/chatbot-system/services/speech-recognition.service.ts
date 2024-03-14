import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

declare var webkitSpeechRecognition: any;

@Injectable({
  providedIn: 'root',
})
export class SpeechRecognitionService {
  private speechToTextSubject = new BehaviorSubject<string>('');
  public speechToText: Observable<string> =
    this.speechToTextSubject.asObservable();

  public recognition = new webkitSpeechRecognition();
  public isStarted = false;

  constructor() {}

  public init() {
    this.recognition.continuous = true;
    this.recognition.interimResults = true;
    this.recognition.lang = 'en-US';

    this.recognition.addEventListener('result', (e: any) => {
      const transcript = Array.from(e.results)
        .map((result: any) => result[0])
        .map((result) => result.transcript)
        .join('');
      this.speechToTextSubject.next(transcript);
    });

    this.recognition.addEventListener('end', () => {});
  }

  // Handle On and off of speechToText
  public handleSpeechToText() {
    if (this.isStarted === false) {
      this.startSpeechToText();
    } else {
      this.stopSpeechToText();
    }
  }

  public startSpeechToText() {
    if (this.isStarted === false) {
      this.recognition.start();
      this.isStarted = true;
      console.log('Speech recognition started');
    }
    return true;
  }

  public stopSpeechToText() {
    if (this.isStarted === true) {
      this.recognition.stop();
      console.log(this.isStarted);
      this.isStarted = false;
      console.log('End speech recognition by user');
    }
    return false;
  }
}
