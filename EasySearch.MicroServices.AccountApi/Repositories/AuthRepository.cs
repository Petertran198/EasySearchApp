using EasySearch.MicroServices.AccountApi.Data;
using EasySearch.MicroServices.AccountApi.Models;
using EasySearch.MicroServices.AccountApi.Models.Auth;
using Microsoft.AspNetCore.Identity;

namespace EasySearch.MicroServices.AccountApi.Repositories
{
    public class AuthRepository : IAuthRepository
    {
        private readonly AppDbContext appDbContext;
        private readonly UserManager<ApplicationUser> userManager;
        private readonly RoleManager<IdentityRole> roleManager;
        private readonly IJWTTokenGeneratorRepository jwtTokenGeneratorRepository;
        public AuthRepository(AppDbContext appDbContext, UserManager<ApplicationUser> userManager, RoleManager<IdentityRole> roleManager, IJWTTokenGeneratorRepository jwtTokenGeneratorRepository) {
            this.appDbContext = appDbContext;
            this.userManager = userManager;
            this.roleManager = roleManager;
            this.jwtTokenGeneratorRepository = jwtTokenGeneratorRepository;
        }


        public async Task<string?> Register(RegistrationRequestDto registrationRequestDto)
        {
            ApplicationUser user = new ApplicationUser()
            {
                UserName = registrationRequestDto.Email,
                Email = registrationRequestDto.Email,
                Name = registrationRequestDto.Name,
                NormalizedEmail = registrationRequestDto.Email.ToUpper(),
                PhoneNumber = registrationRequestDto.PhoneNumber
            };
            
            try
            {
                var result = await this.userManager.CreateAsync(user, registrationRequestDto.Password);
                if (result.Succeeded)
                {
                    return "";
                } 
                else
                {
                    return result.Errors.FirstOrDefault()?.Description;
                }
            }
            catch(Exception ex) {
                return ex.Message;
            }

        }



        public async Task<LoginResponseDto> Login(LoginRequestDto loginRequestDto)
        {
            var user = this.appDbContext.ApplicationUsers.FirstOrDefault(u => u.UserName.ToLower() == loginRequestDto.UserName.ToLower());

            bool isValid = await this.userManager.CheckPasswordAsync(user, loginRequestDto.Password);
            if (user == null || isValid == false)
            {
                return new LoginResponseDto() { User = null, Token = "" };
            }

            UserDto userDto = new UserDto()
            {
                Email = user.Email,
                ID = user.Id,
                Name = user.Name,
                PhoneNumber = user.PhoneNumber
            };

            // If User was found generate a token
            var token = this.jwtTokenGeneratorRepository.GenerateToken(user);

            LoginResponseDto loginResponseDto = new LoginResponseDto()
            {
                User = userDto,
                Token = token
            };
            return loginResponseDto;

        }


        public async Task<bool> AssignRole(string email, string roleName)
        {
            var user = this.appDbContext.ApplicationUsers.FirstOrDefault(u => u.Email.ToLower() == email.ToLower());
            if(user != null){
                if (!this.roleManager.RoleExistsAsync(roleName).GetAwaiter().GetResult())
                {
                    // Create role if it does not exist
                    this.roleManager.CreateAsync(new IdentityRole(roleName)).GetAwaiter().GetResult();
                }
                await this.userManager.AddToRoleAsync(user, roleName);
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}
