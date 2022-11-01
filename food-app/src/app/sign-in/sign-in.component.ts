import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
 loginFormData !: FormGroup;
 currentyLoggedIn !:string  //to set currently logged in email to get all the data during find
 currentyLoggedinName !:string; //to set a name and display a username near a cart
 onSubmitLoginForm(){
  this._http.get<any>("http://localhost:3000/signup").subscribe(res=>{
    const user = res.find((a : any) =>{
      this.currentyLoggedIn = a.email;
      this.currentyLoggedinName = a.firstName
      return a.email === this.loginFormData.value.email && a.password === this.loginFormData.value.password
      
    })
    if(user){
      alert("login successfull");
      this.loginFormData.reset()
      this._loginService.onLoginSignupPage = false;   //making page to show the info of user 
      this._loginService.currentlyLogggedInEmail = this.currentyLoggedIn
      //to set which email is currently logged in to fetch the info of curr user
      this._loginService.currentyLoggedInUserDisplayName = this.currentyLoggedinName; 
      this._router.navigateByUrl("/home")
    }else{
      alert("Invalid Username or Password")
    }
  },
  err=>{
    alert("server side failure")
  }
  )
 }

  constructor(private _formBuilder : FormBuilder, 
    private _http : HttpClient, private _router : Router, private _loginService : LoginService) { }

  ngOnInit(): void {
    this.loginFormData = this._formBuilder.group({
      email: [''],
      password: ['']
    })
  }

}
