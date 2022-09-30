import { Component} from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  postUrl = 'http://localhost:3000/posts/?post_type=post';
  posts: any;

  constructor(private httpClient: HttpClient) { 
    
    httpClient.get(this.postUrl).subscribe(response => {
      console.log(this.posts);
      this.posts = response}
      )
  }

}
