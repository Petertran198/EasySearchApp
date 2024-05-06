namespace EasySearch.MicroServices.AccountApi.Models.Auth
{
    //For everything we need for the user registration request 
    public class RegistrationRequestDto
    {
        public string Email { get; set; }
        public string Name { get; set; }
        public string PhoneNumber { get; set; }
        public string Password { get; set; }
        public string? RoleName { get; set; }
    }
}
