using EasySearch.MicroServices.ChatbotApi.Repositories;
using EasySearch.MicroServices.ChatbotApi.Configurations;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.Configure<OpenAiConfigurationKey>(builder.Configuration.GetSection("AppSettingOpenAI"));
builder.Services.AddScoped<IChatGptRepository, ChatGptRepository>();




builder.Services.AddControllers();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
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

//Enable Cors
app.UseCors(x => x
    .AllowAnyMethod()
    .AllowAnyHeader()
    .SetIsOriginAllowed(origin => true) // allow any origin
    .AllowCredentials()); //

app.UseAuthorization();

app.MapControllers();

app.Run();
