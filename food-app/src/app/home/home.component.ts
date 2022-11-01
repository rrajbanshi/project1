import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { ItemDetails } from '../shared/item.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _http : HttpClient, public _cartService : CartService, private _router : Router) { }
  items !: ItemDetails[]   //array of items

  itemZero : boolean = false;

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this._http.get<any>("http://localhost:3000/items").subscribe(res=>{
      this.items = res;
      if(this.items.length == 0){
         this.itemZero = true;
         console.log("No data to be fetched: ")
      }
    },
    err=>{
      console.log("Server side failure")
    }
    )
  }

  AddItemToCart(item : ItemDetails){
   this._cartService.cartData = item;
  //  console.log(item)
  }

  itemAddedToCart(){
   
    alert("Item added successfully");
    this._cartService.totalItemsInCart.push(this._cartService.cartData);
    //this._router.navigateByUrl("/home");
  }
}


// onSubmitLoginForm(){
//   this._http.get<any>("http://localhost:3000/signup").subscribe(res=>{
//     const user = res.find((a : any) =>{
//       return a.email === this.loginFormData.value.email && a.password === this.loginFormData.value.password
//     })
//     if(user){
//       alert("login successfull");
//       this.loginFormData.reset()
//       this._loginService.onLoginSignupPage = false;   //making page to show the info of user 
//       this._router.navigateByUrl("/home")
//     }else{
//       alert("Invalid Username or Password")
//     }
//   },
//   err=>{
//     alert("server side failure")
//   }
//   )
//  }
