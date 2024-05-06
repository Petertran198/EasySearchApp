import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'travelblog-system',
  templateUrl: './travelblog-system.component.html',
  styleUrls: ['./travelblog-system.component.scss'],
})
export class TravelBlogSystemComponent implements OnInit {
  public message: string = '';

  constructor() {}

  ngOnInit(): void {}
}
