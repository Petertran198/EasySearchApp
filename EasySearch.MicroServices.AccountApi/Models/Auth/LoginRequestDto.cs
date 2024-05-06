namespace EasySearch.MicroServices.AccountApi.Models.Auth
{
    //For everything we need for the user login request 
    public class LoginRequestDto
    {
        public string UserName { get; set; }
        public string Password { get; set; }
    }
}
