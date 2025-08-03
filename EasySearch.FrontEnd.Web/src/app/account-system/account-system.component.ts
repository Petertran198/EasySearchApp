import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  LoginRequestDto,
  LoginResponseDto,
  RegistrationRequestDto,
} from './models/dtos';
import { AccountSystemService } from './services/account-system.service';
import { Router } from '@angular/router';

@Component({
  selector: 'travelblog-system',
  templateUrl: './account-system.component.html',
  styleUrls: ['./account-system.component.scss'],
})
export class AccountSystemComponent implements OnInit, OnDestroy {
  public loginRequestDto = new LoginRequestDto();
  public registrationRequestDto = new RegistrationRequestDto();
  public loginError = '';

  constructor(
    private accountSystemService: AccountSystemService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  register(registrationRequestDto: RegistrationRequestDto) {
    this.accountSystemService
      .register(registrationRequestDto)
      .subscribe((x) => {
        console.log('registration was successful');
      });
  }

  login(loginRequestDto: LoginRequestDto) {
    this.accountSystemService.login(loginRequestDto).subscribe(
      (loginResponseDto: LoginResponseDto) => {
        localStorage.setItem('authToken', loginResponseDto.token);
        this.router.navigate(['/blog']);
      },
      (error) => {
        this.loginError = error.error;
      }
    );
  }
}
