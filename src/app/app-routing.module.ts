import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutmeComponent } from './screens/client/aboutme/aboutme.component';
import { BlogComponent } from './screens/client/blog/blog.component';
import { ContactComponent } from './screens/client/contact/contact.component';
import { PrivacyComponent } from './screens/client/privacy/privacy.component';
import { WebComponent } from './screens/client/blog/web/web.component';
import { DijitalPazarlamaComponent } from './screens/client/blog/dijital-pazarlama/dijital-pazarlama.component';
import { IcerikEditorluguComponent } from './screens/client//blog/icerik-editorlugu/icerik-editorlugu.component';
import { SosyalMedyaComponent } from './screens/client//blog/sosyal-medya/sosyal-medya.component';
import { LoginComponent } from './screens/login/login.component';
import { HomepageComponent } from './screens/client/homepage/homepage.component';
import { PagenotfoundComponent } from './screens/client/pagenotfound/pagenotfound.component';
import { ReadblogComponent } from './screens/client/readblog/readblog.component';
import { AdminComponent } from './screens/admin/admin/admin.component';

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
  { path: '**', component: PagenotfoundComponent },
  { path: 'adm_panel', component: AdminComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
