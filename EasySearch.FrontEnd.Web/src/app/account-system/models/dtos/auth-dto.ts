export class LoginRequestDto {
  //For everything we need for the user login request 
  public userName: string;
  public password: string;

  constructor(userName: string = "", password: string = "") {
    this.userName = userName;
    this.password = password;
  }
}



export class LoginResponseDto {
  //For everything we need for the user login response 
  public user: UserDto;
  public token: string;

  constructor(user: UserDto, token: string) {
    this.user = user;
    this.token = token;
  }
}



export class RegistrationRequestDto {
  //For everything we need for the user registration request 
  public email: string;
  public name: string;
  public phoneNumber: string;
  public password: string;
  public roleName?: string;

  constructor(email: string = "", name: string = "", phoneNumber: string = "", password: string = "", roleName?: string ) {
    this.email = email;
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.password = password;
    this.roleName = roleName;
  }
}


export class UserDto {
  // For everything we need of User  
  public id: string;
  public email: string;
  public name: string;
  public phoneNumber: string;

  constructor(id: string = "", email: string ="", name: string = "", phoneNumber: string = "") {
    this.id = id;
    this.email = email;
    this.name = name;
    this.phoneNumber = phoneNumber;
  }
}
