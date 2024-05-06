namespace EasySearch.MicroServices.AccountApi.Models.Auth
{
    //For everything we need for the user login response 
    public class LoginResponseDto
    {
        public UserDto User { get; set; }
        public string Token { get; set; }
    }
}
