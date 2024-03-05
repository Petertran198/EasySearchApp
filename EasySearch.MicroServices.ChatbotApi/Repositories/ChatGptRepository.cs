using EasySearch.MicroServices.ChatbotApi.Configurations;
using Microsoft.Extensions.Options;
using OpenAI_API.Completions;
using OpenAI_API;
using static System.Runtime.InteropServices.JavaScript.JSType;
using System.Xml.Linq;
using EasySearch.MicroServices.ChatbotApi.Models.ChatGpt;

namespace EasySearch.MicroServices.ChatbotApi.Repositories
{
    public class ChatGptRepository : IChatGptRepository
    {
        private readonly string _openAiAPIKey;
        public ChatGptRepository(IOptions<OpenAiConfigurationKey> openAiConfigurationKey)
        {
            _openAiAPIKey = openAiConfigurationKey.Value.Key;
        }


        public async Task<string> getChatGptResult(string text)
        {
            var openAIKey = new OpenAI_API.OpenAIAPI(_openAiAPIKey);
            CompletionRequest completionRequest = new CompletionRequest();
            completionRequest.Prompt = text;
            completionRequest.Model = "gpt-3.5-turbo-instruct";
            completionRequest.MaxTokens = 100;
            completionRequest.Temperature = 0.2;


            var apiResult = await openAIKey.Completions.CreateCompletionAsync(completionRequest);
            var answer = apiResult.Completions[0].Text;
            return answer;
        }


        public async Task<string> getChatGptCustomizedResult(ChatGptDto chatGptDto)
        {
            if(chatGptDto.Text == null){ throw new ArgumentNullException("chatGptDto: Text cannot be null."); }

            var openAIKey = new OpenAI_API.OpenAIAPI(_openAiAPIKey);
            var chat = openAIKey.Chat.CreateConversation();
            var promptMessage = "You are answering questions for travelers with visual impairments. Try to provide simple and concise answers.";

            if (chatGptDto.GeoLocation != null)
            {
                promptMessage += $" Give answers related to Latitude: {chatGptDto.GeoLocation.Latitude} and Longitude: {chatGptDto.GeoLocation.Longitude}. ";
            }

            chat.AppendSystemMessage(promptMessage);
            chat.AppendUserInput(chatGptDto.Text);

            var response = await chat.GetResponseFromChatbotAsync();
            return response;
        }
    }
}
