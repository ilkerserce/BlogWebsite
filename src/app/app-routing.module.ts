import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutmeComponent } from './home/aboutme/aboutme.component';
import { BlogComponent } from './home/blog/blog.component';
import { ContactComponent } from './home/contact/contact.component';
import { PrivacyComponent } from './home/privacy/privacy.component';
import { WebComponent } from './home/blog/web/web.component';
import { DijitalPazarlamaComponent } from './home/blog/dijital-pazarlama/dijital-pazarlama.component';
import { IcerikEditorluguComponent } from './home//blog/icerik-editorlugu/icerik-editorlugu.component';
import { SosyalMedyaComponent } from './home//blog/sosyal-medya/sosyal-medya.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './admin/login/login.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { ReadblogComponent } from './home/readblog/readblog.component';

export const routes: Routes = [

  { path: 'anasayfa', component: HomepageComponent },
  { path: '', redirectTo: '/anasayfa', pathMatch: 'full' },
  { path: 'hakkimda', component: AboutmeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'web', component: WebComponent },
  { path: 'dijital-pazarlama', component: DijitalPazarlamaComponent },
  { path: 'icerik-editorlugu', component: IcerikEditorluguComponent },
  { path: 'sosyal-medya', component: SosyalMedyaComponent },
  { path: 'arsiv', component: ReadblogComponent },
  { path: 'arsiv/:postname', component: ReadblogComponent },
  { path: 'iletisim', component: ContactComponent },
  { path: 'gizlilik-politikasi', component: PrivacyComponent },
  { path: 'adm_login', component: LoginComponent },
  { path: 'adm_panel', component: AdminComponent },
  { path: 'adm_dashboard', component: AdminDashboardComponent },
  { path: '**', component: PagenotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
