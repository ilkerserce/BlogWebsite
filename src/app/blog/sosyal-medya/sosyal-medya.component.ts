import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sosyal-medya',
  templateUrl: './sosyal-medya.component.html',
  styleUrls: ['./sosyal-medya.component.scss']
})
export class SosyalMedyaComponent {
  socialMediaUrl = 'http://localhost:3000/posts/?post_category=social-media';
  socialMediaPosts: any;

  constructor(httpClient: HttpClient) {
    httpClient.get(this.socialMediaUrl).subscribe(response => {
      this.socialMediaPosts = response;
    }
    );
   }
}
