// import { Injectable, Input, Output } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { getPopperClassPlacement } from '@ng-bootstrap/ng-bootstrap/util/positioning';

// @Injectable({
//   providedIn: 'root'
// })
// export class PostsService {

//   postsUrl = 'http://localhost:3000/posts/?post_type=post';
//   webUrl = 'http://localhost:3000/posts/?post_category=web';
//   contentUrl = 'http://localhost:3000/posts/?post_category=content';
//   socialMediaUrl = 'http://localhost:3000/posts/?post_category=social-media';
//   digitalAdsUrl = 'http://localhost:3000/posts/?post_category=digital-ads';


//   Posts: any;
//   webPosts: any;
//   contentPosts: any;
//   socialMediaPosts: any;
//   digitalAdsPosts: any;

//   // posts: any;
//   // webPosts: any;
//   // contentPosts: any;
//   // socialMediaPosts: any;
//   // digitalAdsPosts: any;


//   constructor(private httpClient: HttpClient) {

//     const getAllPosts = () => {
//       httpClient.get(this.postsUrl).subscribe(response => {
//         console.log(this.Posts);
//         this.Posts = response;
//       }
//       )
//     }
//     const getWebPosts = () => {
//       httpClient.get(this.webUrl).subscribe(response => {
//         console.log(this.webPosts);
//         this.webPosts = response;
//       }
//       )
//     }
//     const getContentPosts = () => {
//       httpClient.get(this.contentUrl).subscribe(response => {
//         console.log(this.contentPosts);
//         this.contentPosts = response;
//       }
//       )
//     }
//     const getSocialMediaPosts = () => {
//       httpClient.get(this.socialMediaUrl).subscribe(response => {
//         console.log(this.socialMediaPosts);
//         this.socialMediaPosts = response;
//       }
//       )
//     }
//     const getDigitalAdsPosts = () => {
//       httpClient.get(this.digitalAdsUrl).subscribe(response => {
//         console.log(this.digitalAdsPosts);
//         this.digitalAdsPosts = response;
//       }
//       )
//     }

//     getAllPosts();
//     getWebPosts();
//     getContentPosts();
//     getSocialMediaPosts();
//     getDigitalAdsPosts();

//     // httpClient.get(this.webUrl).subscribe(response => {
//     //   console.log(this.webPosts);
//     //   this.webPosts = response;
//     // }
//     // )
//     // httpClient.get(this.contentUrl).subscribe(response => {
//     //   console.log(this.contentPosts);
//     //   this.contentPosts = response;
//     // }
//     // )
//     // httpClient.get(this.socialMediaUrl).subscribe(response => {
//     //   console.log(this.socialMediaPosts);
//     //   this.socialMediaPosts = response
//     // }
//     // )
//     // httpClient.get(this.digitalAdsUrl).subscribe(response => {
//     //   console.log(this.digitalAdsPosts);
//     //   this.digitalAdsPosts = response
//     // }
//     // )
//   }
// }

