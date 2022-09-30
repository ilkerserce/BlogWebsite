import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { PrivacyComponent } from './privacy/privacy.component';

export const routes: Routes = [
    {path: 'anasayfa', component: HomeComponent},
    {path: '', redirectTo: '/anasayfa', pathMatch: 'full'},
    {path: 'hakkimda', component: AboutmeComponent},    
    {path: 'blog', component: BlogComponent},
    {path: 'iletisim', component: ContactComponent},
    {path: 'gizlilik-politikasi', component: PrivacyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
