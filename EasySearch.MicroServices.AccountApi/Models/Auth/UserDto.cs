namespace EasySearch.MicroServices.AccountApi.Models.Auth
{        
    // For everything we need of User  
    public class UserDto
    {
        public string ID { get; set; }
        public string Email { get; set; }
        public string Name { get; set; }
        public string? PhoneNumber { get; set; }
    }
}
