import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';


import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from '../login/login.component';

@NgModule({
  declarations: [
    AdminComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
  ]
})
export class AdminModule { }
