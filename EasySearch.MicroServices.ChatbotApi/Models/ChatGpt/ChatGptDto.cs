namespace EasySearch.MicroServices.ChatbotApi.Models.ChatGpt
{

    public class GeoLocation
    {
        public double Latitude { get; set; }
        public double Longitude { get; set; }
    }

    public class ChatGptDto
    {
        public string Text { get; set; } = "";
        public GeoLocation? GeoLocation { get; set; } = null;
    }

}
