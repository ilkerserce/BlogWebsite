import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SignInData } from 'src/app/models/SignInData';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private readonly mockeduser = new SignInData('admin', 'test123');
  isAuthenticated = false;

  constructor(private router: Router) { }

  authenticate(signInData: SignInData): boolean {
    if (this.checkCredentials(signInData)) {
      this.isAuthenticated = true;
      this.router.navigate(['adm_panel']);
      return true;
    }
    this.isAuthenticated = false;
    return false;
  }

  private checkCredentials(signInData: SignInData): boolean {
    return this.checkUsername(
      signInData.getUsername()) && this.checkPassword(signInData.getPassword());
  }
  private checkUsername(username: string): boolean {
    return username === this.mockeduser.getUsername();
  }
  private checkPassword(password: string): boolean {
    return password === this.mockeduser.getPassword();
  }
}
