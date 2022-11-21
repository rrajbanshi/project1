import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  phoneNumberRegex = '^\\d{10}$'; //10 digit number compulsory
  emailRegex = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';
  passwordRegex =
    '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'; //8 char 1 upper 1 lower 1 number 1 special
  nameRegex = '[a-zA-Z]+\\.?';
  signupForm!: FormGroup;
  constructor(
    private formsBuilder: FormBuilder,
    private _http: HttpClient,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formsBuilder.group({
      firstName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(15),
          Validators.pattern(this.nameRegex),
        ],
      ],
      lastName: [''],
      phoneNumber: [
        '',
        [Validators.required, Validators.pattern(this.phoneNumberRegex)],
      ],
      email: ['', [Validators.required, Validators.pattern(this.emailRegex)]],
      password: [
        '',
        [Validators.required, Validators.pattern(this.passwordRegex)],
      ],
    });
  }

  get firstName() {
    return this.signupForm.get('firstName');
  }
  get lastName() {
    return this.signupForm.get('lastName');
  }
  get email() {
    return this.signupForm.get('email');
  }
  get password() {
    return this.signupForm.get('password');
  }
  get phoneNumber() {
    return this.signupForm.get('phoneNumber');
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
