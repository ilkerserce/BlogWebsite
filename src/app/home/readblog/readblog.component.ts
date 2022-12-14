import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/postsdata/posts.service';

@Component({
  selector: 'app-readblog',
  templateUrl: './readblog.component.html',
  styleUrls: ['./readblog.component.scss']
})
export class ReadblogComponent implements OnInit {
  name: any;
  selectedPost: any;



  ngAfterContentChecked(): void {

    this.selectedPost = this.postsService.SelectedPost;

  }

  constructor(private route: ActivatedRoute, private postsService: PostsService) { }
  ngOnInit(): void {
    this.name = this.route.snapshot.paramMap.get('postname')
    this.postsService.getCurrentPost(this.name);
    
  }

}
