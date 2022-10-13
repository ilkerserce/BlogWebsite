import { Component } from '@angular/core';
import { PostsService } from '../../../services/postsdata/posts.service';

@Component({
  selector: 'app-sosyal-medya',
  templateUrl: './sosyal-medya.component.html',
  styleUrls: ['./sosyal-medya.component.scss'],
})
export class SosyalMedyaComponent {
  socialMediaPosts: any;

  ngAfterContentChecked(): void {
    this.socialMediaPosts = this.postsService.socialMediaPosts;
  }

  constructor(private postsService: PostsService) {}
}
