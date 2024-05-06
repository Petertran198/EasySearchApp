using EasySearch.MicroServices.AccountApi.Configurations;
using EasySearch.MicroServices.AccountApi.Data;
using EasySearch.MicroServices.AccountApi.Models;
using EasySearch.MicroServices.AccountApi.Repositories;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

//Configured dbcontext
builder.Services.AddDbContext<AppDbContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")); 
});

//Configured JWT Settings 
builder.Services.Configure<JWTOptions>(builder.Configuration.GetSection("ApiSettings:JWTOptions"));

// For registering  services
builder.Services.AddScoped<IAuthRepository, AuthRepository>();
builder.Services.AddScoped<IJWTTokenGeneratorRepository, JWTTokenGeneratorRepository>();



//Adding Identity
builder.Services.AddIdentity<ApplicationUser, IdentityRole>().AddEntityFrameworkStores<AppDbContext>().AddDefaultTokenProviders();


builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();



var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
// This order
app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
