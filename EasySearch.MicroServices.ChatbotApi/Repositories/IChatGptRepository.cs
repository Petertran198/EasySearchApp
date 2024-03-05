using EasySearch.MicroServices.ChatbotApi.Models.ChatGpt;

namespace EasySearch.MicroServices.ChatbotApi.Repositories
{
    public interface IChatGptRepository
    {
        Task<string> getChatGptResult(string text);
        Task<string> getChatGptCustomizedResult(ChatGptDto chatGptDto);

    }
}
