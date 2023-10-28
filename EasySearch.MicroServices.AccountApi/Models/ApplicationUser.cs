using Microsoft.AspNetCore.Identity;

namespace EasySearch.MicroServices.AccountApi.Models
{
    public class ApplicationUser : IdentityUser
    {
        //Additional properties added to identity extend default IdentityUser
        public string Name { get; set; }
       
    }
}
