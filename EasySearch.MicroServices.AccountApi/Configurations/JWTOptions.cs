﻿namespace EasySearch.MicroServices.AccountApi.Configurations
{
    public class JWTOptions
    {
        public string Issuer { get; set; } = string.Empty;
        public string Audience { get; set; } = string.Empty;
        public string SecretKey { get; set; } = string.Empty;

    }
}
