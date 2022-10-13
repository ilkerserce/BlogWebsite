import { Component } from '@angular/core';
import { PostsService } from '../../services/postsdata/posts.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {
  posts: any;

  ngAfterContentChecked(): void {
    this.posts = this.postsService.Posts;
  }

  constructor(private postsService: PostsService) {}
}
