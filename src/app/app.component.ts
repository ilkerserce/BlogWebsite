import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BlogWebsite';

  // postUrl = 'http://localhost:3000/posts/?post_type=post';
  // posts: any;
  // static posts: any;

  // constructor(private httpClient: HttpClient) { 
    
  //   httpClient.get(this.postUrl).subscribe(response => {
  //     console.log(this.posts);
  //     this.posts = response}
  //     )
  // }
}
