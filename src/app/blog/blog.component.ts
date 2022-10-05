import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {

  posts: any;
  postsUrl = 'http://localhost:3000/posts/?post_type=post';

  constructor(private httpClient: HttpClient) {

    httpClient.get(this.postsUrl).subscribe(response => {
      this.posts = response;
    }
    )

  }
}
