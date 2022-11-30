import { Component } from '@angular/core';
import { PostsService } from '../../../../services/postsdata/posts.service';

@Component({
  selector: 'app-dijital-pazarlama',
  templateUrl: './dijital-pazarlama.component.html',
  styleUrls: ['./dijital-pazarlama.component.scss'],
})
export class DijitalPazarlamaComponent {
  postDigitalAdsUrl = 'http://localhost:3000/posts/?post_category=digital-ads';
  digitalAdsPosts: any;

  ngAfterContentChecked(): void {
    this.digitalAdsPosts = this.postsService.digitalAdsPosts;
  }

  constructor(private postsService: PostsService) {}
}
