import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.scss']
})
export class WebComponent {

  webUrl = 'http://localhost:3000/posts/?post_category=web';
  webPosts: any;

  constructor(httpClient: HttpClient) {
    httpClient.get(this.webUrl).subscribe(response => {
      this.webPosts = response;
    })
  }
}
