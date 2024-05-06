using EasySearch.MicroServices.AccountApi.Models.Auth;
using EasySearch.MicroServices.AccountApi.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using static System.Net.Mime.MediaTypeNames;

namespace EasySearch.MicroServices.AccountApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly ILogger<AuthController> logger;
        private readonly IAuthRepository authRepository;

        public AuthController(ILogger<AuthController> logger, IAuthRepository authRepository)
        {
            this.logger = logger;
            this.authRepository = authRepository;
        }


        [HttpPost("Register")]
        public async Task<IActionResult> Register([FromBody] RegistrationRequestDto registrationRequestDto)
        {
            IActionResult r = null;
            try
            {
                var errorMessage = await this.authRepository.Register(registrationRequestDto);
                if (!errorMessage.IsNullOrEmpty())
                {
                    r = this.BadRequest(errorMessage);
                }
                else
                {
                    r = this.Ok(registrationRequestDto);
                }
            }
            catch (Exception ex)
            {
                this.logger.LogError(ex.Message);
                r = this.BadRequest(ex.Message);
            }
            return r;
        }


        [HttpPost("Login")]
        public async Task<IActionResult> Login([FromBody] LoginRequestDto loginRequestDto)
        {
            IActionResult r = null;
            try
            {
                LoginResponseDto loginResponseDto = await this.authRepository.Login(loginRequestDto);
                if(loginResponseDto.User == null)
                {
                    throw new ArgumentException("Username or password was incorrect");
                }
                r = Ok(loginResponseDto);
            }
            catch (Exception ex)
            {
                this.logger.LogError(ex.Message);
                r = this.BadRequest(ex.Message);
            }
            return r;
        }



        [HttpPost("AssignRole")]
        public async Task<IActionResult> AssignRole([FromBody] RegistrationRequestDto registrationRequestDto)
        {
            IActionResult r = null;
            try
            {
                var isRoleAssignedSuccessful= await this.authRepository.AssignRole(registrationRequestDto.Email,registrationRequestDto.RoleName.ToLower());
                if (!isRoleAssignedSuccessful)
                {
                    throw new ArgumentException("Error in Assigning Role");
                }
                r = Ok(isRoleAssignedSuccessful);
            }
            catch (Exception ex)
            {
                this.logger.LogError(ex.Message);
                r = this.BadRequest(ex.Message);
            }
            return r;
        }
    }
}
