import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/postsdata/posts.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  posts: any;

  ngAfterContentChecked(): void {
    this.posts = this.postsService.Posts;
  }

  constructor(private postsService: PostsService) { }

  ngOnInit(): void { }
}

