import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent  {

  postCategory1 = 'http://localhost:3000/posts/?post_category=0';
  postCategory2 = 'http://localhost:3000/posts/?post_category=1';
  postCategory3 = 'http://localhost:3000/posts/?post_category=2';
  postCategory4 = 'http://localhost:3000/posts/?post_category=3';
  
  

  constructor() { }

}
