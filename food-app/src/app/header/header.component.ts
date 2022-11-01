import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _loginService : LoginService, private _router : Router, public _cartService : CartService) { }

  userLogin : boolean = this._loginService.onLoginSignupPage;

  nameOfUser: string = this._loginService.currentyLoggedInUserDisplayName

  totalSum : number = 0;
  
  ngOnInit(): void {
    this._loginService.getData();
  }

  displayTotalSum(){
   
  }

  logOutFromDevice(){
    this._loginService.onLoginSignupPage = true;
    alert("you have succesfully logged off");
    this._router.navigateByUrl("/logout")
  }

}
