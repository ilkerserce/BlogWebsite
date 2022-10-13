import { Component } from '@angular/core';
import { PostsService } from '../../../services/postsdata/posts.service';

@Component({
  selector: 'app-icerik-editorlugu',
  templateUrl: './icerik-editorlugu.component.html',
  styleUrls: ['./icerik-editorlugu.component.scss'],
})
export class IcerikEditorluguComponent {
  contentUrl = this.postsService.contentUrl;
  contentPosts: any;

  ngAfterContentChecked(): void {
    this.contentPosts = this.postsService.contentPosts;
  }

  constructor(private postsService: PostsService) {}
}
