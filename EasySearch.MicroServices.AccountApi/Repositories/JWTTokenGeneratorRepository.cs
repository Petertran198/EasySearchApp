using EasySearch.MicroServices.AccountApi.Configurations;
using EasySearch.MicroServices.AccountApi.Models;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace EasySearch.MicroServices.AccountApi.Repositories
{
    public class JWTTokenGeneratorRepository : IJWTTokenGeneratorRepository
    {
        private readonly JWTOptions jWTOptions;

        public JWTTokenGeneratorRepository(IOptions<JWTOptions> jWTOptions) { 
            this.jWTOptions = jWTOptions.Value;
        }

        public string GenerateToken(ApplicationUser applicationUser)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(this.jWTOptions.SecretKey);

            var claimList = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Email, applicationUser.Email),
                new Claim(JwtRegisteredClaimNames.Sub, applicationUser.Id),
                new Claim(JwtRegisteredClaimNames.Name, applicationUser.UserName),
            };

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Audience = this.jWTOptions.Audience,
                Issuer = this.jWTOptions.Issuer,
                Subject = new ClaimsIdentity(claimList),
                Expires = DateTime.UtcNow.AddDays(10),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}
