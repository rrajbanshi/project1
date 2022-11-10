import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  constructor(
    private formsBuilder: FormBuilder,
    private _http: HttpClient,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formsBuilder.group({
      firstName: [''],
      lastName: [''],
      phoneNumber: [''],
      email: [''],
      password: [''],
    });
  }

  onFormSubmit() {
    this._http
      .post<any>('http://localhost:3000/accounts', this.signupForm.value)
      .subscribe(
        (res) => {
          alert('Registration successfull !!!');
          this.signupForm.reset();
          this._router.navigateByUrl('/login');
        },
        (err) => {
          alert('something wrong');
        }
      );
  }
}
