import { Component, OnInit } from '@angular/core';
import { LoginRequestDto, LoginResponseDto, RegistrationRequestDto } from './models/dtos';
import { AccountSystemService } from './services/account-system.service';
@Component({
  selector: 'travelblog-system',
  templateUrl: './account-system.component.html',
  styleUrls: ['./account-system.component.scss'],
})
export class AccountSystemComponent implements OnInit {
  public loginRequestDto = new LoginRequestDto();
  public registrationRequestDto = new RegistrationRequestDto();

  constructor(private accountSystemService: AccountSystemService) {
  }

  ngOnInit(): void {
  }

  register(registrationRequestDto: RegistrationRequestDto) {
    this.accountSystemService.register(registrationRequestDto).subscribe((x) => {
      console.log("registration was successful");
    });
  }

  login(loginRequestDto: LoginRequestDto) {
    this.accountSystemService.login(loginRequestDto).subscribe((loginResponseDto: LoginResponseDto) => {
      localStorage.setItem('authToken', loginResponseDto.token);
      console.log("logged in successful");
    });
  }
}
