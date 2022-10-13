import { Component } from '@angular/core';
import { PostsService } from '../services/postsdata/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  postsUrl = this.postsService.postsUrl;
  posts: any;

  ngAfterContentChecked(): void {
    this.posts = this.postsService.Posts;
  }

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {}
}
