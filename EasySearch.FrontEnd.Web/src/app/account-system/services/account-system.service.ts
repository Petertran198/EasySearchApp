import { Injectable } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppConfigUrl } from 'src/app/shared/configurations/api-url-config';
import { LoginRequestDto, RegistrationRequestDto } from '../models/dtos/auth-dto';

@Injectable({
  providedIn: 'root',
})
export class AccountSystemService {
  public subscriptions: { [property_name: string]: Subscription } = {};
  

  constructor(private httpClient: HttpClient) {

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

  public register(registrationRequestDto: RegistrationRequestDto) {
    var url = AppConfigUrl.AccountSystemUrl + 'api/Auth/Register';
    this.httpClient.post(url, registrationRequestDto).subscribe();

  }

  public login(loginRequestDto: LoginRequestDto) {
    var url = AppConfigUrl.AccountSystemUrl + 'api/Auth/Login';
    this.httpClient.post(url, loginRequestDto).subscribe();

  }

  public assignRole(registrationRequestDto: RegistrationRequestDto) {
    var url = AppConfigUrl.AccountSystemUrl + 'api/Auth/AssignRole';
    this.httpClient.post(url, registrationRequestDto).subscribe();

  }
  
  
}
