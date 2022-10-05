import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { WebComponent } from './blog/web/web.component';
import { DijitalPazarlamaComponent } from './blog/dijital-pazarlama/dijital-pazarlama.component';
import { IcerikEditorluguComponent } from './blog/icerik-editorlugu/icerik-editorlugu.component';
import { SosyalMedyaComponent } from './blog/sosyal-medya/sosyal-medya.component';

export const routes: Routes = [
    {path: 'anasayfa', component: HomeComponent},
    {path: '', redirectTo: '/anasayfa', pathMatch: 'full'},
    {path: 'hakkimda', component: AboutmeComponent},    
    {path: 'blog', component: BlogComponent},    
    {path: 'web', component: WebComponent},
    {path: 'dijital-pazarlama', component: DijitalPazarlamaComponent},
    {path: 'icerik-editorlugu', component: IcerikEditorluguComponent},
    {path: 'sosyal-medya', component: SosyalMedyaComponent},
    {path: 'iletisim', component: ContactComponent},
    {path: 'gizlilik-politikasi', component: PrivacyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
