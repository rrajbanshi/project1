import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormGroup, FormControl} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signupForm !: FormGroup;


  onFormSubmit(){
    this._http.post<any>("http://localhost:3000/signup", this.signupForm.value).subscribe(res =>{
       alert("Registration successfull !!!");
       this.signupForm.reset();
       this._router.navigateByUrl("/signin")
    },
    err =>{
      alert("something wrong")
    }
    );
    
  }
  constructor(private formsBuilder :FormBuilder, private _http : HttpClient, private _router : Router) { }

  ngOnInit(): void {
    this.signupForm = this.formsBuilder.group({
      firstName:[''],
      lastName:[''],
      phoneNumber:[''],
      email:[''],
      password:['']
    })
  }

}
