import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserCredential } from '../model/userCredentials.model';
import { UserCrentialService } from '../services/user-crential.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginFormData!: FormGroup;
  userCred!: UserCredential;
  currentlyLoggedInName!: string;
  currentlyLoggedInEmail!: string;
  singleUserData!: UserCredential;
  constructor(
    private _router: Router,
    private _formBuilder: FormBuilder,
    private _http: HttpClient,
    private _userCredService: UserCrentialService
  ) {}

  ngOnInit(): void {
    this.loginFormData = this._formBuilder.group({
      email: [''],
      password: [''],
    });
  }

  onSubmitLoginForm() {
    this._userCredService.getAllCredential().subscribe(
      (data) => {
        const user = data.find((a: any) => {
          console.log(a);

          this.singleUserData = a;
          return (
            a.email === this.loginFormData.value.email &&
            a.password === this.loginFormData.value.password
          );
        });
        if (user) {
          alert('Login SuccessFul');
          this._userCredService.onLoginSignupPage = false;
          this._userCredService.singleUserData = this.singleUserData;
          this.loginFormData.reset();
          this._router.navigate(['home']);
        } else {
          alert('Invalid username and password');
        }
      },
      (err) => {
        alert('server side failure');
      }
    );
  }
}
