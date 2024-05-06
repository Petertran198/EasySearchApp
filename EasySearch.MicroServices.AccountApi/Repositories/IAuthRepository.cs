using EasySearch.MicroServices.AccountApi.Models.Auth;

namespace EasySearch.MicroServices.AccountApi.Repositories
{
    public interface IAuthRepository
    {
        Task<string?> Register(RegistrationRequestDto registrationRequestDto);
        Task<LoginResponseDto> Login(LoginRequestDto loginRequestDto);
        Task<bool> AssignRole(string email, string roleName);
    }
}
