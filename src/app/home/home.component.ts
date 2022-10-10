import { Component } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  postsUrl = this.postsService.postsUrl;
  posts: any;

  ngAfterViewChecked(): void {
    this.posts = this.postsService.Posts;
    console.log('Burası homeComponent.ts');
    console.log(this.posts);
    console.log('Burası homeComponent.ts x2');
    console.log(this.postsService.Posts);
  }

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {}
}
