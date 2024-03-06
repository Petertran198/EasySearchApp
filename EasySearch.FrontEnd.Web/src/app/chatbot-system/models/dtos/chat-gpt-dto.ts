export class GeoLocation {
  public latitude: number;
  public longitude: number;

  constructor(latitude: number, longitude: number) {
    this.latitude = latitude;
    this.longitude = longitude;
  }
}

export class ChatGptDto {
  text: string = '';
  geoLocation: GeoLocation | null = null;

  constructor(text: string, geoLocation: GeoLocation | null) {
    this.text = text;
    this.geoLocation = geoLocation;
  }
}




export class MessageDto {
  type: string = '';
  chatInfo: ChatGptDto | undefined;

  constructor(type: string, chatInfo: ChatGptDto | undefined) {
    this.type = type;
    this.chatInfo = chatInfo;
  }
}
