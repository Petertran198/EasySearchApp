import { Component, Input } from '@angular/core';
import { MessageDto } from '../../models/dtos';

@Component({
  selector: 'message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {
  @Input() message: MessageDto | undefined;


}
