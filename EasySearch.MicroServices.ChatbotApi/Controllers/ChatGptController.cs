using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using EasySearch.MicroServices.ChatbotApi.Repositories;
using Microsoft.Extensions.Logging;
using EasySearch.MicroServices.ChatbotApi.Models.ChatGpt;

namespace EasySearch.MicroServices.ChatbotApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ChatGptController : ControllerBase
    {
        private readonly ILogger<ChatGptController> logger;
        private readonly IChatGptRepository chatGptRepository;

        public ChatGptController(ILogger<ChatGptController> logger, IChatGptRepository chatGptRepository)
        {
            this.logger = logger;
            this.chatGptRepository = chatGptRepository;
        }

        [HttpPost]
        [Route("PostToChatGPT")]
        public async Task<IActionResult> PostToChatGPT(string text)
        {
            IActionResult r = null;
            try
            {
                var answer = await this.chatGptRepository.getChatGptResult(text);
                r =  Ok(answer);
            }
            catch (Exception ex)
            {
                this.logger.LogError(ex.Message);
                r = this.BadRequest(ex.Message);            
            }
            return r;
        }

        [HttpPost]
        [Route("PostToCustomChatGPT")]
        public async Task<IActionResult> PostToCustomChatGPT([FromBody] ChatGptDto chatGptDto)
        {
            IActionResult r = null;
            try
            {
                var answer = await this.chatGptRepository.getChatGptCustomizedResult(chatGptDto);
                r = Ok(answer);
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
