import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  // onSubmit(signInForm: NgForm) {
  //   console.log(signInForm.value);
  //   const signInData = new SignInData(signInForm.value.username, signInForm.value.password);
  //   this.authenticationService.authenticate(signInData);
  // }
}
