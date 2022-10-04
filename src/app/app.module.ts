import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { BlogComponent } from './blog/blog.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { SosyalMedyaComponent } from './blog/sosyal-medya/sosyal-medya.component';
import { WebComponent } from './blog/web/web.component';
import { IcerikEditorluguComponent } from './blog/icerik-editorlugu/icerik-editorlugu.component';
import { DijitalPazarlamaComponent } from './blog/dijital-pazarlama/dijital-pazarlama.component';

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
