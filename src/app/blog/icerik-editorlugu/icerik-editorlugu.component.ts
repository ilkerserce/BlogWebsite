import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-icerik-editorlugu',
  templateUrl: './icerik-editorlugu.component.html',
  styleUrls: ['./icerik-editorlugu.component.scss']
})
export class IcerikEditorluguComponent{
  
  contentUrl = 'http://localhost:3000/posts/?post_category=content';
  contentPosts: any;

  constructor(private httpClient: HttpClient) {

    httpClient.get(this.contentUrl).subscribe(response => {
      console.log(this.contentPosts);
      this.contentPosts = response
    }
    )
  }
  
}
