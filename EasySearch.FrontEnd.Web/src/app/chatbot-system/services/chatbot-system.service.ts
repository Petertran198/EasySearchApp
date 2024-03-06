import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs'
import { HttpClient } from '@angular/common/http';
import { ChatGptDto, GeoLocation, MessageDto } from '../models/dtos';

@Injectable({
  providedIn: 'root'
})
export class ChatBotSystemService  {
    public subscriptions: { [property_name: string]: Subscription } = {};
    public allMessages: MessageDto[] = [];

    constructor(private httpClient: HttpClient) {
      this.allMessages = this.getMessageDtoArray();
      console.log(this.allMessages);
    }

    public addSubscription<T>(property_name: string, subscription: Subscription) {
      this.subscriptions[property_name] = subscription;
    }


    public cancelAllSubscriptions() {
      for (let property_name in this.subscriptions) {
        console.log(this.subscriptions[property_name]);
        this.subscriptions[property_name].unsubscribe();
        delete this.subscriptions[property_name];

      }

    }

    public getMessageDtoArray(): MessageDto[] {
      const geoLocation1 = new GeoLocation(37.7749, -122.4194);
      const geoLocation2 = new GeoLocation(40.7128, -74.0060);
      const geoLocation3 = new GeoLocation(51.5074, -0.1278);

      const chatGptDto1 = new ChatGptDto("Hello from location 1!", geoLocation1);
      const chatGptDto2 = new ChatGptDto("Greetings from location 2!", geoLocation2);
      const chatGptDto3 = new ChatGptDto("Hola from location 3!", geoLocation3);

      const messages: MessageDto[] = [
        new MessageDto( "sent",  chatGptDto1 ),
        new MessageDto("received", chatGptDto2),
        new MessageDto("sent", chatGptDto3)

      ];

      return messages;
    }







} 
