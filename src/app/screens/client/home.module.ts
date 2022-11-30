import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ReadblogComponent } from './readblog/readblog.component';
import { SafeHtmlPipe } from 'src/app/pipes/safe-html.pipe';
import { SummaryPipe } from 'src/app/pipes/summary.pipe';
import { HomepageComponent } from './homepage/homepage.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ContactComponent } from './contact/contact.component';
import { AppModule } from 'src/app/app.module';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    PagenotfoundComponent,
    ReadblogComponent,
    SafeHtmlPipe,
    SummaryPipe,
    HomepageComponent,
    PrivacyComponent,
    FooterComponent,
    AboutmeComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    AppModule
  ]
})
export class HomeModule { }
