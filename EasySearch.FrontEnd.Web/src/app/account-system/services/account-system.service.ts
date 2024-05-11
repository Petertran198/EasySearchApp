import { Injectable } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppConfigUrl } from 'src/app/shared/configurations/api-url-config';
import {
  LoginRequestDto,
  LoginResponseDto,
  RegistrationRequestDto,
} from '../models/dtos/auth-dto';

@Injectable({
  providedIn: 'root',
})
export class AccountSystemService {
  public subscriptions: { [property_name: string]: Subscription } = {};

  constructor(private httpClient: HttpClient) {}


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

  //, { responseType: 'text'}
  public register(registrationRequestDto: RegistrationRequestDto): Observable<string | null> {
    var url = AppConfigUrl.AccountSystemUrl + 'api/Auth/Register';
    // return this.httpClient.post(url, registrationRequestDto);
    return this.httpClient.post<string | null>(url, registrationRequestDto);
  }

  public login(loginRequestDto: LoginRequestDto): Observable<LoginResponseDto> {
    var url = AppConfigUrl.AccountSystemUrl + 'api/Auth/Login';
    return this.httpClient.post<LoginResponseDto>(url, loginRequestDto);
  }

  public assignRole(
    registrationRequestDto: RegistrationRequestDto
  ): Observable<boolean> {
    var url = AppConfigUrl.AccountSystemUrl + 'api/Auth/AssignRole';
    return this.httpClient.post<boolean>(url, registrationRequestDto);
  }


}
