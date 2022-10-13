import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './home/navbar/navbar.component';
import { BlogComponent } from './home/blog/blog.component';
import { AboutmeComponent } from './home/aboutme/aboutme.component';
import { ContactComponent } from './home/contact/contact.component';
import { FooterComponent } from './home/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PrivacyComponent } from './home/privacy/privacy.component';
import { SosyalMedyaComponent } from './home/blog/sosyal-medya/sosyal-medya.component'
import { WebComponent } from './home/blog/web/web.component';
import { IcerikEditorluguComponent } from './home/blog/icerik-editorlugu/icerik-editorlugu.component';
import { DijitalPazarlamaComponent } from './home/blog/dijital-pazarlama/dijital-pazarlama.component';
import { ReadblogComponent } from './home/readblog/readblog.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './admin/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BlogComponent,
    AboutmeComponent,
    ContactComponent,
    FooterComponent,
    HomeComponent,
    PrivacyComponent,
    SosyalMedyaComponent,
    WebComponent,
    IcerikEditorluguComponent,
    DijitalPazarlamaComponent,
    ReadblogComponent,
    AdminComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
