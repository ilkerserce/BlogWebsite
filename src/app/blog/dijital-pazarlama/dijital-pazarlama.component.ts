import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dijital-pazarlama',
  templateUrl: './dijital-pazarlama.component.html',
  styleUrls: ['./dijital-pazarlama.component.scss']
})
export class DijitalPazarlamaComponent{

  postDigitalAdsUrl = 'http://localhost:3000/posts/?post_category=digital-ads';
  digitalAdsPosts: any;

  constructor(private httpClient: HttpClient) { 
    
    httpClient.get(this.postDigitalAdsUrl).subscribe(response => {
      this.digitalAdsPosts = response}
      )
  }

}
