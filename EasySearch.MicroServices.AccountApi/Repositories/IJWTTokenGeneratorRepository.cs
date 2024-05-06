using EasySearch.MicroServices.AccountApi.Models;

namespace EasySearch.MicroServices.AccountApi.Repositories
{
    public interface IJWTTokenGeneratorRepository
    {
        string GenerateToken(ApplicationUser applicationUser);

    }
}
