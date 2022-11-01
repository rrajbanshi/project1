import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  

  // loggedUserDetail !: User[];  //all users array  
   singleUserLoggedIn !: User //a single user which is logged in
  constructor(private _loginService : LoginService, private _http : HttpClient) {
    // this.singleUserLoggedIn = {
    //   "firstName": "Not Set",
    //   "lastName": "Not Set",
    //   "phoneNumber": 0,
    //   "email": "Not Set",
    //   "password": "Not Set",
    //   "id": 0,
    //   "profession":"not set"
    // }
    this.singleUserLoggedIn = this._loginService.singleUserLoggedIn;
  }

  // getData(){
  //   this._http.get<any>("http://localhost:3000/signup").subscribe(res=>{
  //     this.loggedUserDetail = res;
  //    let resultant_data =  this.loggedUserDetail.find(({email})=>email === this._loginService.currentlyLogggedInEmail);
  //   this.singleUserLoggedIn.id = <number>resultant_data?.id;
  //   this.singleUserLoggedIn.email = <string>resultant_data?.email;
  //   this.singleUserLoggedIn.firstName = <string>resultant_data?.firstName;
  //   this.singleUserLoggedIn.lastName = <string>resultant_data?.lastName;
  //   this.singleUserLoggedIn.password = <string>resultant_data?.password
  //   this.singleUserLoggedIn.phoneNumber = <number>resultant_data?.phoneNumber;
  //   },
  //   err=>{
  //     console.log("Server side failure")
  //   }
  //   )
  // }
  ngOnInit(): void {
  //  this._loginService.getData();
  }

}
